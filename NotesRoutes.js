
const { Router } = require('express');
const { getNotes, saveNote, deleteNote, editNote } = require('./NoteController');
const router = Router();


router.get('/', getNotes);
router.post('/saveNote', saveNote);
router.post('/deleteNote', deleteNote);
router.post('/editNote', editNote);

module.exports = router;