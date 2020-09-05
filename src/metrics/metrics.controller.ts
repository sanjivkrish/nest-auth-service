import { Controller, Get } from '@nestjs/common';
import { register } from 'prom-client';

@Controller('metrics')
export class MetricsController {
  @Get()
  async get() {
    console.log('metrics');
    return await register.getMetricsAsJSON();
  }
}
