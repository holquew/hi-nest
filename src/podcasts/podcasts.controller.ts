import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEpisodeDto } from 'src/episode/dto/create-episode.dto';
import { UpdateEpisodeDto } from 'src/episode/dto/update-episode.dto';
import { CreatePodcastDto } from './dto/create-podcast.dto';
import { UpdatePodcastDto } from './dto/update-podcast.dto';
import { Podcast } from './entities/podcast.entity';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Get()
  getAll(): Podcast[] {
    return this.podcastsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') podcastId: number): Podcast {
    return this.podcastsService.getOne(podcastId);
  }

  @Post()
  create(@Body() podcastData: CreatePodcastDto) {
    return this.podcastsService.create(podcastData);
  }

  @Delete(':id')
  remove(@Param('id') podcastId: number) {
    return this.podcastsService.deleteOne(podcastId);
  }

  @Patch(':id')
  patch(@Param('id') podcastId: number, @Body() updateData: UpdatePodcastDto) {
    return this.podcastsService.update(podcastId, updateData);
  }

  @Get(':id/episodes')
  getAllEpisodes(@Param('id') podcastId: number) {
    return this.podcastsService.getEpisodes(podcastId);
  }

  @Post(':id/episodes')
  addEpisode(
    @Param('id') podcastId: number,
    @Body() createData: CreateEpisodeDto,
  ) {
    return this.podcastsService.addEpisode(podcastId, createData);
  }

  @Get(':id/episodes/:episodeId')
  getOneEpisode(
    @Param('id') podcastId: number,
    @Param('episodeId') episodeId: number,
  ) {
    return this.podcastsService.getOneEpisode(podcastId, episodeId);
  }

  @Patch(':id/episodes/:episodeId')
  updateEpisode(
    @Param('id') podcastId: number,
    @Param('episodeId') episodeId: number,
    @Body() updateData: UpdateEpisodeDto,
  ) {
    return this.podcastsService.updateEpisode(podcastId, episodeId, updateData);
  }

  @Delete(':id/episodes/:episodeId')
  deleteEpisode(
    @Param('id') podcastId: number,
    @Param('episodeId') episodeId: number,
  ) {
    return this.podcastsService.deleteEpisode(podcastId, episodeId);
  }
}
