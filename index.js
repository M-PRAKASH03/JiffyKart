import jsonfile from "jsonfile";
import moment from "moment-timezone";
import simpleGit from "simple-git";

const FILE_PATH = "./data.json";
const git = simpleGit();

const DAYS = 100; // 👈 last 100 days

const makeCommits = async () => {
  for (let i = 0; i < DAYS; i++) {
    const date = moment()
      .tz("Asia/Kolkata")
      .subtract(i, "days")
      .hour(12)
      .minute(0)
      .second(0)
      .format();

    const data = { date };

    await jsonfile.writeFile(FILE_PATH, data);

    await git.add([FILE_PATH]);
    await git.commit(`commit ${i}`, {
      "--date": date,
    });

    console.log("✅ Commit for:", date);
  }

  console.log("🚀 Pushing...");
  await git.push();
};

makeCommits();


// import jsonfile from "jsonfile";
// import moment from "moment-timezone";
// import simpleGit from "simple-git";
// import random from "random";

// const path = "./data.json";
// const git = simpleGit();

// const makeCommits = async (n) => {
//   if (n === 0) {
//     console.log("🚀 Pushing to GitHub...");
//     await git.push();
//     return;
//   }

//   // ✅ spread across last 100 days
//   const date = moment()
//     .tz("Asia/Kolkata")
//     .subtract(random.int(0, 100), "days")
//     .format();

//   const data = { date };

//   await jsonfile.writeFile(path, data);
//   await git.add([path]);
//   await git.commit(date, { "--date": date });

//   console.log("✅ Commit created:", date);

//   await makeCommits(n - 1);
// };

// // 🔥 number of commits (increase if you want denser graph)
// makeCommits(120);





// import jsonfile from "jsonfile";
// import moment from "moment-timezone";
// import simpleGit from "simple-git";
// import random from "random";

// const path = "./data.json";
// const git = simpleGit();

// const makeCommits = async (n) => {
//   if (n === 0) {
//     console.log("Pushing to GitHub...");
//     await git.push();
//     return;
//   }

//   const x = random.int(0, 54);
//   const y = random.int(0, 6);

//   // 🔥 use CURRENT time first (important for testing)
//   const date = moment()
//   .tz("Asia/Kolkata")
//     .subtract(random.int(0, 100), "days")
//   .format();

//   const data = { date };

//   await jsonfile.writeFile(path, data);

//   await git.add([path]);
//   await git.commit(date, { "--date": date });

//   console.log("Commit created:", date);

//   await makeCommits(n - 1);
// };

// // 🔥 start
// console.log("Script started");
// makeCommits(50);





// import jsonfile from "jsonfile";
// import moment from "moment-timezone";
// import simpleGit from "simple-git";

// const path = "./data.json";

// const date = moment()
//   .tz("Asia/Kolkata")
//   .format("YYYY-MM-DDTHH:mm:ssZ");

// const data = { date };

// await jsonfile.writeFile(path, data,()=>{});

// const git = simpleGit();
// await git.add([path]);
// await git.commit(date, { "--date": date });
// await git.push();


// import jsonfile from "jsonfile";
// import moment from "moment-timezone";
// import simpleGit from "simple-git";
// import random from "random";

// const path = "./data.json";

// // recursive commit generator
// const makeCommits = async (n) => {
//   if (n === 0) {
//     await simpleGit().push();
//     return;
//   }

//   const x = random.int(0, 54);
//   const y = random.int(0, 6);

//   const date = moment()
//     .tz("Asia/Kolkata")
//     .subtract(1, "y")
//     .add(1, "d")
//     .add(x, "w")
//     .add(y, "d")
//     .format();

//   const data = { date };

//   await jsonfile.writeFile(path, data);

//   await simpleGit()
//     .add([path])
//     .commit(date, { "--date": date });

//   // recursive call
//   await makeCommits(n - 1);
// };

// // 🔥 change number of commits here
// makeCommits(50);
// console.log("Script started");