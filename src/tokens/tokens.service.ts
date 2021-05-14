import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Token, TokenDocument } from 'src/schemas/token.schema';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';

@Injectable()
export class TokensService {
  constructor(@InjectModel(Token.name) private tokenModel: Model<TokenDocument>) {}

  async create(createTokenDto: CreateTokenDto): Promise <Token> {
    return new this.tokenModel(createTokenDto).save();
  }

  async findAll() {
    return this.tokenModel.find();
  }

  async findOne(name: string) {
    return this.tokenModel.findOne({ name });
  }

  async update(name: string, updateTokenDto: UpdateTokenDto) {
    return this.tokenModel.updateOne({name}, {$set: {...updateTokenDto}});
  }

  async remove(name: string) {
    return this.tokenModel.deleteOne({ name });
  }
}
