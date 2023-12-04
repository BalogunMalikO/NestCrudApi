import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
 
} from '@nestjs/common';
import { TriviaService } from './trivia.service';
import { TriviaDto } from './dto/trivia.dto';
import { title } from 'process';

@Controller('trivia')
export class TriviaController {
  constructor(private readonly triviaService: TriviaService) {}

  @Post('create')
  create(@Body() dto: TriviaDto) {
    console.log({ dto });
    return this.triviaService.create(dto);
  }

   @Get('/id')
   findID(@Body("id") id: number ){
    return this.triviaService.findbyID(id);
   }

  @Get('FindFields')
  findOne(@Body() dto: TriviaDto) {
    return this.triviaService.findAllfield(dto);
  }

  @Get('/question')
  find_question(@Body()dto: TriviaDto ) {
    return this.triviaService.findbyQuestion(dto);
  }

  @Patch('/update')
  update(@Body() dto: TriviaDto) {
    return this.triviaService.updateQuestion(dto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.triviaService.remove(+id);
  // }
}
