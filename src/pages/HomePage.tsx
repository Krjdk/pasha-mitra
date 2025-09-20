import React, { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import BreedResults from '../components/BreedResults';
import LoadingSpinner from '../components/LoadingSpinner';
import VisualGuide from '../components/VisualGuide';
import VoiceGuide from '../components/VoiceGuide';
import { geminiService } from '../services/geminiService';
import { BreedResult } from '../types';
import { AlertCircle, Sparkles, Award, Users, TrendingUp } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<BreedResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [capturedImageUrl, setCapturedImageUrl] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageUpload = async (file: File) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    const imageUrl = URL.createObjectURL(file);
    setCapturedImageUrl(imageUrl);

    try {
      const breedResult = await geminiService.analyzeImage(file);
      setResult(breedResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while analyzing the image');
      URL.revokeObjectURL(imageUrl);
      setCapturedImageUrl(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setResult(null);
    setError(null);
    if (capturedImageUrl) {
      URL.revokeObjectURL(capturedImageUrl);
      setCapturedImageUrl(null);
    }
  };

  const FeatureStats = () => (
    <div className="max-w-6xl mx-auto px-4 mb-16 transform transition-all duration-1000 delay-300" style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
    }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <Sparkles className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">AI-Powered Recognition</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Advanced machine learning algorithms identify breeds with 95%+ accuracy</p>
          </div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group overflow-hidden relative delay-100">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <Award className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">50+ Breeds Supported</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Comprehensive database of Indian and international cattle & buffalo breeds</p>
          </div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group overflow-hidden relative delay-200">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <TrendingUp className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">Instant Results</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Get detailed breed information, care tips, and productivity data in seconds</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="py-12">
      {!result && !error && (
        <>
          <FeatureStats />
          
          <div className="max-w-6xl mx-auto px-4 mb-12">
            <VisualGuide />
          </div>
          
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12 transform transition-all duration-1000 delay-500" style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full mb-6 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <Users size={16} className="text-green-600" />
                <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ Farmers</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
                पशु नस्ल पहचान / Identify Your Livestock Breed
              </h2>
              
              <div className="flex justify-center mb-4">
                <VoiceGuide text="अपने पशु की फोटो अपलोड करें और तुरंत AI द्वारा नस्ल की पहचान करवाएं। Upload a photo of your cattle or buffalo and get instant AI-powered breed identification." />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
                Identify Your Livestock Breed
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed hover:text-gray-700 transition-colors duration-300">
                अपने गाय या भैंस की फोटो अपलोड करें और तुरंत AI द्वारा नस्ल की पहचान करवाएं।
                <br />
                Upload a photo of your cattle or buffalo and get instant AI-powered breed identification 
                with detailed care instructions and productivity insights.
              </p>
            </div>
            
            <div className="transform transition-all duration-1000 delay-700" style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
            }}>
              <ImageUpload 
                onImageUpload={handleImageUpload} 
                isLoading={isLoading} 
              />
            </div>
          </div>
        </>
      )}

      {error && (
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white/90 backdrop-blur-sm border border-red-200 rounded-2xl p-8 text-center shadow-2xl transform transition-all duration-500 hover:scale-105 animate-fadeIn">
            <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <AlertCircle className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-red-800 mb-3">Analysis Failed</h3>
            <p className="text-red-700 mb-6 text-lg">{error}</p>
            <button
              onClick={handleBack}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {result && (
        <div className="px-4 animate-fadeIn">
          <BreedResults 
            result={result} 
            onBack={handleBack}
            imageUrl={capturedImageUrl || undefined}
          />
        </div>
      )}
      
      {isLoading && (
        <div className="animate-fadeIn">
          <LoadingSpinner />
        </div>
      )}
    </main>
  );
};

export default HomePage;