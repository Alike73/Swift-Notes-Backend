
const NoteModel = require('./NoteModel');

// GET
module.exports.getNotes = async(req, res) => {
    const myNotes = await NoteModel.find();
    res.send(myNotes)
}

// POST
module.exports.saveNote = async(req, res) => {
    const { title, text, category } = req.body;
    NoteModel.create({ title, text, category, createdAt: new Date() })
    .then((data) => {console.log('Note is added!')
    res.send(data)
    })
}

// DELETE
module.exports.deleteNote = async(req, res) => {
    // here, we'll delete by "ID"
    const { _id, } = req.body;
    NoteModel.findByIdAndDelete(_id)
    .then(() => res.send('Note is deleted!!!'))
}

// EDIT
module.exports.editNote = async(req, res) => {
    const { _id, title, text, category } = req.body;
    NoteModel.findByIdAndUpdate(_id, { title, text, category })
    .then(() => res.send('Note is edited!!!'))
}