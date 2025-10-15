import { useState, useEffect, useRef } from 'react';
import { upcomingEvents } from "../data/EventData.tsx";
import { AlertTriangle, Clock } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image_url: string;
}

interface WarningInfo {
  event: Event;
  year: number;
  day: number;
  daysDifference: number;
  showWarning: boolean;
}

export const EventRibbon = () => {
  // For testing: set to November 15, 2025 (2 days before Medica Germany)
  // For testing: set date to Nov 15, 2025 (2 days before Medica Germany which starts Nov 17)
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  
  // Use a ref to store the test date to avoid recreating it on every render
  const testDate = useRef(new Date(2025, 11, 15)); // Month is 0-based, so 10 = November
  
  // Function to get current date (returns test date for testing)
  const getCurrentDate = () => new Date(testDate.current.getTime());
  
  const warningInfo = getEventWarning(upcomingEvents);

  useEffect(() => {
    if (!warningInfo?.showWarning) return;

    const calculateTimeLeft = () => {
      const now = new Date(testDate.current.getTime());
      now.setMilliseconds(now.getMilliseconds() + Date.now() - testDate.current.getTime());
      
      // Parse the event date from warningInfo
      const match = warningInfo.event.date.match(/From (\d{4})-(\d{2})-(\d{2})/);
      if (!match) return;
      
      const [_, eventYear, eventMonth, eventDay] = match.map(Number);
      const eventDate = new Date(eventYear, eventMonth - 1, eventDay);
      eventDate.setHours(0, 0, 0, 0); // Set to midnight of event day
      
      const difference = eventDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ hours, minutes, seconds });
        
        // Debug log to check alignment
        console.log('Days until event:', days);
        console.log('Warning days difference:', warningInfo.daysDifference);
      }
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [warningInfo]);



  if (!warningInfo) {
    return <div>No upcoming events found</div>;
  }

  const formatTime = (time: number) => String(time).padStart(2, '0');

  return (
    <div className="">
      {/* Warning div with countdown timer - shows when event is within 2 days */}
      {warningInfo.showWarning && (
        <div className="bg-blue-100 text-blue-800 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <div>
              <h4 className="font-semibold">Event Alert!</h4>
              <p>
                {warningInfo.event.title} is starting in {warningInfo.daysDifference} day{warningInfo.daysDifference !== 1 ? 's' : ''}!
              </p>
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2">
            <Clock className="h-4 w-4" />
            <div className="flex items-center space-x-1 font-mono text-lg font-bold">
              <span>{formatTime(timeLeft.hours)}</span>
              <span>:</span>
              <span>{formatTime(timeLeft.minutes)}</span>
              <span>:</span>
              <span>{formatTime(timeLeft.seconds)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const getEventWarning = (events: Event[]): WarningInfo | null => {
  if (!events || events.length === 0) {
    return null;
  }

  let closestEvent: Event | null = null;
  let minDifference = Infinity;
  let eventDate: Date | null = null;

  const testDate = new Date(2025, 10, 15); // November 15, 2025
  testDate.setHours(0, 0, 0, 0); // Reset to midnight for consistent day calculations

  events.forEach(event => {
    // Extract start date from "From YYYY-MM-DD to YYYY-MM-DD"
    const match = event.date.match(/From (\d{4})-(\d{2})-(\d{2})/);
    if (match) {
      const year = parseInt(match[1]);
      const month = parseInt(match[2]);
      const day = parseInt(match[3]);

      const eventStartDate = new Date(year, month - 1, day);
      eventStartDate.setHours(0, 0, 0, 0); // Reset to midnight for consistent day calculations
      const timeDiff = eventStartDate.getTime() - testDate.getTime();
      const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

      if (daysDiff >= 0 && daysDiff < minDifference) {
        closestEvent = event;
        minDifference = daysDiff;
        eventDate = eventStartDate;
      }
    }
  });

  if (!closestEvent || !eventDate) {  
    return null;
  }

  return {
    event: closestEvent,
    year: eventDate.getFullYear(),
    day: eventDate.getDate(),
    daysDifference: minDifference,
    showWarning: minDifference <= 2  
  };
};