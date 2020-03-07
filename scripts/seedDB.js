const mongoose = require("mongoose");
const db = require("../models")
const dbConfig = require("../db/config");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/devNetwork_DB", { 
  useNewUrlParser: true, 
  useFindAndModify: false,
  useUnifiedTopology: true
});

const jobPostings = [
  {
    title: "Jr Back End Developer",
    position: "Back End",
    empType: "Full-Time",
    salary: 60000,
    applicants: [],
    company: "",
    description: "",
  },
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

db.Job.remove({}, (err, res) => {
  if (err)
  console.log(res)});

db.Job.insertMany(jobPostings, (err, res) => {
  console.log(res)
})
