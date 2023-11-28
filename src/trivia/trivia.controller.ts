import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { TriviaService } from './trivia.service';
import { TriviaDto } from './dto/trivia.dto';

@Controller('trivia')
export class TriviaController {
  constructor(private readonly triviaService: TriviaService) {}

  @Post('create')
  create(@Body() dto: TriviaDto) {
    console.log({ dto });
    return this.triviaService.create(dto);
  }

  @Get('/id')
  findAll(@Param('id') id) {
    return this.triviaService.findbyID(id);
  }

  @Get('Findone')
  findOne(@Param('id') dto: TriviaDto) {
    return this.triviaService.findAllfield(dto);
  }

  @Get("/question")
  findbyId(@Body() dto: TriviaDto) {
    return this.triviaService.findbyQuestion(dto);
  }

  @Patch('/update')
  update(@Param() title: string, @Body() dto: TriviaDto) {
    return this.triviaService.updateQuestion( dto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.triviaService.remove(+id);
  // }
}
