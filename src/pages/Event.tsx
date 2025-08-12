// import { useState } from 'react';
// import { Calendar, MapPin, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';

// const Events = () => {
//   const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

//   const upcomingEvents = [
//     {
//       id: 1,
//       title: 'Medica Germany',
//       date: 'From 2025-11-17 to 2025-11-20',
//       // time: '9:00 AM - 5:00 PM',
//       // location: 'Convention Center, San Francisco',
//       description: 'Join industry leaders to explore the latest innovations in medical device technology and regulatory updates.',
//       // attendees: 250,
//       // category: 'Conference',
//       // price: 'Free'
//       image_url: '/events/Medica Germany.jpg'
//     },
//     {
//       id: 2,
//       title: 'WHX Dubai (Formerly Arab Health)',
//       date: 'From 2026-02-09 to 2026-02-12',
//       // time: '9:00 AM - 5:00 PM',
//       // location: 'Convention Center, San Francisco',
//       description: 'Join industry leaders to explore the latest innovations in medical device technology and regulatory updates.',
//       // attendees: 250,
//       // category: 'Conference',
//       // price: 'Free'
//       image_url: '/events/Dubai.jpg'
//     }
//   ];

//   const pastEvents = [];

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

//   return (
//     <div className="">
//       {/* Hero Section */}
//       <section style={{ backgroundColor: '#309ed9' }} className="text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-normal mb-6">Events</h1>
//             <p className="text-xl" style={{ color: '#f0f9ff' }}>
//               Join us for educational workshops, conferences, and training sessions in medical technology.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Event Tabs */}
//       <section className="py-8 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-center">
//             <div className="bg-white rounded-lg p-1 shadow-sm">
//               <button
//                 onClick={() => setActiveTab('upcoming')}
//                 className={`px-8 py-3 rounded-md font-medium transition-colors duration-200 ${activeTab === 'upcoming'
//                     ? 'bg-[#309ed9] text-white'
//                     : 'text-gray-600 hover:text-[#309ed9]'
//                   }`}
//               >
//                 Upcoming Events
//               </button>

//               <button
//                 onClick={() => setActiveTab('past')}
//                 className={`px-8 py-3 rounded-md font-medium transition-colors duration-200 ${activeTab === 'past'
//                     ? 'bg-[#309ed9] text-white'
//                     : 'text-gray-600 hover:text-[#309ed9]'
//                   }`}
//               >
//                 Past Events
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Events Grid */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {currentEvents.map((event) => (
//               <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${event.category === 'Conference' ? 'bg-blue-100 text-blue-600' :
//                       event.category === 'Workshop' ? 'bg-green-100 text-green-600' :
//                         event.category === 'Expo' ? 'bg-purple-100 text-purple-600' :
//                           event.category === 'Webinar' ? 'bg-orange-100 text-orange-600' :
//                             'bg-gray-100 text-gray-600'
//                       }`}>
//                       {event.category}
//                     </span>
//                     {activeTab === 'past' && (
//                       <div className="flex items-center text-green-600">
//                         <CheckCircle className="h-4 w-4 mr-1" />
//                         <span className="text-sm font-medium">Completed</span>
//                       </div>
//                     )}
//                     {activeTab === 'upcoming' && 'price' in event && (
//                       <span className="font-semibold text-sm" style={{ color: '#309ed9' }}>
//                         {event.price}
//                       </span>
//                     )}
//                   </div>

//                   <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                     {event.title}
//                   </h3>

//                   <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                     {event.description}
//                   </p>

//                   <div className="space-y-2 mb-6">
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Calendar className="h-4 w-4 mr-2" />
//                       {formatDate(event.date)}
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Clock className="h-4 w-4 mr-2" />
//                       {event.time}
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <MapPin className="h-4 w-4 mr-2" />
//                       {event.location}
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Users className="h-4 w-4 mr-2" />
//                       {event.attendees} {activeTab === 'upcoming' ? 'expected attendees' : 'attendees'}
//                     </div>
//                   </div>

//                   {activeTab === 'upcoming' ? (
//                     <button className="w-full text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2" style={{ backgroundColor: '#309ed9' }}>
//                       <span>Register Now</span>
//                       <ArrowRight className="h-4 w-4" />
//                     </button>
//                   ) : (
//                     <button className="w-full bg-gray-100 text-gray-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200">
//                       View Summary
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Events;


import { useState } from 'react';
import { Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { upcomingEvents, pastEvents } from '../data/EventData.tsx';

const Events = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <div className="">
      {/* Hero Section */}
      <section style={{ backgroundColor: '#309ed9' }} className="text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-normal mb-6">Events</h1>
            <p className="text-xl" style={{ color: '#f0f9ff' }}>
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
                className={`px-8 py-3 rounded-md font-medium transition-colors duration-200 ${activeTab === 'upcoming'
                    ? 'bg-[#309ed9] text-white'
                    : 'text-gray-600 hover:text-[#309ed9]'
                  }`}
              >
                Upcoming Events
              </button>

              <button
                onClick={() => setActiveTab('past')}
                className={`px-8 py-3 rounded-md font-medium transition-colors duration-200 ${activeTab === 'past'
                    ? 'bg-[#309ed9] text-white'
                    : 'text-gray-600 hover:text-[#309ed9]'
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
          {currentEvents.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Calendar className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {activeTab === 'upcoming' ? 'No Upcoming Events' : 'No Past Events'}
              </h3>
              <p className="text-gray-600">
                {activeTab === 'upcoming' 
                  ? 'Check back soon for new events and workshops.' 
                  : 'No past events to display at this time.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                  {event.image_url && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.image_url} 
                        alt={event.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      {activeTab === 'past' && (
                        <div className="flex items-center text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          <span className="text-sm font-medium">Completed</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                    </div>

                    {/* {activeTab === 'upcoming' ? (
                      <button className="w-full text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 hover:bg-opacity-90" style={{ backgroundColor: '#309ed9' }}>
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button className="w-full bg-gray-100 text-gray-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200">
                        View Summary
                      </button>
                    )} */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;