import { faker } from "@faker-js/faker";
import { generateProduct } from "./generate-product.js";

faker.locale = "es";

export const generateUser = () => {
  let numOfProd = parseInt(faker.random.numeric(1, { bannedDigits: ["0"] }));
  let products = [];
  for (let index = 0; index < numOfProd; index++) {
    products.push(generateProduct());
  }

  return {
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    role: faker.helpers.arrayElement(['cliente', 'vendedor']),
    premiun: faker.datatype.boolean(),
    sex: faker.name.sex(),
    birthdate: faker.date.birthdate(),
    phone: faker.phone.number(),
    products,
    image: faker.internet.avatar(),
    id: faker.database.mongodbObjectId(),
    email: faker.internet.email(),
  };
};
