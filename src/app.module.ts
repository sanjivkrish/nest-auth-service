import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: './src/schema.gql',
      context: ({ req }) => ({ req }),
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
