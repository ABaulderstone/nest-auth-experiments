import { IsJWT, IsNotEmpty } from 'class-validator';

export class LoginResponseDto {
  @IsNotEmpty()
  @IsJWT()
  token: string;
}
