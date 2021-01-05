var faker = require('faker');

var database = { turtorials: []};

for (var i = 1; i<= 10; i++) {
  database.turtorials.push({
    id: i,
    title: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    published_status: false
  });
}

console.log(JSON.stringify(database));