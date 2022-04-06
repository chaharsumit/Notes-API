const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

router.get("/", async (req, res, next) => {
  try {
    let result = [];
    let notes = await Note.find();
    notes.forEach(note => {
      result.push(note.noteJSON());
    });
    return res.status(200).json({ notes: result });
  } catch (error) {
    return res.status(400).next(error);
  }
});

router.post("/addNotes", async (req, res, next) => {
  try {
    let note = await Note.create(req.body.note);
    return res.status(201).json({ note: note.noteJSON() });
  } catch (error) {
    return res.status(400).next(error);
  }
});

/* 

router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  Note.findByIdAndUpdate(id, req.body, (err, note) => {
    if(err){
      return res.status(400).next(err);
    }
    return res.status(201).res.json({ note });
  });
})

router.delete("/:id", auth.verifyToken, async (req, res, next) => {
  let id = req.params.id;
  try {
    let deletednote = await note.findByIdAndDelete(id);
    return res.status(201).json({ message: "success note deleted" });
  } catch (error) {
    return next(error);
  }
});

*/

module.exports = router;