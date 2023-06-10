import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UsersDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UsersDocument>,
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
    return this.usersModel.find();
  }

  findOne(id: string) {
    return this.usersModel.findOne({ _id: id });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersModel.updateOne({ _id: id }, updateUserDto);
  }

  remove(id: string) {
    return this.usersModel.deleteOne({ _id: id });
  }
}
