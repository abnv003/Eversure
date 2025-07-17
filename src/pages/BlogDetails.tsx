import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const BlogDetails = () => {
  const navigate = useNavigate();
  const {blogId} = useParams();
  const blogPost = {
    title: 'Latest Innovations in Medical Device Technology',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Innovation',
    image: '/api/placeholder/800/400'
  };

  const qaData = [
    {
      question: 'What are the most significant recent innovations in medical device technology?',
      answer: 'Recent innovations include AI-powered diagnostic tools, miniaturized sensors for continuous monitoring, robotic surgical systems with enhanced precision, and IoT-enabled devices that provide real-time patient data to healthcare providers. These technologies are revolutionizing patient care by enabling more accurate diagnoses, less invasive procedures, and personalized treatment plans.'
    },
    {
      question: 'How do these innovations improve patient outcomes?',
      answer: 'These innovations improve patient outcomes through earlier detection of health issues, more precise treatments with reduced side effects, faster recovery times, and enhanced monitoring capabilities. For example, AI-powered imaging can detect cancers at earlier stages, while minimally invasive robotic surgery reduces trauma and recovery time.'
    },
    {
      question: 'What role does artificial intelligence play in modern medical devices?',
      answer: 'AI plays a crucial role in pattern recognition for diagnostics, predictive analytics for patient monitoring, automated decision support for healthcare providers, and personalized treatment recommendations. AI algorithms can analyze vast amounts of medical data to identify trends and anomalies that might be missed by human observation alone.'
    },
    {
      question: 'What challenges do manufacturers face when developing these technologies?',
      answer: 'Key challenges include regulatory compliance and approval processes, ensuring data security and patient privacy, maintaining cost-effectiveness while incorporating advanced technology, and providing adequate training for healthcare professionals. Additionally, manufacturers must balance innovation with proven safety and efficacy standards.'
    },
    {
      question: 'How do regulatory standards impact medical device innovation?',
      answer: 'Regulatory standards ensure patient safety but can slow innovation timelines. However, they also drive manufacturers to develop more robust and reliable technologies. Recent regulatory initiatives have created pathways for faster approval of breakthrough devices while maintaining safety standards, encouraging continued innovation in the field.'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={()=>{navigate('/blog')}} className="flex items-center text-teal-100 hover:text-white mb-6 transition-colors duration-200">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </button>
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-teal-100 text-teal-600 rounded-full mb-4">
              {blogPost.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-teal-100">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {blogPost.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(blogPost.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {blogPost.readTime}
            </div>
            <button className="flex items-center hover:text-white transition-colors duration-200 ml-auto">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Featured Blog Image</p>
          </div>
        </div>
      </section>

      {/* Q&A Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The medical device industry continues to evolve at an unprecedented pace, driven by technological 
              advancements and the growing demand for better patient outcomes. In this comprehensive guide, 
              we explore the latest innovations that are reshaping healthcare delivery.
            </p>
            
            <div className="space-y-8">
              {qaData.map((qa, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {qa.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {qa.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Quality Standards in Medical Manufacturing',
                excerpt: 'Understanding the rigorous quality control processes...',
                date: '2024-01-12'
              },
              {
                title: 'The Future of Minimally Invasive Surgery',
                excerpt: 'How advanced medical instruments are enabling...',
                date: '2024-01-10'
              }
            ].map((article, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <button className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors duration-200">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-teal-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Informed</h2>
            <p className="text-gray-600 mb-6">
              Get the latest insights and updates from the medical technology world delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button className="bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;