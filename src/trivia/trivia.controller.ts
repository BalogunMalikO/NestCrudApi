import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { TriviaService } from './trivia.service';
import { TriviaDto } from './dto/trivia.dto';


@Controller('trivia')
export class TriviaController {
  constructor(private readonly triviaService: TriviaService) {}

  @Post('create')
  create(@Body() dto: TriviaDto) {
    console.log({dto})
    return this.triviaService.create(dto);
  }

  @Get("Findall")
  findAll(@Body() id) {
    return this.triviaService.findAll(id);
  }

  @Get('Findone')
  findOne(@Param('id') dto: TriviaDto) {
    return this.triviaService.findOne(dto);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTriviaDto: UpdateTriviaDto) {
  //   return this.triviaService.update(+id, updateTriviaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.triviaService.remove(+id);
  // }
}
