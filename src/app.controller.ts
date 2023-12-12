import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('http://localhost:3000/api')
  @ApiOperation({
    "summary": "Redirect to the API Docs page.",
    "description": "Redirect the main route into the API Docs page to minimalize misinterpretation of developer's understanding about the schema of this project."
  })
  @ApiResponse({
    "status": 200
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
