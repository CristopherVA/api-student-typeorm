import "reflect-metadata"
import app from './app'
import { database } from './config/db'
import studentPath from './routes/studentRoute'

// Connection to datebase
database();

// Route
app.use('/student', studentPath);

// Server Start 
app.listen(8000, () => {
    console.log('Server started on port 8000');
})
