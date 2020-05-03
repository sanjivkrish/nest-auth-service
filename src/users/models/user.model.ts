import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Unique id for each user' })
  id: number;

  @Field()
  username: string;

  @Field()
  password: string;
}
