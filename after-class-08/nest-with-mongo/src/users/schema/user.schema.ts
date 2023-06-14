import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Pet } from 'src/pets/schema/pets.schema';

export type UsersDocument = HydratedDocument<User>;

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
export class User {
  _id?: string;

  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  avatar: string;

  @Prop({
    default: [],
    type: [{ type: mongoose.Types.ObjectId, ref: Pet.name }],
  })
  pets: Pet[];
}

export const UserSchema = SchemaFactory.createForClass(User);
