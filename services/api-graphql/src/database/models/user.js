import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (done) {
  const user = this;
  // if password has not been modified do nothing
  if (!user.isModified("password")) return done();
  // hash pass with bcrypt
  bcrypt.hash(this.password, 12, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    done();
  });
});

UserSchema.methods.comparePassword = function (candidatePassword) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) throw err;
    return isMatch;
  });
};

UserSchema.set("toObject", { getters: true, versionKey: false });
UserSchema.options.toObject.transform = function (doc, ret) {
  delete ret._id;
  return ret;
};

export default model("User", UserSchema);
