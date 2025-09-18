"use client";
import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#2563eb] to-[#1e40af] py-16 px-4  min-h-[480px] flex items-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
        <div className="flex-1 flex flex-col items-center md:items-start justify-center">
         <div className="flex items-center gap-4 mb-6 justify-center md:justify-center w-full bg-white p-2 rounded-full shadow-lg">
  <Image src="/logo_besar.png" alt="Quizzo Logo" width={64} height={64} />
  <span className="text-4xl font-extrabold text-[#2563eb]">QNECTIFY</span>
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
              className="inline-flex items-center justify-center  bg-white text-[#2563eb] font-semibold px-6 py-3 rounded-full shadow hover:bg-[#f0f6ff] transition"
            >
              <span>
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path fill="#2563eb"/>
                </svg>
              </span>
              Mulai Eksplorasi
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center relative">
          <Image
            src="/team.png"
            alt="Quizzo Team"
            width={300}
            height={300}
            className="rounded-full z-10"
          />
          {/* Floating icons mengelilingi team.png */}
          <div className="absolute" style={{ left: '10%', top: '-30px' }}>
            <Image src="/bola1.png" alt="" width={40} height={40} />
          </div>
          <div className="absolute" style={{ right: '10%', top: '0' }}>
            <Image src="/bola2.png" alt="" width={40} height={40} />
          </div>
          <div className="absolute" style={{ left: '-20px', bottom: '20%' }}>
            <Image src="/bola3.png" alt="" width={40} height={40} />
          </div>
          <div className="absolute" style={{ right: '-20px', bottom: '30%' }}>
            <Image src="/bola4.png" alt="" width={40} height={40} />
          </div>
          <div className="absolute" style={{ left: '50%', bottom: '-30px', transform: 'translateX(-50%)' }}>
            <Image src="/bola5.png" alt="" width={40} height={40} />
          </div>
        </div>
      </div>
    </section>
  );
}
