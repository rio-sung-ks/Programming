import fs from 'fs'

//  * Node FS Example
//  * Node JS Write to File
//  */

// let subject = "good";
// var writeStream = fs.createWriteStream(subject+".txt");

// writeStream.write("Hi, JournalDEV Users. ");
// writeStream.write("Thank You.");

// writeStream.end();

fs.unlink('eeet.txt', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('File is deleted.');
    }
  });