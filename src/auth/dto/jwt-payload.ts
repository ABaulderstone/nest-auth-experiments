import { IsJWT, IsNotEmpty } from 'class-validator';

export class JWTPayloadDTO {
  @IsNotEmpty()
  @IsJWT()
  token: string;
}
