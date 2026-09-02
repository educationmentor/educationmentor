import mongoose from "mongoose";

const mbbsIndiaEnquiryFormSchema = new mongoose.Schema(
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

const mbbsNepalEnquiryFormSchema = new mongoose.Schema(
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
    status: {
      type: String,
      enum: ["new", "contacted", "converted", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);
const mbbsGeorgiaEnquiryFormSchema = new mongoose.Schema(
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

    neetStatus: {
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

const MbbsGeorgiaEnquiryForm = mongoose.model("MbbsGeorgiaEnquiryForm",mbbsGeorgiaEnquiryFormSchema);
const MbbsIndiaEnquiryForm = mongoose.model("MbbsIndiaEnquiryForm", mbbsIndiaEnquiryFormSchema );
const MbbsNepalEnquiryForm = mongoose.model("MbbsNepalEnquiryForm", mbbsNepalEnquiryFormSchema);

export {
  MbbsIndiaEnquiryForm,
  MbbsNepalEnquiryForm,
  MbbsGeorgiaEnquiryForm,
};