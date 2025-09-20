import React from 'react';
import { Calendar, User, ArrowRight, TrendingUp, AlertTriangle, Heart } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Hidden Crisis: Why Not Knowing Your Livestock Breed is Costing Farmers Millions",
      excerpt: "Every year, thousands of farmers lose significant income due to improper breed identification. Learn how this silent crisis affects productivity, health management, and profitability.",
      author: "Dr. Rajesh Kumar",
      date: "2025-01-15",
      category: "Crisis Analysis",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg",
      featured: true
    },
    {
      id: 2,
      title: "Cross-Breeding Gone Wrong: The Devastating Impact on Indian Agriculture",
      excerpt: "Uncontrolled cross-breeding without proper breed knowledge has led to genetic dilution, reduced milk production, and increased veterinary costs across rural India.",
      author: "Prof. Meera Sharma",
      date: "2025-01-12",
      category: "Breeding Issues",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
    },
    {
      id: 3,
      title: "Feed Optimization Crisis: How Wrong Breed Identification Leads to Malnutrition",
      excerpt: "Different breeds have vastly different nutritional requirements. Misidentification leads to improper feeding, stunted growth, and poor milk production.",
      author: "Dr. Amit Patel",
      date: "2025-01-10",
      category: "Nutrition",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg"
    },
    {
      id: 4,
      title: "Disease Susceptibility: Why Breed-Specific Healthcare Matters",
      excerpt: "Holstein cattle are prone to different diseases than Gir cattle. Without proper breed identification, farmers cannot implement preventive healthcare measures.",
      author: "Dr. Priya Singh",
      date: "2025-01-08",
      category: "Healthcare",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg"
    },
    {
      id: 5,
      title: "Market Value Losses: The Economic Impact of Breed Misidentification",
      excerpt: "Selling a purebred Sahiwal as a mixed breed can result in 40-60% price reduction. Learn how proper identification protects your investment.",
      author: "Economist Ravi Gupta",
      date: "2025-01-05",
      category: "Economics",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/1300358/pexels-photo-1300358.jpeg"
    },
    {
      id: 6,
      title: "Breeding Program Failures: When Genetics Go Wrong",
      excerpt: "Case studies of failed breeding programs due to incorrect breed identification, resulting in inferior offspring and wasted resources.",
      author: "Dr. Suresh Reddy",
      date: "2025-01-03",
      category: "Genetics",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/1300361/pexels-photo-1300361.jpeg"
    }
  ];

  const categories = ["All", "Crisis Analysis", "Breeding Issues", "Nutrition", "Healthcare", "Economics", "Genetics"];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            The Livestock Crisis Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uncovering the hidden challenges farmers face due to improper breed identification 
            and cross-breeding practices. Real stories, expert insights, and solutions.
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 mb-12 border border-red-200 animate-slideInUp">
          <div className="flex items-start gap-4">
            <div className="bg-red-500 p-3 rounded-full">
              <AlertTriangle className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-3">The Silent Agricultural Crisis</h2>
              <p className="text-red-700 text-lg leading-relaxed">
                Across India, millions of farmers are unknowingly losing income due to improper livestock breed identification. 
                This blog exposes the real impact of this crisis and provides actionable solutions through AI technology.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 text-gray-700 hover:text-blue-600 font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {blogPosts[0] && (
          <div className="mb-16 animate-slideInUp">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">
                    {blogPosts[0].title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                      </div>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
                      Read More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <div
              key={post.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-slideInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <User size={12} />
                    <span>{post.author}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar size={12} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 text-center border border-green-200 animate-fadeIn">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="text-red-500" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Help Us Spread Awareness</h2>
          </div>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Share these articles with fellow farmers and agricultural communities. 
            Together, we can solve the livestock identification crisis through AI technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
              Share on WhatsApp
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
              Join Our Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;