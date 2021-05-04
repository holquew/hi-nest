import { Episode } from 'src/episode/entities/episode.entity';

export interface Podcast {
  id: number;
  title: string;
  category: string;
  rating: number;
  episodes: Episode[];
}
