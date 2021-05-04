import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { PodcastsController } from './podcasts/podcasts.controller';
import { PodcastsService } from './podcasts/podcasts.service';

// decorator - 클래스에 함수 기능을 추가
// 앱은 단 하나만 존재하고, 이곳에 계속 모듈이 추가됨
// 앱 > 모듈 > 컨트롤러 > 서비스
@Module({
  imports: [MoviesModule],
  controllers: [AppController, PodcastsController], // url을 가져오고 함수를 실행, router와 비슷
  providers: [PodcastsService],
})
export class AppModule {}
