const fs =  require("fs");
fs.writeFile("./messaged.jsx","Hellow this is good ",(err)=>{
    console.log("its working ");
    
    if(err){
        console.log("this is error message ",err);
        
    }
    console.log("working successfully ");
    

})
fs.readFile('./message.txt',(err,data)=>{
    if(err) throw err
    console.log(data.toString());
    
})

