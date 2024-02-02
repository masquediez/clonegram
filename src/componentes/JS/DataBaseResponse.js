import { faker } from "@faker-js/faker";

const generateFakeData = () => {
  return {
    name: faker.person.firstName() + " " + faker.person.lastName(),
    age: faker.datatype.number({ min: 18, max: 99 }),
    profession: faker.name.jobTitle(),
  };
};

export const getDatabaseResponse = () => {
  return {
    profile: generateFakeData(),
  };
};
