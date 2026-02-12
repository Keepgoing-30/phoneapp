"use client";
import Link from "next/link";
import { menuItem } from "./sidebar";

const Footer = () => {
  return (
    // Đổi w-[393px] thành w-full để an toàn trên mọi thiết bị
    <footer className="w-full border-t border-cyan-500/10 bg-sky-900/50 backdrop-blur-md shadow-xl py-8">
      {/* Đổi max-w-[392px] thành max-w-6xl để trải rộng trên máy tính */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo & Copyright Area */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-sans font-light tracking-[0.3em] text-3xl text-white indent-[0.7em]">
            MICHAEL
          </span>
          <p className="text-slate-500 text-[10px] md:text-xs mt-2 text-center md:text-left">
            © {new Date().getFullYear()} - Built with Next.js & Tailwind
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {menuItem.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              // Xóa các class flex thừa ở đây
              className="text-slate-300 hover:text-indigo-400 transition-all text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;