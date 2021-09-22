const express = require('express');
const app = express();

// phonebook entry data 
const entries = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (req,res) => {
    res.send('<h1>Hello World!</h1>');
})

// 3.1 show phonebook entries for persons 
app.get('/api/persons', (req,res) => {
    res.json(entries);
})

// 3.2 phonebook info 
app.get('/info', (req,res) => {
    const len = entries.length;
    const date = new Date();
    res.send(`Phonebook has info for ${len} people <br><br> ${date} `);
})

// 3.3 display information for single phonebook entry 
app.get('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id);
    const phoneEntry = entries.find(entry => entry.id === id);
    if(phoneEntry){
        res.json(phoneEntry);
    }else{
        res.status(404).end();
    }
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})