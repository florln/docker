const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

var whitelist = ['http://localhost', 'http://backend']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.get('/api', cors(corsOptionsDelegate), (req, res) => {
    res.json({ message: 'Hello from the backend API!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
