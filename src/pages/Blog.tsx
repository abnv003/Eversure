import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  
  const navigate = useNavigate();
  const blogPosts = [
    {
      id: 1,
      title: 'Eversure: Best IV Infusion Manufacturers in India',
      excerpt: 'What is IV Infusion? Eversure is acclaimed as best iv infusion manufacturers in India, with state of art manufacturing facility and quality manufacturing process makes Eversure best iv infusion manufacturers …',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Uncategorized',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Eversure- Best iv catheter parts manufacturers in India',
      excerpt: 'IV Catheter Eversure is considered as one of the best IV catheter parts manufacturers in India. IV Catheter or Intravenous Catheter is a little, adaptable cylinder intended to convey IV …',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Uncategorized',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Eversure – Best IV Cannula  Manufacturers in India',
      excerpt: 'Eversure – Best IV Cannula  Manufacturers in India About Eversure Eversure is acclaimed as one of the best IV Cannula manufactures in India, with the state of art manufacturing facilities …',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Uncategorized',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = ['All', 'Innovation', 'Quality', 'Surgery', 'Sustainability', 'Education', 'Regulation'];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest News & Insights</h1>
            <p className="text-xl text-teal-100">
              Stay informed with the latest developments in medical technology and healthcare innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  category === 'All'
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-teal-100 hover:text-teal-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">Blog Image</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-teal-100 text-teal-600 rounded-full">
                      {post.category}
                    </span>
                    {/* <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div> */}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      {/* <div className="flex items-center text-xs text-gray-500">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div> */}
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                    </div>
                    <button onClick={()=>{navigate(`/blog/${post.id}`)}} className="flex items-center text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors duration-200">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button className="bg-teal-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200">
            Load More Articles
          </button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest insights and updates from the medical technology world.
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

export default Blog;