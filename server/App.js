port=5173;
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
    
    }

);

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);

}
);