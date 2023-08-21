const express= require('express')
const router= express.Router()
const fs= require('fs')
fs.readFile('./Data_source/singerData.json', 'utf8', (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    console.log("File data:", jsonString);
    const singerData = JSON.parse(jsonString);
  
    //One: to get all singer 
    router.get('/singer', (req, res, next) => {
      res.json(singerData);
    });


    //Two: to get a perticular singer
    router.get('/singer/:id', (req, res, next) => {
        const singerId = req.params.id;
        const singer = singerData.singers [singerId];
        if (!singer) {
          return res.status(404).json({ error: 'Song not found' });
        }
        res.json(singer);
      });

  });
module.exports=router;