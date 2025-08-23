import { useState, useEffect } from 'react';
import { upcomingEvents } from "../data/EventData.tsx";
import { AlertTriangle, Clock } from 'lucide-react';

export const EventRibbon = () => {
  const todayDate = 12; // Current date
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  
  const warningInfo = getEventWarning(upcomingEvents, todayDate);



  if (!warningInfo) {
    return <div>No upcoming events found</div>;
  }

  const formatTime = (time) => String(time).padStart(2, '0');

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

export const getEventWarning = (events, todayDate = 12) => {
  if (!events || events.length === 0) {
    return null;
  }

  let closestEvent = null;
  let closestYear = Infinity;
  let closestDay = Infinity;
  let daysDifference = Infinity;

  events.forEach(event => {
    // Extract start date from "From YYYY-MM-DD to YYYY-MM-DD"
    const match = event.date.match(/From (\d{4})-(\d{2})-(\d{2})/);
    if (match) {
      const year = parseInt(match[1]);
      const month = parseInt(match[2]);
      const day = parseInt(match[3]);

      // Find the closest year first, then closest day within that year
      if (year < closestYear || (year === closestYear && day < closestDay)) {
        closestEvent = event;
        closestYear = year;
        closestDay = day;
        daysDifference = day - todayDate;
      }
    }
  });

  if (!closestEvent) {  
    return null;
  }

  return {
    event: closestEvent,
    year: closestYear,
    day: closestDay,
    daysDifference: daysDifference,
    showWarning: daysDifference <= 2  
  };
};