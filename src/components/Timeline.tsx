
const Timeline = () => {
  const timelineData = [
    {
      date: '2002',
      title: 'Title 1',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!',
      color: '#41516C'
    },
    {
      date: '2007',
      title: 'Title 2',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.',
      color: '#FBCA3E'
    },
    {
      date: '2012',
      title: 'Title 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum saepe nulla hic.',
      color: '#E24A68'
    },
    {
      date: '2017',
      title: 'Title 4',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque.',
      color: '#1B5F8C'
    },
    {
      date: '2022',
      title: 'Title 5',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.',
      color: '#4CADAD'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8 flex flex-col items-center justify-center gap-8 font-sans">
      <h1 className="text-4xl font-bold text-center mb-8">UL timeline cards</h1>
      
      {/* Timeline Container */}
      <div className="relative w-full max-w-5xl">
        {/* Central Line - Hidden on mobile, visible on desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 rounded-full h-full"></div>
        
        {/* Mobile Line - Visible on mobile only */}
        <div className="md:hidden absolute left-1 w-1 bg-gray-300 rounded-full h-full"></div>
        
        {/* Timeline Items */}
        <div className="space-y-8">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="relative">
                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="ml-8">
                    {/* Date Badge */}
                    <div 
                      className="inline-flex items-center justify-center h-12 px-6 text-white font-bold text-xl rounded-l-full relative"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.date}
                      
                      {/* Triangle flap */}
                      <div 
                        className="absolute top-full left-0 w-0 h-0"
                        style={{
                          borderLeft: '24px solid transparent',
                          borderRight: '0px solid transparent',
                          borderTop: `12px solid ${item.color}`,
                          filter: 'brightness(0.8)'
                        }}
                      ></div>
                      
                      {/* Circle on timeline */}
                      <div 
                        className="absolute top-1/2 right-full mr-7 transform -translate-y-1/2 w-8 h-8 bg-gray-100 rounded-full border-4"
                        style={{ borderColor: item.color }}
                      ></div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="bg-white mt-2 p-6 rounded-lg shadow-lg relative">
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-black opacity-20 rounded-full blur-md"></div>
                      <h3 className="text-lg font-medium mb-4">{item.title}</h3>
                      <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-black opacity-20 rounded-full blur-md"></div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                  <div className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-96 ${isEven ? 'mr-12' : 'ml-12'}`}>
                      {/* Date Badge */}
                      <div 
                        className={`inline-flex items-center justify-center h-12 px-6 text-white font-bold text-xl relative ${
                          isEven ? 'rounded-r-full' : 'rounded-l-full'
                        }`}
                        style={{ backgroundColor: item.color }}
                      >
                        {item.date}
                        
                        {/* Triangle flap */}
                        <div 
                          className={`absolute top-full w-0 h-0 ${isEven ? 'right-0' : 'left-0'}`}
                          style={{
                            borderLeft: isEven ? '0px solid transparent' : '24px solid transparent',
                            borderRight: isEven ? '24px solid transparent' : '0px solid transparent',
                            borderTop: `12px solid ${item.color}`,
                            filter: 'brightness(0.8)'
                          }}
                        ></div>
                        
                        {/* Circle on timeline */}
                        <div 
                          className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 rounded-full border-4 ${
                            isEven ? 'left-full ml-11' : 'right-full mr-11'
                          }`}
                          style={{ borderColor: item.color }}
                        ></div>
                      </div>
                      
                      {/* Content Card */}
                      <div className="bg-white mt-2 p-6 rounded-lg shadow-lg relative">
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-black opacity-20 rounded-full blur-md"></div>
                        <h3 className="text-lg font-medium mb-4">{item.title}</h3>
                        <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-black opacity-20 rounded-full blur-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Credits */}
      <div className="mt-8 text-right text-sm w-full max-w-5xl">
        <a 
          href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 underline"
        >
          inspired by
        </a>
      </div>
    </div>
  );
};

export default Timeline;