export class CreateUserDto {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  avatar?: string;
}
