const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./NotesRoutes');
const cors = require('cors')

mongoose.set('strictQuery', false);
require('dotenv').config();

const PORT = 4000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_LINK)
    .then(() => console.log('WE WERE CONNECTED TO MONGO!'))
    .catch((err) => console.log('ERROR!!!'))

app.use(routes)

app.listen(PORT, () => {
    console.log(`Your server is running at PORT: ${PORT}!`);
});



// Username:    alimzhanislaSwiftNotes
// Password:    OgtzlWDdcziDqHgg
// MONGODB_LINK:    mongodb+srv://alimzhanislaSwiftNotes:<password>@cluster0.r2mmsfb.mongodb.net/?retryWrites=true&w=majority