import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Req,
  Res,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/params/:name/:lastname')
  getParams(
    @Param('name') name: string,
    @Param('lastname') lastname: string,
    @Body() body: any,
    @Req() req: Request,
    @Res() res: Response,
    @Query('role') role: string,
    @Query('age') age: string,
  ) {
    console.log(
      '🚀 ~ file: users.controller.ts:35 ~ UsersController ~ age:',
      age,
    );
    console.log(
      '🚀 ~ file: users.controller.ts:35 ~ UsersController ~ role:',
      role,
    );

    console.log(
      '🚀 ~ file: users.controller.ts:25 ~ UsersController ~ body:',
      body,
    );
    console.log(
      '🚀 ~ file: users.controller.ts:21 ~ UsersController ~ getParams ~ lastname:',
      lastname,
    );
    console.log(
      '🚀 ~ file: users.controller.ts:21 ~ UsersController ~ getParams ~ name:',
      name,
    );

    const newBody = req.body;
    console.log(
      '🚀 ~ file: users.controller.ts:42 ~ UsersController ~ newBody:',
      newBody,
    );
    const params = req.params;
    console.log(
      '🚀 ~ file: users.controller.ts:44 ~ UsersController ~ params:',
      params,
    );
    const queryFromReq = req.query;
    console.log(
      '🚀 ~ file: users.controller.ts:68 ~ UsersController ~ queryFromReq:',
      queryFromReq,
    );

    res.json({
      query: { age, role },
      name,
      lastname,
      body,
      newBody,
      params,
      queryFromReq,
    });
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    if (
      !createUserDto.first_name ||
      !createUserDto.last_name ||
      !createUserDto.email ||
      !createUserDto.password
    ) {
      throw new HttpException(
        'Invalid parameters in BODY',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newUser = this.usersService.create(createUserDto);
    return { status: 'success', user: newUser };
  }

  @Get()
  findAll() {
    const users = this.usersService.findAll();
    return { status: 'success', users };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (+id < 0) {
      throw new HttpException('the id can not be negative', 400);
    }
    const user = this.usersService.findOne(id);
    if (!user) {
      throw new HttpException(
        `user with ${id} can not be found`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return { status: 'success', user };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    if (isNaN(+id)) {
      throw new HttpException(
        'the id format is invalid',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    if (isNaN(+id)) {
      throw new HttpException(
        'the id format is invalid',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.usersService.remove(id);
  }
}
