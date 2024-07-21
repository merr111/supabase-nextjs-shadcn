import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FirebaseModule } from './firebase/firebase.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule,  ConfigModule.forRoot(),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
