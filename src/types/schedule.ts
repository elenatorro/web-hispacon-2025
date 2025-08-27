// Schedule component type definitions

export interface ScheduleEvent {
  title: string;
  speaker?: string;
  description?: string;
  duration: number;
  startTime?: string;
  type: "charla" | "taller" | "panel" | "break" | "destacada" | "registro" | "feria" | "especial";
  lang?: string; // Language code, e.g., 'ca' for Catalan
}

export interface Track {
  id: string;
  name: string;
  color: string;
}

export interface TimeSlot {
  time: string;
  events: Record<string, ScheduleEvent | ScheduleEvent[]>;
  isSpecialEvent?: boolean;
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
