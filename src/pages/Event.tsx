import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Medical Device Innovation Summit 2024',
      date: '2024-03-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Convention Center, San Francisco',
      description: 'Join industry leaders to explore the latest innovations in medical device technology and regulatory updates.',
      attendees: 250,
      category: 'Conference',
      price: 'Free'
    },
    {
      id: 2,
      title: 'Surgical Instruments Training Workshop',
      date: '2024-03-22',
      time: '2:00 PM - 6:00 PM',
      location: 'PolyMediCure Training Center',
      description: 'Hands-on training session for healthcare professionals on the latest surgical instruments and techniques.',
      attendees: 45,
      category: 'Workshop',
      price: '$299'
    },
    {
      id: 3,
      title: 'Healthcare Technology Expo',
      date: '2024-04-10',
      time: '10:00 AM - 7:00 PM',
      location: 'Los Angeles Convention Center',
      description: 'Explore cutting-edge healthcare technologies and connect with medical device manufacturers.',
      attendees: 500,
      category: 'Expo',
      price: 'Free'
    },
    {
      id: 4,
      title: 'Quality Assurance in Medical Manufacturing',
      date: '2024-04-18',
      time: '1:00 PM - 4:00 PM',
      location: 'Virtual Event',
      description: 'Learn about the latest quality assurance standards and best practices in medical device manufacturing.',
      attendees: 120,
      category: 'Webinar',
      price: 'Free'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Annual Medical Device Symposium 2023',
      date: '2023-11-20',
      time: '8:00 AM - 6:00 PM',
      location: 'Chicago Medical Center',
      description: 'Successfully concluded symposium featuring presentations from leading medical device experts.',
      attendees: 320,
      category: 'Symposium',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Minimally Invasive Surgery Workshop',
      date: '2023-10-15',
      time: '1:00 PM - 5:00 PM',
      location: 'PolyMediCure Training Center',
      description: 'Completed hands-on workshop on minimally invasive surgical techniques and instruments.',
      attendees: 60,
      category: 'Workshop',
      status: 'Completed'
    },
    {
      id: 7,
      title: 'Healthcare Innovation Conference',
      date: '2023-09-08',
      time: '9:00 AM - 4:00 PM',
      location: 'Boston Convention Hall',
      description: 'Successful conference highlighting breakthrough innovations in healthcare technology.',
      attendees: 180,
      category: 'Conference',
      status: 'Completed'
    },
    {
      id: 8,
      title: 'Medical Device Regulatory Update',
      date: '2023-08-25',
      time: '2:00 PM - 4:00 PM',
      location: 'Virtual Event',
      description: 'Informative webinar covering the latest FDA regulatory changes and compliance requirements.',
      attendees: 95,
      category: 'Webinar',
      status: 'Completed'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Training</h1>
            <p className="text-xl text-teal-100">
              Join us for educational workshops, conferences, and training sessions in medical technology.
            </p>
          </div>
        </div>
      </section>

      {/* Event Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-8 py-3 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'upcoming'
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-8 py-3 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'past'
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                      event.category === 'Conference' ? 'bg-blue-100 text-blue-600' :
                      event.category === 'Workshop' ? 'bg-green-100 text-green-600' :
                      event.category === 'Expo' ? 'bg-purple-100 text-purple-600' :
                      event.category === 'Webinar' ? 'bg-orange-100 text-orange-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {event.category}
                    </span>
                    {activeTab === 'past' && (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">Completed</span>
                      </div>
                    )}
                    {activeTab === 'upcoming' && 'price' in event && (
                      <span className="text-teal-600 font-semibold text-sm">
                        {event.price}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees} {activeTab === 'upcoming' ? 'expected attendees' : 'attendees'}
                    </div>
                  </div>
                  
                  {activeTab === 'upcoming' ? (
                    <button className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                      <span>Register Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button className="w-full bg-gray-100 text-gray-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200">
                      View Summary
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {activeTab === 'upcoming' ? 'Stay Informed' : 'Missed an Event?'}
            </h2>
            <p className="text-gray-600 mb-8">
              {activeTab === 'upcoming' 
                ? 'Subscribe to our newsletter to receive notifications about upcoming events and training opportunities.'
                : 'Contact us to learn about future events or access recordings from past sessions.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {activeTab === 'upcoming' ? (
                <>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <button className="bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200">
                    Subscribe
                  </button>
                </>
              ) : (
                <button className="bg-teal-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200">
                  Contact Us
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;