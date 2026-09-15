const fs=require("fs");

//creating

fs.writeFileSync('student.txt','hello,file is created ')
console.log("Done");

//read

const data=fs.readFileSync('student.txt','utf8');
console.log(data);

//write

fs.writeFileSync('student.txt','Name:satakshi \n Subject:full stack development');
console.log('File created successfully');

//update

fs.appendFileSync('student.txt','\nExperiment 2 completed.');
console.log('File upadated');