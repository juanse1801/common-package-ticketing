import { Subjects } from "./subjects";

export interface TickerCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    version: number;
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
