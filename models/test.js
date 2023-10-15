import mongoose from 'mongoose';

const Schema = mongoose.Schema;

testSchema = new Schema({
  entry: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Entry', testSchema);

