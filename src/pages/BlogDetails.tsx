import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogPosts } from '../data/BlogData';

const BlogDetails = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();

  // Convert blogId to number and find the corresponding post
  const blogPost = blogPosts.find(post => post.id === parseInt(blogId || '0'));

  // If not found, show fallback
  if (!blogPost) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700">Blog not found</h2>
        <button 
          onClick={() => navigate('/blog')}
          className="mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  const { title, excerpt, author, date, readTime, category, image, qaData } = blogPost;

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => { navigate('/blog') }} className="flex items-center text-teal-100 hover:text-white mb-6 transition-colors duration-200">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </button>
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-teal-100 text-teal-600 rounded-full mb-4">
              {category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-teal-100">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {readTime}
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
            {/* If you want to show image:
            <img src={image} alt={title} className="object-cover w-full h-full rounded-lg" /> */}
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
              {qaData?.map((qa, index) => (
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

      {/* Related Articles and Newsletter Signup */}
      {/* ... keep these sections unchanged ... */}
    </div>
  );
};

export default BlogDetails;
