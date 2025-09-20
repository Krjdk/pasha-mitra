import React from 'react';
import { Camera, Brain, BookOpen, TrendingUp, Shield, Users, Smartphone, Cloud } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Camera,
      title: 'AI Breed Recognition',
      description: 'Upload a photo and get instant breed identification with detailed characteristics and care instructions.',
      features: ['95% accuracy rate', 'Supports 50+ breeds', 'Instant results', 'Mobile-friendly'],
      color: 'from-blue-500 to-blue-600',
      popular: true
    },
    {
      icon: BookOpen,
      title: 'Breed Database Access',
      description: 'Comprehensive database of cattle and buffalo breeds with detailed information and care guidelines.',
      features: ['Complete breed profiles', 'Care instructions', 'Feeding guidelines', 'Health tips'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Productivity Analytics',
      description: 'Get insights into milk production, growth rates, and economic potential of your livestock.',
      features: ['Production forecasts', 'Economic analysis', 'Performance tracking', 'ROI calculations'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Health Monitoring',
      description: 'Breed-specific health recommendations and disease prevention strategies for optimal animal welfare.',
      features: ['Disease prevention', 'Vaccination schedules', 'Health alerts', 'Vet consultations'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Connect with veterinarians and animal husbandry experts for personalized advice.',
      features: ['24/7 support', 'Expert advice', 'Custom solutions', 'Emergency assistance'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Access all features on-the-go with our user-friendly mobile application.',
      features: ['Offline capability', 'Camera integration', 'Cloud sync', 'Multi-language'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'Perfect for small farmers',
      features: [
        '10 breed identifications per month',
        'Basic breed information',
        'Community support',
        'Mobile app access'
      ],
      color: 'from-gray-500 to-gray-600',
      popular: false
    },
    {
      name: 'Professional',
      price: '₹299/month',
      description: 'Ideal for medium farms',
      features: [
        'Unlimited breed identifications',
        'Detailed analytics',
        'Expert consultations',
        'Priority support',
        'Health monitoring',
        'Productivity insights'
      ],
      color: 'from-blue-500 to-blue-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large operations',
      features: [
        'All Professional features',
        'Custom integrations',
        'Dedicated support',
        'Training programs',
        'API access',
        'White-label solutions'
      ],
      color: 'from-purple-500 to-purple-600',
      popular: false
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI-powered solutions for livestock management, breed identification, 
            and agricultural optimization designed specifically for Indian farmers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-slideInUp relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Popular
                </div>
              )}
              
              <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fadeIn">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-slideInUp relative overflow-hidden ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <div className={`bg-gradient-to-br ${plan.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${plan.popular ? 'mt-8' : ''}`}>
                  <Brain className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-3xl font-black text-gray-800 mb-2">{plan.price}</div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                      <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}>
                  {plan.price === 'Free' ? 'Get Started' : plan.price === 'Custom' ? 'Contact Us' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border border-green-200 animate-fadeIn">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Pashu Mitra?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're not just a technology company - we're partners in your agricultural success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Advanced AI</h3>
              <p className="text-sm text-gray-600">Cutting-edge machine learning algorithms</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Reliable</h3>
              <p className="text-sm text-gray-600">95% accuracy rate with continuous improvement</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Expert Support</h3>
              <p className="text-sm text-gray-600">24/7 assistance from agricultural experts</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Cloud-Based</h3>
              <p className="text-sm text-gray-600">Access anywhere, anytime with data sync</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;