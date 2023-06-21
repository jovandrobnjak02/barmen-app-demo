import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './coffee/coffee.entity';
import { CoffeeModule } from './coffee/coffee.module';
import { BarmenModule } from './barmen/barmen.module';
import { OrderModule } from './order/order.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'coffee_shop',
      entities: [Coffee],
      synchronize: true
}),CoffeeModule,BarmenModule,OrderModule, ClientsModule.register([
  {name : 'BARISTA',
  transport: Transport.TCP}
])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
