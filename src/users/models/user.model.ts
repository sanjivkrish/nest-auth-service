import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Length, IsEmail, IsString } from 'class-validator';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Unique id for each user' })
  id?: number;

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
