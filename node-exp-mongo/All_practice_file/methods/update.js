const dbconnect = require("./mongodb");

const Updatedata = async () => {
  const db = await dbconnect();
  

  const result = await db.updateOne( { name: "Raju"},
  {$set:{name: "Shubham"} });

  console.log(result);
};

//Updatedata()