import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';

@Controller('tokens')
export class TokensController {
  constructor(private readonly tokensService: TokensService) {}

  @Post()
  create(@Body() createTokenDto: CreateTokenDto) {
    return this.tokensService.create(createTokenDto);
  }

  @Get()
  findAll() {
    return this.tokensService.findAll();
  }

  @Get('name')
  findOne(@Param('name') name: string) {
    return this.tokensService.findOne( name );
  }

  @Patch('name')
  update(@Param('name') name: string, @Body() updateTokenDto: UpdateTokenDto) {
    return this.tokensService.update(name, updateTokenDto);
  }

  @Delete('name')
  remove(@Param('name') name: string) {
    return this.tokensService.remove(name);
  }
}
