const { Schema } = require("mongoose");

const PositionsSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = { HoldingsSchema };
