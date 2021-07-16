const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    flowers: [
      {
        flowerId: {
          type: Schema.Types.ObjectId,
          ref: "Flower",
          required: true,
        },
        quantity: {
          type: Number,
          min: 0,
          required: true,
        },
        price: {
          type: Number,
          min: 0,
          required: true,
        },
      },
    ],
    user: {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    delivered: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

orderSchema.methods = {
  getTotal() {
    return this.flowers.reduce((sum, value) => {
      return sum + value.price;
    }, 0);
  },
};

module.exports = mongoose.model("Order", orderSchema);
