var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var VegetableSchema = new Schema({ name: String });

mongoose.model('Vegetable', VegetableSchema);

