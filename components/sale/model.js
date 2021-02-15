const { model, Schema } = require("mongoose");
const { detail } = require("../detail/model");

const sale = new Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  total: {
    type: Number,
    required: [true, "Total is required"],
  },

  details: [detail],

  idClient: {
    type: Schema.Types.ObjectId,
    ref: "clients",
  },
});

module.exports = model("Sales", sale);
