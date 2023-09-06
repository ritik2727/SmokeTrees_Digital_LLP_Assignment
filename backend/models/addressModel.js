import mongoose from "mongoose";

const addressSchema = mongoose.Schema(
  {
    address: {
      type: String,
      require: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timeStamps: true,
  }
);

const Address = mongoose.model("Address", addressSchema);

export default Address;
