const notesController = {};

notesController.getNotes = (req, res) => res.json({ message: "GET notes" });

notesController.createNote = (req, res) => res.json({ message: "CREATE note" });

notesController.getNote = (req, res) => res.json({ message: "GET note" });

notesController.updateNote = (req, res) => res.json({ message: "UPDATE note" });

notesController.deleteNote = (req, res) => res.json({ message: "DELETE note" });

module.exports = notesController;
