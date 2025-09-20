import React from 'react';
import { BreedResult } from '../types';
import { ArrowLeft, MapPin, Weight, Ruler, Clock, Milk, Star, TrendingUp, Shield } from 'lucide-react';

interface BreedResultsProps {
  result: BreedResult;
  onBack: () => void;
  imageUrl?: string;
}

const BreedResults: React.FC<BreedResultsProps> = ({ result, onBack, imageUrl }) => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'from-green-500 to-emerald-500';
    if (confidence >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const getConfidenceText = (confidence: number) => {
    if (confidence >= 80) return 'Excellent Match';
    if (confidence >= 60) return 'Good Match';
    return 'Possible Match';
  };

  const getAnimalTypeIcon = (type: string) => {
    return type === 'cattle' ? '🐄' : '🐃';
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header with back button and confidence */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6 border border-white/20">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-all duration-300 hover:bg-gray-100 px-4 py-2 rounded-xl"
          >
            दूसरे पशु का विश्लेषण करें / Analyze Another Animal
            <span className="font-medium">वापस जाएं / Back to Upload</span>
          </button>
          
          <div className={`px-4 py-2 rounded-full text-white font-bold bg-gradient-to-r ${getConfidenceColor(result.confidence)} shadow-lg`}>
            <div className="flex items-center gap-2">
              <Star size={16} />
              <span>{result.confidence.toFixed(1)}% • {getConfidenceText(result.confidence)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main result card */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        {/* Image section */}
        {imageUrl && (
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={imageUrl}
              alt="Analyzed animal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-4xl mb-2">{getAnimalTypeIcon(result.animalType)}</div>
              <h1 className="text-3xl md:text-4xl font-black mb-1">{result.breed}</h1>
              <p className="text-lg capitalize opacity-90">{result.animalType} Breed</p>
            </div>
          </div>
        )}

        {/* Content section */}
        <div className="p-8">
          {!imageUrl && (
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{getAnimalTypeIcon(result.animalType)}</div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-2">{result.breed}</h1>
              <p className="text-xl text-gray-600 capitalize">{result.animalType} Breed</p>
            </div>
          )}

          {/* Key metrics grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 text-center border border-green-200">
              <div className="bg-green-500 w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <MapPin size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-green-800 text-sm mb-1">Origin</h3>
              <p className="text-green-700 text-xs leading-tight">{result.origin}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 text-center border border-blue-200">
              <div className="bg-blue-500 w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Weight size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-blue-800 text-sm mb-1">Weight</h3>
              <p className="text-blue-700 text-xs leading-tight">{result.avgWeight}</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 text-center border border-purple-200">
              <div className="bg-purple-500 w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Ruler size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-purple-800 text-sm mb-1">Height</h3>
              <p className="text-purple-700 text-xs leading-tight">{result.avgHeight}</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 text-center border border-orange-200">
              <div className="bg-orange-500 w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Clock size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-orange-800 text-sm mb-1">Lifespan</h3>
              <p className="text-orange-700 text-xs leading-tight">{result.lifespan}</p>
            </div>
          </div>

          {/* Detailed sections */}
          <div className="space-y-6">
            {/* Productivity */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Productivity & Performance</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{result.productivity}</p>
            </div>

            {/* Characteristics */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Star size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Key Characteristics</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {result.characteristics.map((characteristic, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/60 rounded-xl p-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{characteristic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Care Tips */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Shield size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Expert Care Recommendations</h3>
              </div>
              <div className="space-y-3">
                {result.careTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/60 rounded-xl p-4">
                    <div className="bg-gradient-to-br from-amber-500 to-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-8 text-center">
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Analyze Another Animal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedResults;