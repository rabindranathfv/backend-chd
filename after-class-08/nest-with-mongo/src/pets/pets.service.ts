import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pet, PetDocument } from './schema/pets.schema';

@Injectable()
export class PetsService {
  constructor(
    @InjectModel(Pet.name) private readonly petsModel: Model<PetDocument>,
  ) {}

  async create(createPetDto: CreatePetDto) {
    return await this.petsModel.create(createPetDto);
  }

  async findAll() {
    return await this.petsModel.find();
  }

  async findOne(id: string) {
    return await this.petsModel.findOne({ _id: id });
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    return await this.petsModel.updateOne({ _id: id }, updatePetDto);
  }

  async remove(id: string) {
    return await this.petsModel.deleteOne({ _id: id });
  }
}
