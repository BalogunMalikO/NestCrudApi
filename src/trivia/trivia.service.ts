import { Injectable } from '@nestjs/common';
import { PrismService } from 'src/prism/prism.service';
import { TriviaDto } from './dto/trivia.dto';




@Injectable()
export class TriviaService {
  constructor(private prisma: PrismService) {}

 async create(dto: TriviaDto) {

    let trivia = await this.prisma.trivia.create({
      data: {
        question: dto.question,
        answer: dto.answer
      }
    })

    return trivia;
  }

async findAll(id: number) {
    let allQuestions = await this.prisma.trivia.findUnique({
      where:{id},
    })
   return {allQuestions};
  }

async findOne(dto: TriviaDto) {
  let getId = await this.prisma.trivia.fields
    return getId;
  }
}


//   update(id: number, updateTriviaDto: UpdateTriviaDto) {
//     return `This action updates a #${id} trivia`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} trivia`;
//   }
// }
