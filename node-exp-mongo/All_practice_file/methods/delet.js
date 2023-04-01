const dbconnect = require("./mongodb");

const deletdata = async () => {
  const db = await dbconnect();
  

  const result = await db.deleteOne( { name:"Shubham"});

  console.log(result);
};

//deletdata()