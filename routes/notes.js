const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

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

router.post("/", async (req, res, next) => {
  try {
    let note = await Note.create(req.body.note);
    return res.status(201).json({ note: note.noteJSON() });
  } catch (error) {
    return res.status(400).next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  let id = req.params.id;
  try{
    let updatedNote = await Note.findByIdAndUpdate(id, req.body.note);
    return res.status(201).json({ message: "success" });
  }catch(error){
    return next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  let id = req.params.id;
  try {
    let deletednote = await Note.findByIdAndDelete(id);
    return res.status(201).json({ message: "success note deleted" });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
