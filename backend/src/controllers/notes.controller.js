const notesController = {};

const Note = require("../models/Note");

notesController.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

notesController.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title,
    content,
    date,
    author,
  });
  console.log(newNote);
  await newNote.save();
  res.json({ message: "Note saved!" });
};

notesController.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};

notesController.updateNote = async (req, res) => {
  const { title, content, author } = req.body;
  await Note.findOneAndUpdate(
    { _id: req.params.id },
    {
      title,
      author,
      content,
    }
  );
  res.json({ message: "Note updated!" });
};

notesController.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted!" });
};

module.exports = notesController;
