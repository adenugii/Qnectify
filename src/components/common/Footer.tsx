import Image from "next/image";
import { FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-[#2563eb] pt-10 pb-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start gap-8 md:gap-0">
        {/* Logo & desc */}
        <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
          <div className="flex items-center gap-3">
            <Image src="/qnectify-logo.svg" alt="Qnectify Logo" width={56} height={56} />
            <span className="text-4xl font-extrabold text-[#2563eb]">Qnectify</span>
          </div>
          <p className="text-[#3b82f6] mt-4 text-sm max-w-xs">
            Upload materi apapun dan dapatkan quiz secara otomatis, belajar jadi seru dengan XP, level, dan badge!
          </p>
        </div>
        {/* Links */}
        <div className="flex-[2] grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          <div>
            <div className="font-bold mb-2">Product</div>
            <ul className="space-y-1 text-[#338CFF] text-sm">
              <li><a href="#">Overview</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Customer stories</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Resources</div>
            <ul className="space-y-1 text-[#338CFF] text-sm">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Guides & tutorials</a></li>
              <li><a href="#">Help center</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold  mb-2">Company</div>
            <ul className="space-y-1 text-[#338CFF] text-sm">
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Media kit</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-[#222] my-6" />
      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#2563eb]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span>🌐</span>
            <span>English</span>
            <svg width="10" height="6" className="inline ml-1" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <a href="#" className="hover:underline">Terms & privacy</a>
          <a href="#" className="hover:underline">Security</a>
          <a href="#" className="hover:underline">Status</a>
        </div>
        <div className="flex-1 text-center md:text-left">
          ©2021 Whitepace LLC.
        </div>
        <div className="flex items-center gap-4 text-white">
          <a href="#" aria-label="Facebook"><FaFacebookF size={16} /></a>
          <a href="#" aria-label="Twitter"><FaTwitter size={16} /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
