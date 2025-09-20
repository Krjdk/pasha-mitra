import React from 'react';
import { Heart, Github, Twitter, Mail, Award, Users, TrendingUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🐄</div>
                <h3 className="text-2xl font-black text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">
                  PASHU MITRA
                </h3>
                <div className="text-3xl">🐃</div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed max-w-md">
                Revolutionizing livestock management through cutting-edge AI technology. 
                Empowering farmers with instant breed identification and expert care guidance.
              </p>
              
              {/* Achievement badges */}
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 px-3 py-1 rounded-full flex items-center gap-2">
                  <Award size={14} className="text-green-400" />
                  <span className="text-xs text-green-300 font-medium">AI-Powered</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full flex items-center gap-2">
                  <Users size={14} className="text-blue-400" />
                  <span className="text-xs text-blue-300 font-medium">10K+ Users</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 px-3 py-1 rounded-full flex items-center gap-2">
                  <TrendingUp size={14} className="text-purple-400" />
                  <span className="text-xs text-purple-300 font-medium">95% Accuracy</span>
                </div>
              </div>
            </div>
            
            {/* Quick links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Features</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-green-400 transition-colors cursor-pointer">Breed Recognition</li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">Care Guidelines</li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">Productivity Data</li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">Expert Tips</li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Documentation</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">API Reference</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Community</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Contact Us</li>
              </ul>
            </div>
          </div>
          
          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text mb-1">50+</div>
              <div className="text-sm text-gray-400">Breeds Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-1">95%</div>
              <div className="text-sm text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1">10K+</div>
              <div className="text-sm text-gray-400">Happy Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text mb-1">24/7</div>
              <div className="text-sm text-gray-400">AI Available</div>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="text-gray-400">Made with</span>
              <Heart size={16} className="fill-current text-red-400 animate-pulse" />
              <span className="text-gray-400">for Indian Agriculture</span>
            </div>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                <Github size={18} className="text-gray-300 hover:text-white" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                <Twitter size={18} className="text-gray-300 hover:text-white" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                <Mail size={18} className="text-gray-300 hover:text-white" />
              </button>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Pashu Mitra. Transforming Agriculture with AI Technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;