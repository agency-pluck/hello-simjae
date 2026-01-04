"use client";

import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-gray-600">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>by 심재형</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
