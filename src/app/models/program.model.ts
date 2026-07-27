export interface Episode {
  titre: string;
  duree: string;
  categorie: string;
  thumbnail: string;
  videoId: string;
}

export interface Program {
  id: number;
  name: string;
  presenter: string;
  topic: string;
  photoUrl?: string;
  bio?: string;
  ville?: string;
  specialite?: string;
  riwaya?: string;
  anneeAdhesion?: string;
  episodes?: Episode[];
  heroPhoto?: string;
}
