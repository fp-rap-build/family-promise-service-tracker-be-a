const faker = require('faker');

const ethnicities = [
  'indian_native_alaskan',
  'asian',
  'black',
  'hawaiian_pacific_islander',
  'white',
];

const genders = ['male', 'female', 'nonbinary'];

const getRand = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

// Had to hard code due to service_entries seeds needing non-random id's

const recipients = [
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
  {
    name: faker.name.findName(),
    age: Number(getRand(121)),
    race: ethnicities[getRand(5) - 1],
    gender: genders[getRand(3) - 1],
    address: faker.fake(`{{address.streetAddress}}`),
    city: faker.fake(`{{address.city}}`),
    state: faker.fake(`{{address.stateAbbr}}`),
    zip_code: faker.fake(`{{address.zipCode}}`),
    veteran_status: faker.random.boolean(),
    household_size: Number(getRand(15)),
  },
];

exports.seed = function (knex) {
  return knex('recipients').insert(recipients);
};