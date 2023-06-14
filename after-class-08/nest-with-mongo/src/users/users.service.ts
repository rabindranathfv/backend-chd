import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UsersDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { PetDocument, Pet } from 'src/pets/schema/pets.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UsersDocument>,
    @InjectModel(Pet.name) private petsModel: Model<PetDocument>,
    private readonly configService: ConfigService,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersModel.create(createUserDto);
  }

  findAll() {
    const APP_MODE = this.configService.get<string>('MODE');
    console.log(
      '🚀 ~ file: users.service.ts:22 ~ UsersService ~ findAll ~ APP_MODE:',
      APP_MODE,
    );
    return this.usersModel.find().populate('pets').exec();
  }

  findOne(id: string) {
    return this.usersModel.findOne({ _id: id }).populate('pets').exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersModel.updateOne({ _id: id }, updateUserDto);
  }

  remove(id: string) {
    return this.usersModel.deleteOne({ _id: id });
  }

  async adopt(id: string, pid: string) {
    try {
      const user: User = await this.usersModel.findOne({ _id: id });
      // TODO: revisar si la el usuario existe

      const petInfo = await this.petsModel.findOne({ _id: pid });
      console.log(
        '🚀 ~ file: users.service.ts:48 ~ UsersService ~ adopt ~ petInfo:',
        petInfo,
      );
      // TODO: revisar si la mascota existe

      const updatedPet = {
        name: petInfo.name,
        specie: petInfo.specie,
        pet: user._id,
      };

      console.log(
        '🚀 ~ file: users.service.ts:56 ~ UsersService ~ adopt ~ updatedPet:',
        updatedPet,
      );
      await this.petsModel.updateOne({ _id: pid }, updatedPet);

      user.pets.push(petInfo);
      await this.usersModel.updateOne({ _id: id }, user);
      return user;
    } catch (error) {
      console.log(
        '🚀 ~ file: users.service.ts:67 ~ UsersService ~ adopt ~ error:',
        error,
      );
    }
  }
}
