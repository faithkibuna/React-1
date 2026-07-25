const app = require("./src/app");
require("dotenv").config();

const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
// loads enviroment varibles from env
//connect to mongodb
//start the express sever