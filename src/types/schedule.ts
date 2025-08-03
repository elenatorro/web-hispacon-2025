// Schedule component type definitions

export interface ScheduleEvent {
  title: string;
  speaker?: string;
  description?: string;
  duration: number; // in minutes
  startTime?: string; // specific start time within the slot (e.g., "16:30")
  type: "talk" | "workshop" | "panel" | "break" | "special" | "registration" | "fair";
}

export interface Track {
  id: string;
  name: string;
  color: string;
}

export interface TimeSlot {
  time: string;
  events: Record<string, ScheduleEvent | ScheduleEvent[]>;
}

export interface DaySchedule {
  date: string;
  dayName: string;
  tracks: Track[];
  timeSlots: TimeSlot[];
}

export interface ScheduleProps {
  layout?: "vertical" | "horizontal";
  showDescription?: boolean;
}
