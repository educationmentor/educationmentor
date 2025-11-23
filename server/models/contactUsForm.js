import mongoose from 'mongoose';

const ContactUsFormSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email:{
        type:String,
        required:true
    },
    state:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    interest: {
      type: String,
      required: true,
    },
    message:{
        type: String,
        required: false,
    },
    agreeToContact:{
        type:String,
        required:true
    }
  },
  {
    timestamps: true,
  }
);



const ContactUsForm = mongoose.model('ContactUsForm', ContactUsFormSchema);

export default ContactUsForm; 