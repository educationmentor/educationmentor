import express from "express";
import {
  createMbbsIndiaEnquiry,
  createMbbsNepalEnquiry,
  createMbbsGeorgiaEnquiry,
} from "../controller/MbbsEnquiry.js";

const mbbsIndiaEnquiryRoutes = express.Router();
const mbbsNepalEnquiryRoutes = express.Router();
const mbbsGeorgiaEnquiryRoutes = express.Router();

mbbsIndiaEnquiryRoutes.post("/", createMbbsIndiaEnquiry);
mbbsNepalEnquiryRoutes.post("/", createMbbsNepalEnquiry);
mbbsGeorgiaEnquiryRoutes.post("/", createMbbsGeorgiaEnquiry);

export {
  mbbsIndiaEnquiryRoutes,
  mbbsNepalEnquiryRoutes,
  mbbsGeorgiaEnquiryRoutes,
};