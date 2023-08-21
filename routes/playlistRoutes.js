const express= require('express')
const router= express.Router()
const fs= require('fs')
fs.readFile('./Data_source/albumData.json', 'utf8', (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    console.log("File data:", jsonString);
    const songData = JSON.parse(jsonString);
  
    //One: to get all songs 
    router.get('/album', (req, res, next) => {
      res.json(songData);
    });

  });
module.exports=router;