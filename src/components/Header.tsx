import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative overflow-hidden group">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 transition-all duration-1000 group-hover:from-green-700 group-hover:via-emerald-700 group-hover:to-cyan-700"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-yellow-400/10 via-orange-400/10 to-red-400/10 animate-pulse delay-1000"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse hover:scale-150 transition-transform duration-1000"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-1000 hover:scale-150 transition-transform duration-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse delay-500 hover:scale-125 transition-transform duration-1000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-300/50 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-blue-300/40 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-green-300/50 rounded-full animate-ping delay-1000"></div>
      </div>
      
      
      <div className="relative z-10 py-12 px-4 hover:py-16 transition-all duration-500">
        <div className="max-w-6xl mx-auto text-center">
          {/* Award badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full mb-6 text-white hover:bg-white/30 hover:scale-105 transition-all duration-300 cursor-pointer group/badge">
          <div className="flex items-center justify-center gap-4 mb-4 group/title">
            <div className="text-6xl animate-pulse hover:animate-spin hover:scale-125 transition-all duration-500 cursor-pointer">🐄</div>
            <div className="hover:scale-105 transition-transform duration-300">
              <h1 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight hover:tracking-wider transition-all duration-500 cursor-default">
                PASHU MITRA
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto group-hover/title:w-48 group-hover/title:h-2 transition-all duration-500"></div>
            </div>
            <div className="text-6xl animate-pulse delay-500 hover:animate-spin hover:scale-125 transition-all duration-500 cursor-pointer">🐃</div>
          </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-green-100 font-medium mb-4 max-w-3xl mx-auto leading-relaxed hover:text-white hover:scale-105 transition-all duration-300 cursor-default">
            Revolutionary AI-Powered Livestock Breed Recognition Platform
          </p>
          
          {/* Description */}
          <p className="text-green-200 text-lg mb-6 max-w-2xl mx-auto hover:text-green-100 transition-colors duration-300 cursor-default">
            Empowering farmers with cutting-edge artificial intelligence to identify cattle and buffalo breeds instantly
          </p>
          
          {/* Made with love badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-green-100 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group/love">
            <span className="text-sm">Crafted with</span>
            <Heart size={14} className="fill-current text-red-400 animate-pulse group-hover/love:animate-bounce group-hover/love:text-red-300" />
            <span className="text-sm font-medium">for Indian Agriculture</span>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-8 max-w-md mx-auto">
            <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer group/stat1">
              <div className="text-2xl font-bold text-white group-hover/stat1:text-3xl group-hover/stat1:text-yellow-300 transition-all duration-300">50+</div>
              <div className="text-xs text-green-200 group-hover/stat1:text-green-100 group-hover/stat1:font-medium transition-all duration-300">Breeds</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer group/stat2">
              <div className="text-2xl font-bold text-white group-hover/stat2:text-3xl group-hover/stat2:text-blue-300 transition-all duration-300">95%</div>
              <div className="text-xs text-green-200 group-hover/stat2:text-green-100 group-hover/stat2:font-medium transition-all duration-300">Accuracy</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer group/stat3">
              <div className="text-2xl font-bold text-white group-hover/stat3:text-3xl group-hover/stat3:text-purple-300 transition-all duration-300">10K+</div>
              <div className="text-xs text-green-200 group-hover/stat3:text-green-100 group-hover/stat3:font-medium transition-all duration-300">Users</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;