import { Injectable } from '@nestjs/common';
import { PrismService } from 'src/prism/prism.service';
import { TriviaDto } from './dto/trivia.dto';

@Injectable()
export class TriviaService {
  constructor(private prisma: PrismService) {}

  async create(dto: TriviaDto) {
    let trivia = await this.prisma.trivia.create({
      data: {
        title: dto.title,
        question: dto.question,
        answer: dto.answer,
      },
    });

    return trivia;
  }

  async findbyID(id: number) {
    let allQuestions = await this.prisma.trivia.findUnique({
      where: { id: Number(id)},
     
    });
    return allQuestions;
  }

  async findAllfield() {
    let getId = await this.prisma.trivia.fields;
    return getId;
  }

  async findbyQuestion(dto: TriviaDto) {
    let getQuestion = await this.prisma.trivia.findMany({
      where: { question: dto.question }
      
    });
    return getQuestion;
  }

  async updateQuestion(dto: TriviaDto) {
    let updatedData = await this.prisma.trivia.updateMany({
      where: { title: dto.title},
      data:{title: dto.title},

    });
    return updatedData;
  }
}

//   update(id: number, updateTriviaDto: UpdateTriviaDto) {
//     return `This action updates a #${id} trivia`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} trivia`;
//   }
// }
