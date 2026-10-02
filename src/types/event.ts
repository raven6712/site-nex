export type EventStatus = 'upcoming' | 'ongoing' | 'past';

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  isOnline: boolean;
  category: string;
  registrationRequired: boolean;
  status: EventStatus;
  maxAttendees?: number;
  currentAttendees?: number;
  speakers?: {
    name: string;
    role: string;
    avatarUrl?: string;
  }[];
  mediaGallery?: string[];
}
