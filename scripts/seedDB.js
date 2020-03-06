mongoose = require("mongoose");
const db = require("../models")

mongoose.connect(
  porcess.env.MONGODB_URI ||
  "mongodb://localhost/devNetwork_DB"
);

const jobPostings = [
  {
    title: "Jr Web Developer",
    position: "Full-Stack",
    empType: "Full-Time",
    salary: 60000,
    applicants: [],
    company: "",
    description: "",
  }
];

