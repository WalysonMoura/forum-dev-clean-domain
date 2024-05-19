import { Either, right } from "@/core/either";
import { QuestionsRepository } from "../repositories/questions-repository";

interface DeleteQuestionUseCaseRequest {
  authorId: string;
  questionId: string;
}

type DeleteQuestionUseCaseResponse = Either<Error, {}>;

export class DeleteQuestionUseCase {
  constructor(private questionRspository: QuestionsRepository) {}

  async execute({
    authorId,
    questionId,
  }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseResponse> {


    return right({})
  }
}
