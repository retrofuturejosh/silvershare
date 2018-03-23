import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path'

import router from './api/index';
import db from './db';

db.sync()
.then(() => {
  let app = express();

  //parse requests
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  
  //api routing
  app.use('/api', router);
  
  //statically serve public folder
  app.use(express.static(path.join(__dirname, '..', 'public')));
  
  //send index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  })
  
  //listen, baby
  app.listen(3000, function () {
    console.log("Y'all, I hear you on port 3000!")
  });
})

