import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message, botcheck } = await req.json();

    // Anti-spam honeypot
    if (botcheck) {
      return NextResponse.json({ success: true, message: "Message received." });
    }

    // Input validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your name." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        {
          success: false,
          error: "Message must be at least 5 characters long.",
        },
        { status: 400 },
      );
    }

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      // Return a graceful notification to trigger mailto fallback
      return NextResponse.json({
        success: false,
        noKeyConfigured: true,
        error: "No email service key configured. Fallback to direct email.",
      });
    }

    // Forward to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        subject: `New Portfolio Message from ${name.trim()} via Spider-Portfolio`,
        from_name: `${name.trim()} (Portfolio Contact)`,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully!",
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: data.message || "Failed to deliver message via gateway.",
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try emailing directly.",
      },
      { status: 500 },
    );
  }
}
