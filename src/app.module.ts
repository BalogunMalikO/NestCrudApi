import { Module } from '@nestjs/common';
import { TriviaModule } from './trivia/trivia.module';
import { PrismModule } from './prism/prism.module';

@Module({
  imports: [TriviaModule, PrismModule],
  
 
})
export class AppModule {}
