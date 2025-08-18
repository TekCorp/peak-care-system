import mongoose from "mongoose";
import dotenv from "dotenv";
import CaseStudy from "./models/caseStudyModel.js";
import connectDataBase from "./config/database.js";
import caseStudies from "./data/caseStudies.js";
import users from "./data/users.js";
import User from "./models/userModel.js";

dotenv.config();
connectDataBase();

const importData = async () => {
  try {
    await CaseStudy.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleCaseStudies = caseStudies.map((item) => {
      return { ...item, user: adminUser };
    });
    await CaseStudy.insertMany(sampleCaseStudies);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await CaseStudy.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
