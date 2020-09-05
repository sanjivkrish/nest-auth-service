import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MetricsModule } from './metrics/metrics.module';
import { collectDefaultMetrics } from 'prom-client';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: './src/schema.gql',
      context: ({ req }) => ({ req }),
    }),
    MetricsModule,
  ],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    collectDefaultMetrics({
      prefix: 'nestjs_auth_',
    });
  }
}
