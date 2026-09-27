import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-gray-200 bg-white px-4 sm:px-6 md:px-12 py-8 sm:py-10 overflow-hidden">
      {/* Background subtle web in footer corner */}
      <div className="pointer-events-none absolute -bottom-16 -right-16 w-48 h-48 opacity-[0.07] mix-blend-multiply">
        <Image
          src="/spiderman/web1.png"
          alt="Spider Web"
          fill
          sizes="192px"
          className="object-contain"
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:gap-6 font-mono text-xs text-gray-500 md:flex-row relative z-10 text-center md:text-left">
        <div className="flex items-center gap-2">
          <Image
            src="/spiderman/spydy.png"
            alt="Spider"
            width={16}
            height={16}
            className="h-4 w-4 object-contain brightness-95 shrink-0"
          />
          <p>
            &copy; {year} <span className="font-bold text-gray-900">Prince Albert</span>.
            Engineered with Spider-Sense &amp; Next.js.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-6 text-center">
          <span className="text-[11px] text-[#a31515] font-bold uppercase tracking-wider">
            With great power comes great code.
          </span>
          <a
            href="#top"
            className="transition-colors hover:text-[#a31515] font-bold uppercase tracking-wider"
          >
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
