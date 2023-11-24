import { Module } from '@nestjs/common';
import { TriviaService } from './trivia.service';
import { TriviaController } from './trivia.controller';
import { PrismModule } from 'src/prism/prism.module';

@Module({
  imports:[PrismModule],
  controllers: [TriviaController],
  providers: [TriviaService],
})
export class TriviaModule {}
