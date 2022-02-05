import { Schema, model } from 'mongoose';

const UserSchema = new Schema(

  {
    username: { type: String, required: true },
  },
  {
    timestamps: true,
  },
 
);

UserSchema.set('toObject', { getters: true, versionKey: false })
UserSchema.options.toObject.transform = function (doc, ret) {
  delete ret._id;
  return ret;
}

export default model('User', UserSchema);