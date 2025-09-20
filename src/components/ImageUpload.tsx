import React, { useRef } from 'react';
import { Upload, Image, Sparkles } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  isLoading: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, isLoading }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onImageUpload(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      onImageUpload(files[0]);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <Sparkles className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            फोटो अपलोड करें / Upload Animal Image
          </h3>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            फोटो को यहाँ खींचें या क्लिक करके चुनें / Drag & drop or click to select an image for AI analysis
          </p>
        </div>
        
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-blue-400 transition-all duration-500 cursor-pointer hover:bg-blue-50/50 hover:scale-105 hover:shadow-lg relative overflow-hidden"
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 hover:from-blue-100 hover:to-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto transition-all duration-500 hover:scale-110 hover:rotate-6">
              <Image className="text-gray-500 hover:text-blue-600 transition-colors duration-300" size={32} />
            </div>
            
            <div>
              <p className="text-lg font-semibold text-gray-700 mb-2">
                यहाँ फोटो डालें या <span className="text-blue-600">चुनें</span>
                <br />
                <span className="text-base">Drop your image here, or <span className="text-blue-600">browse</span></span>
              </p>
              <p className="text-sm text-gray-500">
                JPG, PNG, WEBP तक 10MB / 
                Supports JPG, PNG, WEBP up to 10MB
              </p>
            </div>
          </div>
          </div>
        </div>
        
        <div className="mt-8">
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 relative overflow-hidden group/btn"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-center gap-3">
            <Upload size={24} className="group-hover/btn:animate-bounce" />
            {isLoading ? 'विश्लेषण हो रहा है... / Analyzing...' : 'फोटो चुनें / Select Image to Analyze'}
            </div>
          </button>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-4 text-center">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group/card1">
            <div className="text-2xl mb-2">🐄</div>
            <p className="text-sm font-medium text-green-800 group-hover/card1:text-green-900 transition-colors duration-300">Cattle Breeds</p>
            <p className="text-xs text-green-600 group-hover/card1:text-green-700 transition-colors duration-300">
              गाय की नस्लें / Cattle Breeds<br />
              Gir, Holstein, Sahiwal & more
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group/card2">
            <div className="text-2xl mb-2">🐃</div>
            <p className="text-sm font-medium text-blue-800 group-hover/card2:text-blue-900 transition-colors duration-300">Buffalo Breeds</p>
            <p className="text-xs text-blue-600 group-hover/card2:text-blue-700 transition-colors duration-300">
              भैंस की नस्लें / Buffalo Breeds<br />
              Murrah, Surti, Nili-Ravi & more
            </p>
          </div>
        </div>
        </div>
        
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ImageUpload;