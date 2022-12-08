import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';
export declare class OwnersService {
    private ownersRepository;
    constructor(ownersRepository: Repository<Owner>);
    create(createOwnerInput: CreateOwnerInput): Promise<Owner>;
    findAll(): Promise<Owner[]>;
    findOne(id: number): Promise<Owner>;
    update(id: number, updateOwnerInput: UpdateOwnerInput): string;
    remove(id: number): string;
}
