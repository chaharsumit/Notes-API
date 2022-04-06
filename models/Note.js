const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notesSchema = new Schema({
  heading: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
}, { timestamps: true });

noteSchema.methods.noteJSON = function(){
  return {
    heading: this.heading,
    description: this.description,
    date: this.date,
    id: this.id
  }
}

const Note = mongoose.model('Note', notesSchema);

module.exports = Note;