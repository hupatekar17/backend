const mongoose = require('mongoose');

const pendingEnum = ['Partially Closed', 'Closed', 'Open'];

const qaqcSchema = new Schema({
  serialNumber: { type: Number, required: true },
  element: { type: String, required: true },
  standards: { type: String, required: true },
  frequency: { type: String, required: true },
  status: { type: String, enum: pendingEnum, required: true }
},{timestamps:true}
);

const Qaqc = mongoose.model('Qaqc', qaqcSchema);

module.exports = Qaqc;

















