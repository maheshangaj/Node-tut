const fs=require("fs")
const path=require("path")
const dirpath=path.join(__dirname,"Curd")
const filepath=`${dirpath}/apple.txt`;

//CREATED FILE
//fs.writeFileSync(filepath,"the new form created")  

// READ FILE
// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item)
// })

//UPDATED FILE
// fs.appendFile(filepath,' the new file updates',(err)=>{
// if(!err){
//     console.log('file updated')
// }
// })

//RENAME FILE
// fs.rename(filepath,`${dirpath}/rename.txt`,(err)=>{
//     if(!err){
//         console.log("file rename")
//     }
// })

//FILE DELET
fs.unlinkSync(`${dirpath}/rename.txt`)