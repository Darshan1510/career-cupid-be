import mongoose from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 8;

enum Role {
  ADMIN = "ADMIN",
  SEEKER = "SEEKER",
  RECRUITER = "RECRUITER",
}

export interface IUser extends mongoose.Document {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  created_at: number;
  role: Role;
}

const UserSchema: mongoose.Schema<IUser> = new mongoose.Schema({
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  username: { type: String, unique: true, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  email: { type: String, unique: true, required: true, trim: true },
  role: { type: String, default: Role.SEEKER, enum: Object.values(Role), required: true },
  created_at: { type: Number, required: true, default: Date.now() },
});

UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, saltRounds);
  }
  next();
});

export const UserModel = mongoose.model<IUser>("users", UserSchema);
