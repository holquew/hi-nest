import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEpisodeDto } from 'src/episode/dto/create-episode.dto';
import { UpdateEpisodeDto } from 'src/episode/dto/update-episode.dto';
import { Episode } from 'src/episode/entities/episode.entity';
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

  getEpisodes(podcastId: number): Episode[] {
    const podcast = this.getOne(podcastId);
    return podcast.episodes;
  }

  addEpisode(podcastId: number, createData: CreateEpisodeDto) {
    const episodes = this.getEpisodes(podcastId);

    episodes.push({
      id: episodes.length + 1,
      ...createData,
    });
  }

  getOneEpisode(podcastId: number, episodeId: number): Episode {
    const episode = this.getEpisodes(podcastId).find(
      (episode) => episodeId === episode.id,
    );
    if (!episode) {
      throw new NotFoundException(
        `Episode with ID ${episodeId} not found. Please try again.`,
      );
    }
    return episode;
  }

  updateEpisode(
    podcastId: number,
    episodeId: number,
    updateData: UpdateEpisodeDto,
  ) {
    const podcast = this.getOne(podcastId);

    let episodes = this.getEpisodes(podcastId);
    const targetEpisode = this.getOneEpisode(podcastId, episodeId);

    episodes = episodes.filter((episode) => episodeId !== episode.id);
    episodes.push({
      ...targetEpisode,
      ...updateData,
    });

    podcast.episodes = episodes;
  }

  deleteEpisode(podcastId: number, episodeId: number) {
    const podcast = this.getOne(podcastId);
    let episodes = this.getEpisodes(podcastId);
    episodes = episodes.filter((episode) => episodeId !== episode.id);
    podcast.episodes = episodes;
  }
}
