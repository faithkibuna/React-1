const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
//array
let users = [
  {
    name: "faith",
    email: "faith@gmail.com",
    phone: "0712345678",
    password: "1234",
  },
  {
    name: "mark",
    email: "mark@gmail.com",
    phone: "12345678",
    password: "1234",
  },
];
// get route
app.get("/users", (req, res) => {
  res.json(users);
  // post
  app.post("/users", (req, res) => {
    const newUser = req.body;
    users.push(newUser);

    res.status(201).json({
      message: "User added successfully",
      user: newUser,
    });
  });
  // start server
  const port = 3000;
  (app.listen(PORT),
    () => {
      console.log(`Server is running on http://localhost ${PORT}`);
    });
});
