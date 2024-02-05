const fs=require("fs")
// console.log(fs)

//sync
// const a=fs.writeFileSync('./ram.txt',"jay shree ram")
// console.log(a)


// const result=fs.readFileSync('./ram.txt',"utf-8")
// console.log(result);
// fs.readFile("./rama.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err)
//         }else{
//             console.log(result)
//         }
    
// })
fs.appendFileSync("./ram.txt",`${Date.now()}hey there`)