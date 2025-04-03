import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "shruti_gupta@example.com",
    fullName: "Shruti Gupta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    email: "rishika@example.com",
    fullName: "Rishika Gupta",
    password: "135791",
    profilePic: "https://randomuser.me/api/portraits/women/76.jpg",
  },
  {
    email: "sakshi@example.com",
    fullName: "Sakshi Mahajan",
    password: "159753",
    profilePic: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    email: "saloni_gupta@example.com",
    fullName: "Saloni Gupta",
    password: "260104",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    email: "soniya@example.com",
    fullName: "Soniya Agarawal",
    password: "110204",
    profilePic: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    email: "aditi@example.com",
    fullName: "Aditi Jain",
    password: "568923",
    profilePic: "https://randomuser.me/api/portraits/women/74.jpg",
  },
  {
    email: "shreya@example.com",
    fullName: "Shreya Bhawsar",
    password: "748596",
    profilePic: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    email: "dhruvi@example.com",
    fullName: "Dhruvi Gupta",
    password: "143658",
    profilePic: "https://randomuser.me/api/portraits/women/67.jpg",
  },

  // Male Users
  {
    email: "Athrav@example.com",
    fullName: "Athrav Atre",
    password: "145623",
    profilePic: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    email: "Devansh@example.com",
    fullName: "Devansh Porwal",
    password: "785416",
    profilePic: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    email: "Krishna@example.com",
    fullName: "Krishna Gupta",
    password: "859674",
    profilePic: "https://randomuser.me/api/portraits/men/86.jpg",
  },
  {
    email: "Vaibhav@example.com",
    fullName: "Vaibhav Jain",
    password: "456321",
    profilePic: "http://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    email: "Aman@example.com",
    fullName: "Aman Mehta",
    password: "854691",
    profilePic: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    email: "Aadi@example.com",
    fullName: "Aadi Saraf",
    password: "127468",
    profilePic: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    email: "Kavyansh@example.com",
    fullName: "Kavyansh Gupta",
    password: "301104",
    profilePic: "https://randomuser.me/api/portraits/men/58.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();