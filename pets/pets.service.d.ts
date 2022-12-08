import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './pet.entity';
export declare class PetsService {
    private petsRepository;
    private ownersService;
    constructor(petsRepository: Repository<Pet>, ownersService: OwnersService);
    findAll(): Promise<Pet[]>;
    findOne(id: number): Promise<Pet>;
    createPet(createPetInput: CreatePetInput): Promise<Pet>;
    getOwner(ownerId: number): Promise<Owner>;
}
