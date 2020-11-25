export interface Show {
  showId: number;
  date: string | Date;
  location: string;
  phishNetURL: string;
  rating: number;
  setlistNotes?: string;
  jamNotes?: string[];
  setOne: string[];
  setTwo?: string[];
  setThree?: string[];
  setFour?: string[];
  encore?: string[];
  links?: Partial<Link[]> | null;
}

interface Link {
  description: string;
  link: string;
  type: string;
}
