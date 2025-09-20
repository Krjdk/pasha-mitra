import React from 'react';
import { Target, Users, Award, TrendingUp, Heart, Sparkles, Shield, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Farmers Helped', color: 'from-blue-500 to-blue-600' },
    { icon: Award, value: '50+', label: 'Breeds Identified', color: 'from-green-500 to-green-600' },
    { icon: TrendingUp, value: '95%', label: 'Accuracy Rate', color: 'from-purple-500 to-purple-600' },
    { icon: Globe, value: '15+', label: 'States Covered', color: 'from-orange-500 to-orange-600' }
  ];

  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Chief Agricultural Scientist',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      expertise: 'Animal Husbandry & Genetics'
    },
    {
      name: 'Priya Sharma',
      role: 'AI/ML Engineer',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      expertise: 'Computer Vision & Deep Learning'
    },
    {
      name: 'Amit Patel',
      role: 'Veterinary Consultant',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg',
      expertise: 'Livestock Health & Nutrition'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Farmer-First Approach',
      description: 'Every decision we make prioritizes the needs and success of farmers across India.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Sparkles,
      title: 'Innovation Excellence',
      description: 'Leveraging cutting-edge AI technology to solve real-world agricultural challenges.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Reliable Solutions',
      description: 'Providing accurate, dependable breed identification that farmers can trust.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Pashu Mitra
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing Indian agriculture through AI-powered livestock breed identification, 
            empowering farmers with knowledge for better productivity and profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 animate-slideInUp">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center">
                <Target className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              To democratize livestock breed identification through artificial intelligence, 
              ensuring every farmer in India has access to accurate breed information for 
              optimal animal care, breeding decisions, and economic outcomes.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200">
              <p className="text-green-800 font-medium">
                "Bridging the knowledge gap between traditional farming and modern technology"
              </p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 animate-slideInUp delay-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center">
                <Sparkles className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              To become India's leading platform for livestock management, where every farmer 
              can make informed decisions about their animals, leading to increased productivity, 
              better animal welfare, and sustainable agricultural practices.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-200">
              <p className="text-blue-800 font-medium">
                "Transforming agriculture through intelligent technology solutions"
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-slideInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fadeIn">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-slideInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`bg-gradient-to-br ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fadeIn">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-slideInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 text-center border border-green-200 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">The Problem We're Solving</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">Current Challenges</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>70% of farmers cannot accurately identify their livestock breeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Improper feeding leads to 30-40% productivity loss</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Uncontrolled cross-breeding reduces genetic quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Market value losses due to breed misidentification</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">Our Solution</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Instant AI-powered breed identification with 95% accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Breed-specific care and feeding recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Genetic information for better breeding decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Market value optimization through proper identification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;