import React from 'react';
import { Camera, Upload, Eye, CheckCircle } from 'lucide-react';

const VisualGuide: React.FC = () => {
  const steps = [
    {
      icon: Camera,
      title: 'फोटो लें / Take Photo',
      description: 'अपने पशु की तस्वीर लें / Take a clear photo of your animal',
      visual: '📱➡️🐄',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Upload,
      title: 'अपलोड करें / Upload',
      description: 'फोटो को वेबसाइट पर अपलोड करें / Upload the photo to our website',
      visual: '📤➡️💻',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Eye,
      title: 'AI विश्लेषण / AI Analysis',
      description: 'हमारा AI आपके पशु को पहचानेगा / Our AI will identify your animal',
      visual: '🤖➡️🔍',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: CheckCircle,
      title: 'परिणाम / Results',
      description: 'नस्ल की जानकारी और देखभाल के तरीके / Get breed info and care tips',
      visual: '📋➡️✅',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          कैसे उपयोग करें / How to Use
        </h2>
        <p className="text-gray-600 text-lg">
          सिर्फ 4 आसान चरणों में अपने पशु की नस्ल जानें / Know your animal's breed in just 4 easy steps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="text-center group hover:scale-105 transition-all duration-300"
          >
            <div className="relative mb-4">
              <div className={`bg-gradient-to-br ${step.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <step.icon className="text-white" size={32} />
              </div>
              <div className="absolute -top-2 -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-gray-700">{index + 1}</span>
              </div>
            </div>
            
            <div className="text-4xl mb-3">{step.visual}</div>
            
            <h3 className="font-bold text-gray-800 mb-2 text-lg">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
        <div className="flex items-center justify-center gap-4 text-center">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">
              सुझाव / Tip
            </h4>
            <p className="text-gray-700 text-sm">
              बेहतर परिणाम के लिए साफ और स्पष्ट फोटो लें / Take clear and bright photos for better results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualGuide;