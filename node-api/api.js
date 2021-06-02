const express = require('express');

const cors = require('cors');

const app = express();
const port = 3000;

var http = require('http');

app.use(cors());

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

app.get('/:address', (req, res) => {
    let address = req.params.address;

    if(emailIsValid(address) && address !== ''){
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({email:'WELCOME! Your JWT token is: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IldlbGNvbWUifQ.jb0ZdG731mQOJ9ojUOXrTGTSLgBrg7GTXHRfZV4ambU'}));
    }
    else{
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({email:'Please eneter a valid email'}));
    }
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));