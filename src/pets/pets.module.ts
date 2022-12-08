import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet.entity';
import { PetsResolver } from './pets.resolver';
import { PetsService } from './pets.service';

@Module({
  imports:[TypeOrmModule.forFeature([Pet])],//allow to call typorm module on PetsService
  providers: [PetsService, PetsResolver]
})
export class PetsModule {}
