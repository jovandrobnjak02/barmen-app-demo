import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderController } from './order/order.controller';

@Controller()
export class AppController {}
