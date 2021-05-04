import { Injectable, NotFoundException } from '@nestjs/common';
import { fakeDB } from './db/db';
import { CreatePodcastDto } from './dto/create-podcast.dto';
import { UpdatePodcastDto } from './dto/update-podcast.dto';
import { Podcast } from './entities/podcast.entity';

@Injectable()
export class PodcastsService {
  private podcasts: Podcast[] = fakeDB;

  getAll(): Podcast[] {
    return this.podcasts;
  }

  getOne(id: number): Podcast {
    const podcast = this.podcasts.find((podcast) => id === podcast.id);
    if (!podcast) {
      throw new NotFoundException(
        `Podcast with ID ${id} not found. Please try again.`,
      );
    }
    return podcast;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.podcasts = this.podcasts.filter((podcast) => id !== podcast.id);
  }

  create(podcastData: CreatePodcastDto) {
    console.log(podcastData);

    this.podcasts.push({
      id: this.podcasts.length + 1,
      ...podcastData,
    });
  }

  update(id: number, updateData: UpdatePodcastDto) {
    const podcast = this.getOne(id);
    this.deleteOne(id);
    this.podcasts.push({ ...podcast, ...updateData });
  }
}
