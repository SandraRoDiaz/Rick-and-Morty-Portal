export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  gender: string;
  image: string;
  location: Location;
  lastAppearance?: Episode;
}

export interface Location {
  name: string;
  image?: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface BackButton {
  url: string;
}

export enum CharacterStatus {
  DEAD = "Dead",
  ALIVE = "Alive",
  UNKNOWN = "unknown",
}
