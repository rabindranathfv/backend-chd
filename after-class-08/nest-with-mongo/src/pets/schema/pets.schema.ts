import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';

export type PetDocument = HydratedDocument<Pet>;

@Schema({
  versionKey: false,
  toJSON: {
    virtuals: true,
    transform: function (doc: any, ret: any) {
      ret.id = ret._id;
      delete ret._id;
      return ret;
    },
  },
})
export class Pet {
  _id?: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  specie: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  pet?: string;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
