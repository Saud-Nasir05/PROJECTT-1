import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, // Ek email se 2 accounts nahi ban sakte
    lowercase: true
  },
  password: { 
    type: String, 
    required: true 
  }
}, { timestamps: true });

export default mongoose.model('User', UserSchema);