const mongoose = require("mongoose");
const { MONGODB } = require("./config");

mongoose.connect(MONGODB, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const con = mongoose.connection;
con.on("error", console.error.bind(console, "Error connecting to MongoDB"));
con.once("open", () => {
  console.log("Connected to MongoDB Successfully!");
});
