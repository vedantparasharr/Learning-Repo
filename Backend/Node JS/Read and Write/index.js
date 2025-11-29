const fs = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8');
    console.log(data);
    await fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Hey, Wyd?');
    await fs.appendFile(path.join('files', 'reply.txt'), '\nNothing much, wby?');
    await fs.rename(path.join('files', 'reply.txt'), path.join('files', 'newReply.txt'));
    const newData = await fs.readFile(path.join(__dirname, 'files', 'newReply.txt'), 'utf-8');
    console.log(newData)
    await fs.unlink(path.join('files', 'starter.txt'));
  } catch (error) {
    console.error(error)
  }
}

fileOps()

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     fs.writeFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "Hi What is your name?",
//       (err) => {
//         if (err) throw err;
//         console.log("Writing Complete");
//         fs.appendFile(
//           path.join(__dirname, "files", "reply.txt"),
//           "\nAnd I am doing Btech Computer Science",
//           (err) => {
//             if (err) throw err;
//             console.log("Appending Complete");
//             fs.rename(
//               path.join(__dirname, "files", "reply.txt"),
//               path.join(__dirname, "files", "newReply.txt"),
//               (err) => {
//                 if (err) throw err;
//                 console.log("Rename Complete");
//               }
//             );
//           }
//         );
//       }
//     );
//   }
// );

process.on("uncaughtException", (err) => {
  console.error(`There was an error ${err}`);
  process.exit(1);
});