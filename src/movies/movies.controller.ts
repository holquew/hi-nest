import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';

// 컨트롤러의 이름이 있을 때 특별 취급
// 결국 라우터의 엔트리 포인트가 된다.
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll() {
    return this.moviesService.getAll();
  }

  // // id 밑에 있으면 search를 id로 판단하기 때문에 위로 올려야한다.
  // @Get('search')
  // search(@Query('year') searchingYear: string) {
  //   return `We are searching for a movie with a title: ${searchingYear}`;
  // }

  // 파라미터가 필요하다면 꼭 요청해서 사용해야한다
  // decorator @Param, @Body 활용
  @Get(':id')
  getOne(@Param('id') moiveId: number) {
    return this.moviesService.getOne(moiveId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
