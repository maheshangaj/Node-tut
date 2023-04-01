const dbconnect = require("./mongodb");

const datainsert = async () => {
  const db = await dbconnect();
  const myset = [
    { name: "abc", address: "Highway 71" },
    { name: "Atul", address: "Lowstreet 5" },
  ];

  const result = await db.insertMany(myset);

  console.log(result);
};

//datainsert();
