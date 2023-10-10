import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
  NotContains,
} from 'class-validator';

export class RegisterDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @NotContains('@')
  username: string;

  @IsNotEmpty()
  @IsStrongPassword({ minLength: 6, minUppercase: 1, minNumbers: 1 })
  password: string;
}
