// Schedule utility functions

export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0) {
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  }
  return `${mins}m`;
};

export const getDurationHeight = (minutes: number): string => {
  // Base height mapping for visual representation
  if (minutes <= 30) return "h-20"; // Short events
  if (minutes <= 60) return "h-24"; // 1 hour events
  if (minutes <= 90) return "h-28"; // 1.5 hour events
  if (minutes <= 120) return "h-32"; // 2 hour events
  return "h-36"; // Long events (3+ hours)
};

export const getDurationIntensity = (minutes: number): string => {
  // Visual intensity based on duration
  if (minutes <= 30) return "border-l-2"; // Light border for short events
  if (minutes <= 60) return "border-l-4"; // Medium border for 1 hour
  if (minutes <= 120) return "border-l-6"; // Thick border for 2 hours
  return "border-l-8"; // Extra thick for long events
};

export const getTimeEndFromDuration = (startTime: string, durationMinutes: number): string => {
  const [hours, minutes] = startTime.split(':').map(Number);
  const startMinutes = hours * 60 + minutes;
  const endMinutes = startMinutes + durationMinutes;
  const endHours = Math.floor(endMinutes / 60);
  const endMins = endMinutes % 60;
  return `${endHours.toString().padStart(2, '0')}:${endMins.toString().padStart(2, '0')}`;
};

export const getEventTypeStyle = (type: string): string => {
  switch (type) {
    case "charla":
      return "bg-blue-50 text-blue-900 border-blue-200";
    case "taller":
      return "bg-green-50 text-green-900 border-green-200";
    case "panel":
      return "bg-purple-50 text-purple-900 border-purple-200";
    case "break":
      return "bg-gray-50 text-black-600 border-gray-200";
    case "destacada":
      return "bg-yellow-50 text-yellow-900 border-yellow-200";
    case "registro":
      return "bg-indigo-50 text-indigo-900 border-indigo-200";
    case "feria":
      return "bg-pink-50 text-pink-900 border-pink-200";
    case "especial":
      return "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-900 border-purple-300";
    default:
      return "bg-gray-50 text-black-600 border-gray-200";
  }
};

export const getEventIcon = (type: string): string => {
  switch (type) {
    case "charla":
      return "bx:bxs-microphone";
    case "taller":
      return "bx:bxs-wrench";
    case "panel":
      return "bx:bxs-group";
    case "break":
      return "bx:bxs-coffee";
    case "destacada":
      return "bx:bxs-star";
    case "registro":
      return "bx:bxs-id-card";
    case "feria":
      return "bx:bxs-store";
    case "especial":
      return "bx:bxs-microphone-alt";
    default:
      return "bx:bxs-calendar";
  }
};

export const getEventTimeDisplay = (timeSlot: string, event: { startTime?: string; duration: number }): string => {
  if (event.startTime) {
    // If event has a specific start time, calculate end time from that
    const endTime = getTimeEndFromDuration(event.startTime, event.duration);
    return `${event.startTime} - ${endTime}`;
  } else if (timeSlot.includes('-')) {
    // If time slot already includes a range, use it
    return timeSlot;
  } else {
    // Calculate end time from time slot start
    const endTime = getTimeEndFromDuration(timeSlot.split(' ')[0], event.duration);
    return `${timeSlot} - ${endTime}`;
  }
};

export const normalizeEvents = (eventData: any): any[] => {
  if (!eventData) return [];
  return Array.isArray(eventData) ? eventData : [eventData];
};

export const getTotalEventCount = (eventsData: Record<string, any>): number => {
  return Object.values(eventsData).reduce((total, eventData) => {
    const events = normalizeEvents(eventData);
    return total + events.length;
  }, 0);
};
