import { Inject, Injectable } from '@nestjs/common';
import { ICreatePetUseCase } from './create.interface';
import { IPetRepository } from 'src/core/ports/pet.repository';

@Injectable()
export class CreatePetUsecase implements ICreatePetUseCase  {
    constructor(
        @Inject('PetRepository') private petRepository: IPetRepository
    ) {}

    async create(): Promise<any> {
       await this.petRepository.create();
    }
}
