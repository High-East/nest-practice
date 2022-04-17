import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
  // Dependency Injection: NestJS가 MoviesService를 import하고, Controller에 injection 함.
  // MoviesService class에 가보면 @Injectable()이 있는 이유임.
  // 여기서 Dependency Injection을 해주지 않으면, MoviesController에서 MoviesService를 단순히 타입을 선언한 정도로는 사용할 수 없음.
})
export class MoviesModule {}
