import mongoose from 'mongoose';

mongoose.connect('mongodb://mongoDB:@./<base-de-datos>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

