import { ArgsType, Field } from '@nestjs/graphql';
import { IsString, Length, IsEmail } from 'class-validator';

@ArgsType()
export class SignupArgs {
  @Field()
  @IsString()
  username: string;

  @Field()
  @Length(3, 20)
  password: string;

  @Field()
  @IsEmail()
  email: string;
}
