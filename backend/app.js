const express = require('express');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const indexRouter = require('./routes/index.js');
const { connectDB } = require('./config/db.js');

dotenv.config();
connectDB();
const app = express();
app.use(morgan('dev'));
app.use(express.json())

const port = process.env.PORT || 5000;


app.use('/api/v1', indexRouter);



if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html')))
} else {
  app.get('/', (req, res) => { res.send('API is running') })
}

app.get('/', (_req, res) => {
  res.redirect('/api/v1');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})