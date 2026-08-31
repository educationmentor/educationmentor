import mongoose from "mongoose";

const mbbsEnquiryFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    neetScore: {
      type: String,
      trim: true,
    },
    preferredState: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["new", "contacted", "converted", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

const MbbsEnquiryForm = mongoose.model("MbbsEnquiryForm", mbbsEnquiryFormSchema);

export default MbbsEnquiryForm;