const fs = require("fs");

// fs.writeFile("message1.txt", "Hello from Diana", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved! Yey!");
// });

fs.readFile("./message1.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
