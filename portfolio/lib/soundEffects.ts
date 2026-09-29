"use client";

// Web Audio API Synthesizer for Spider-Man Micro-Interactions
// 100% client-side, zero external assets, instant 0ms latency

let audioCtx: AudioContext | null = null;
let soundEnabled = false;

export function initAudio() {
  if (typeof window === "undefined") return;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

export function setSoundEnabled(enabled: boolean) {
  soundEnabled = enabled;
  if (enabled) {
    initAudio();
  }
}

export function isSoundEnabled() {
  return soundEnabled;
}

// 1. Web-Shooter "THWIP" Sound
export function playThwipSound() {
  if (!soundEnabled || !audioCtx) return;
  try {
    initAudio();
    const ctx = audioCtx;
    const now = ctx.currentTime;

    // High-pass filtered noise burst for the pneumatic air release
    const bufferSize = ctx.sampleRate * 0.08;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.setValueAtTime(2400, now);
    noiseFilter.frequency.exponentialRampToValueAtTime(600, now + 0.08);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.18, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    // Fast frequency sweep for the string whip
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.07);

    oscGain.gain.setValueAtTime(0.12, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    noise.start(now);
    osc.start(now);
    osc.stop(now + 0.09);
  } catch {
    // Audio context suspended or user gesture blocked
  }
}

// 2. Spider-Sense Comic Tingle Chime
export function playSpiderSenseSound() {
  if (!soundEnabled || !audioCtx) return;
  try {
    initAudio();
    const ctx = audioCtx;
    const now = ctx.currentTime;

    const notes = [880, 1174, 1480, 1760, 2093]; // A5, D6, F#6, A6, C7
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);

      gain.gain.setValueAtTime(0.08, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.3);
    });
  } catch {
    // Audio blocked
  }
}

// 3. Mechanical Click (Buttons / Filter Tabs)
export function playClickSound() {
  if (!soundEnabled || !audioCtx) return;
  try {
    initAudio();
    const ctx = audioCtx;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(900, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.035);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  } catch {
    // Audio blocked
  }
}

// 4. Mission Accomplished / Submit Success Sound
export function playSuccessSound() {
  if (!soundEnabled || !audioCtx) return;
  try {
    initAudio();
    const ctx = audioCtx;
    const now = ctx.currentTime;

    const chord = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    chord.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0.09, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.65);
    });
  } catch {
    // Audio blocked
  }
}

// 5. Symbiote Suit / Black Suit Transformation Sound
export function playSymbioteSound(toSymbiote: boolean) {
  if (!soundEnabled || !audioCtx) return;
  try {
    initAudio();
    const ctx = audioCtx;
    const now = ctx.currentTime;

    if (toSymbiote) {
      // Dark Symbiote transformation sound: deep resonating drop & dark frequency surge
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = "sawtooth";
      subOsc.frequency.setValueAtTime(180, now);
      subOsc.frequency.exponentialRampToValueAtTime(45, now + 0.35);

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(120, now + 0.35);
      filter.Q.setValueAtTime(6, now);

      subGain.gain.setValueAtTime(0.2, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      subOsc.connect(filter);
      filter.connect(subGain);
      subGain.connect(ctx.destination);

      subOsc.start(now);
      subOsc.stop(now + 0.45);

      // Atmospheric hiss
      const bufferSize = ctx.sampleRate * 0.2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.08, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      noise.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      noise.start(now);
    } else {
      // Classic Suit return: heroic, bright chime
      const heroicNotes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
      heroicNotes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.04);
        gain.gain.setValueAtTime(0.1, now + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.04);
        osc.stop(now + idx * 0.04 + 0.45);
      });
    }
  } catch {
    // Audio blocked
  }
}
