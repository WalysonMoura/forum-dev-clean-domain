import { QuestionsRepository } from "../repositories/questions-repository";

interface DeleteQuestionUseCaseRequest {
  authorId: string;
  questionId: string;
}

type DeleteQuestionUseCaseResponse = {};

export class DeleteQuestionUseCase {
  constructor(private questionRspository: QuestionsRepository) {}

  async execute({}: Promise<DeleteQuestionUseCaseRequest>) {}
}
