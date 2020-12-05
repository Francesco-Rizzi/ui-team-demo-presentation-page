const express = require('express');
const app = express();

app.use(express.static('./'));

app.listen(666, () => {
    console.log('Server running on port 666.');
});