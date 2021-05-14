import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TokenDocument = Token & Document;

@Schema()
export class Token {
  @Prop()
  name: string;

  @Prop()
  alias: string;

  @Prop()
  value: number;

  @Prop()
  minningform: string;

}

export const TokenSchema = SchemaFactory.createForClass(Token);