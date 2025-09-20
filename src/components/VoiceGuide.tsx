import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface VoiceGuideProps {
  text: string;
  language?: string;
}

const VoiceGuide: React.FC<VoiceGuideProps> = ({ text, language = 'hi-IN' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  const speak = () => {
    if ('speechSynthesis' in window && isEnabled) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;
      utterance.rate = 0.8;
      utterance.pitch = 1;
      
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      
      speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={isEnabled ? () => setIsEnabled(false) : () => setIsEnabled(true)}
        className={`p-2 rounded-lg transition-all duration-300 ${
          isEnabled 
            ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' 
            : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
        }`}
        title={isEnabled ? 'Disable voice guide' : 'Enable voice guide'}
      >
        {isEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>
      
      {isEnabled && (
        <button
          onClick={isPlaying ? stopSpeaking : speak}
          className="flex items-center gap-2 bg-green-100 text-green-600 hover:bg-green-200 px-3 py-2 rounded-lg transition-all duration-300"
          title={isPlaying ? 'Stop speaking' : 'Read aloud'}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          <span className="text-sm font-medium">
            {isPlaying ? 'रोकें / Stop' : 'सुनें / Listen'}
          </span>
        </button>
      )}
    </div>
  );
};

export default VoiceGuide;