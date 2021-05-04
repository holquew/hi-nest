import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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
}
