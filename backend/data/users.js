import bcrypt from "bcryptjs";

const users = [
  {
    email: "admin@vcic.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
];

export default users;
