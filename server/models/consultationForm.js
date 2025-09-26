import mongoose from 'mongoose';

const ConsultationFormSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    interestedCountry: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ConsultationForm = mongoose.model('ConsultationForm', ConsultationFormSchema);

export default ConsultationForm; 