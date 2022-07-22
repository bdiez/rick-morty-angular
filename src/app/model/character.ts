import { Place } from "./place";

export interface Character{
    id?: string;
    name: string;
    location: Place;
    origin: Place;
    status: Status;
    species: Species;
    image: string;
    episode: string[];
}

export enum Status{
    Alive =  "Alive", 
    Dead = "Dead", 
    Unknow = "Unknow"
}

export enum Species{
    Alien = "Alien",
    Animal = "Animal",
    Human = "Human",
    Humanoid = "Humanoid",
    
}