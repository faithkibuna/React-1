app.post("/users", (req, res) => {
  const newUser = req.body;

  users.push(newUser);

  res.status(201).json({
    message: "User added successfully",
    user: newUser,
  });
});
