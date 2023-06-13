const db = require("../config/connection");
const userSeeds = require ("./userSeeds.json")
const commentSeeds = require ("./commentSeeds.json")

const { User, Comment } = require("../models");

db.once("open", async () => {
  
  try {
    await User.deleteMany({});

    await User.create(userSeeds, commentSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  };


  console.log("Seeding complete!");
  process.exit(0);
// });

// db.once("open", async () => {
  
//   try {
//     await Comment.deleteMany({});

//     await Comment.create(commentSeeds);
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   };


  console.log("Comment complete!");
  process.exit(0);
});
