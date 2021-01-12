import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// decorator - 클래스에 함수 기능을 추가
// 모듈은 단 하나만 존재하고, 이곳에 계속 추가됨
// 모듈 > 컨트롤러 > 서비스
@Module({
  imports: [],
  controllers: [MoviesController], // url을 가져오고 함수를 실행, router와 비슷
  providers: [MoviesService],
})
export class AppModule {}
