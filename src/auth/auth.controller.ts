import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('auth')
export class AuthController {
    
    constructor(private authService: AuthService){}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto ) {
        console.log(authCredentialsDto);
        return this.authService.signUp(authCredentialsDto);
    }
}