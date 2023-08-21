const express= require('express')
const router= express.Router()
const fs= require('fs')
fs.readFile('./Data_source/songsData.json', 'utf8', (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    console.log("File data:", jsonString);
    const songData = JSON.parse(jsonString);
  
    //One: to get all songs 
    router.get('/song', (req, res, next) => {
      res.json(songData);
    });


    //Two: to get a perticular song
    router.get('/song/:id', (req, res, next) => {
        const songId = req.params.id;
        const song = songData.songs [songId];
        if (!song) {
          return res.status(404).json({ error: 'Song not found' });
        }
        res.json(song);
      });

  });
module.exports=router;