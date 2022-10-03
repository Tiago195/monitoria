require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`O pai ta on na porta ${PORT}`));