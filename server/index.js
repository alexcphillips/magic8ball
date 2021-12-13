const { app } = require("./app");
const { mongoConnect } = require("./db");

(async () => {
  await mongoConnect();
})();

app.listen(3000, () => {
  console.log("Server started SUCCESSFULLY");
});
