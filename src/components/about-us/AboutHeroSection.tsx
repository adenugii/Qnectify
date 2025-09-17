"use client";
import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#2563eb] to-[#1e40af] py-16 px-4  min-h-[480px] flex items-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
        <div className="flex-1 flex flex-col items-center md:items-start justify-center">
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start w-full">
            <Image src="/qnectify-logo.svg" alt="Qnectify Logo" width={64} height={64} />
            <span className="text-4xl font-extrabold text-white">Qnectify</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center md:text-left">
            Tentang <span className="text-[#b3d1ff]">Kami</span>
          </h1>
          <p className="text-white/90 text-lg mb-8 text-center md:text-left">
            Belajar jadi seru dengan AI, quiz, dan kolaborasi
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <a
              href="#about-journey"
              className="inline-flex items-center gap-2 bg-white text-[#2563eb] font-semibold px-6 py-3 rounded-full shadow hover:bg-[#f0f6ff] transition"
            >
              <span>
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path fill="#2563eb" d="M10 2a1 1 0 0 1 1 1v11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5A1 1 0 1 1 5.707 11.293L9 14.586V3a1 1 0 0 1 1-1z"/>
                </svg>
              </span>
              Mulai Eksplorasi
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/about-hero-illustration.png"
            alt="Qnectify Team"
            width={340}
            height={340}
            className="rounded-full shadow-xl"
          />
        </div>
      </div>
      {/* Floating icons */}
      <div className="absolute left-10 top-10 z-0">
        <Image src="/about-icon-rocket.png" alt="" width={40} height={40} />
      </div>
      <div className="absolute right-10 top-20 z-0">
        <Image src="/about-icon-lightbulb.png" alt="" width={40} height={40} />
      </div>
      <div className="absolute left-20 bottom-10 z-0">
        <Image src="/about-icon-xp.png" alt="" width={40} height={40} />
      </div>
      <div className="absolute right-24 bottom-16 z-0">
        <Image src="/about-icon-trophy.png" alt="" width={40} height={40} />
      </div>
    </section>
  );
}
