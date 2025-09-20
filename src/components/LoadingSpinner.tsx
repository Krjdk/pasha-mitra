import React from 'react';
import { Brain, Sparkles } from 'lucide-react';

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = "AI is analyzing your image..." 
}) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 max-w-sm mx-4 text-center shadow-2xl border border-white/20 transform animate-scaleIn hover:scale-105 transition-transform duration-300">
        {/* Animated AI brain */}
        <div className="relative mb-6">
          <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto shadow-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Brain className="text-blue-600 animate-pulse hover:text-blue-700 transition-colors duration-300" size={32} />
          </div>
          
          {/* Floating sparkles */}
          <div className="absolute -top-2 -right-2 animate-bounce">
            <Sparkles className="text-yellow-400 animate-pulse hover:text-yellow-500 transition-colors duration-300" size={16} />
          </div>
          <div className="absolute -bottom-2 -left-2 animate-bounce delay-300">
            <Sparkles className="text-purple-400 animate-pulse delay-300 hover:text-purple-500 transition-colors duration-300" size={12} />
          </div>
          <div className="absolute top-1/2 -right-4 animate-bounce delay-500">
            <Sparkles className="text-green-400 animate-pulse delay-500 hover:text-green-500 transition-colors duration-300" size={14} />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-300">AI Processing</h3>
        <p className="text-gray-700 font-medium mb-3 hover:text-gray-800 transition-colors duration-300">{message}</p>
        <p className="text-gray-500 text-sm hover:text-gray-600 transition-colors duration-300">
          Our advanced neural networks are identifying breed characteristics...
        </p>
        
        {/* Progress indicators */}
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Analyzing features</span>
            <span>95%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse shadow-lg" style={{width: '95%'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;