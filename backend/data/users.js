import bcrypt from "bcryptjs";

const users = [
  {
    name: "Адмін",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Петро Петренко",
    email: "peter@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Іван Іванов",
    email: "ivan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
