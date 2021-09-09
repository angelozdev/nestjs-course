import { Test, TestingModule } from '@nestjs/testing';
import { HttpCatsController } from './http-cats.controller';

describe('HttpCatsController', () => {
  let controller: HttpCatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HttpCatsController],
    }).compile();

    controller = module.get<HttpCatsController>(HttpCatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
