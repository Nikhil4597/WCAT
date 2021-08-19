#!/usr/bin/env node

const fs = require("fs");
const str = process.argv.splice(2);
    //console.log(str);
let files =[];
let flags =[];
let secondargs =[];
let write =[];
for(let arg of str)
{
    if(arg[0]=="-")
    {
        flags.push(arg);
    }
    else if(arg[0] =="/")
    {
        secondargs.push(arg.slice(1)) ;
    }
    // else if(arg[0]=="[")
    // {
    //     write.push(arg.slice(1));
    // }
    else
    {files.push(arg);}

}
//console.log(files);
 console.log(flags);
//console.log(write);
// console.log(secondargs);
//Optimal code for flag and file
for(let file of files)
{    let fileData =fs.readFileSync(file,"utf-8");

    for(let flag of flags)
    {
        if(flag =="-rs") //remove space
        {
            fileData = remove(fileData," ");
        }
        if(flag == "-rn")//remove new line
        {
            fileData = remove(fileData,"\n");
        }
        if(flag =="-rsc")//remove string
        {
            for(let sArgs of secondargs)
            {
                    fileData =remove(file,sArgs);
            }
        }
        if(flag == "-w")
        {
            writeFun(fileData);
        }
        if(flag == "-s")
        {
           let int = addSeq(fileData);
           for(let show of int)
           {console.log(show);}
        }
        //del extra empty line
        if(flag == "-sn")
        {
            let data = addSeqExtra(fileData);
            for(let show of data)
            {console.log(show);}
         
        }
        if(flag == "-del")
        {
           let ans =delSpace(fileData);
           for(let i=0;i<ans.length;i++)
           {console.log(ans[i]+"\n");
           //console.log("\n");
        
        } 
        }
        
    }
    
    
        // if(flag =="-w")
        // { let  getData ="";
        //     for(let k of write)
        //     {
        //         getData+=k+" ";   
        //     }
        //     fs.writeFileSync(file,getData);
        //     console.log("Write Successful!!");
        
        //console.log(fileData);
}
function delSpace(data)
{
    let arr = data.split("\n");
    let ans =[];
    for(let i =0;i<arr.length;i++)
    {
        if(arr[i]!="")
        ans.push(arr[i]);
    }
    return ans
}
        
function remove(data,newData) {
    return data.split(newData).join("");
}
function writeFun(fileData)
{
console.log("Write");
let str = process.argv;
fs.writeFileSync(fileData,str);
console.log("Done");
}
function addSeqExtra(Data)
    {
        let count =1;
        let contentarr =Data.split("\n");
        for(let i =0;i<contentarr.length;i++)
        {
            if(contentarr[i]!=""){
            contentarr[i] = count+" "+ contentarr[i];
                count++;            
            }
    }
        return contentarr;
    }
    function addSeq(Data)
    {
        let contentarr =Data.split("\n");
        for(let i =0;i<contentarr.length;i++)
        {
          contentarr[i] = i+1+" "+ contentarr[i];
         }
        return contentarr;
    }

// function make(file,string,getData){
//     getData+=string;
//     fs.writeFileSync(file,getData);
// }
// console.log(files);
// console.log(flags);

// if(flags.length==0)
// {    for(let k of files)
//     { 
//         console.log(fs.readFileSync(k,"utf-8"));}
// }
// else
// {
//  for(let flag of flags)
//  {
//      if(flag =="-rs")
//      {
//          for(let file of files)
//          {
//              let fileData = fs.readFileSync(file,"utf-8");
//             console.log(fileData.split(" ").join(""));
//          }
//      }
//  }
