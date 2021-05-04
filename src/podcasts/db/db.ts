import { Podcast } from '../entities/podcast.entity';

export const fakeDB: Podcast[] = [
  {
    id: 1,
    title: 'Apple',
    category: 'fruit',
    rating: 10,
    episodes: [
      {
        id: 1,
        title: 'Apple Pencil',
      },
      {
        id: 2,
        title: 'Apple Juice',
      },
    ],
  },
  {
    id: 2,
    title: 'Banana',
    category: 'fruit',
    rating: 8,
    episodes: [
      {
        id: 1,
        title: 'Banana Juice',
      },
    ],
  },
  {
    id: 3,
    title: 'Carrot',
    category: 'vegetable',
    rating: 2,
    episodes: [
      {
        id: 1,
        title: 'Carrot Juice',
      },
    ],
  },
  {
    id: 4,
    title: 'Durian',
    category: 'fruit',
    rating: 5,
    episodes: [
      {
        id: 1,
        title: 'Durian Juice',
      },
      {
        id: 2,
        title: 'Durian Slices',
      },
    ],
  },
  {
    id: 5,
    title: 'Eggplant',
    category: 'vegetable',
    rating: 3,
    episodes: [
      {
        id: 1,
        title: 'Eggplant Steak',
      },
    ],
  },
  {
    id: 6,
    title: 'Finger Lime',
    category: 'fruit',
    rating: 5,
    episodes: [
      {
        id: 1,
        title: 'Finger Lime Juice',
      },
    ],
  },
];
