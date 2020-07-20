const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const faker = require('faker')
const contacts = [];
const app = express();

for(let i = 1; i< 500; i++) {
  contacts.push({
    name: faker.name.findName(),
    address: faker.address.city(),
    phoneNumber: faker.phone.phoneNumber()
  });
}

console.log('Mocks added');

app.use(cors());
app.use(bodyParser.json());

app.post('/api/search', (request, response) => {
  const {query} = request.body;
  let resp = contacts;
  if(query.length) {
    const regex = new RegExp(query, 'i');
    resp = contacts.filter(contact => contact.name.match(regex))
  }
  response.status(200).json(resp.slice(0, 5));


});


app.listen(5000, () => {
  console.log('Backend is running')
});