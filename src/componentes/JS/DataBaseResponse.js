import faker from "faker";

const generateDatabaseResponse = () => {
  const followerCount = faker.random.number(10000);
  const followingCount = faker.random.number(100);
  const postCount = faker.random.number(20);

  const profile = {
    followerCount,
    followingCount,
    postCount,
    name: faker.name.findName(),
    age: faker.random.number({ min: 18, max: 99 }), // Edad entre 18 y 99 años
    job: faker.name.jobTitle(),
    country: faker.address.country(),
  };

  const posts = Array.from({ length: 6 }, () => ({
    image: faker.image.imageUrl(),
    text: faker.lorem.lines(2),
  }));

  return { profile, posts };
};

const DatabaseResponse = generateDatabaseResponse();

export default DatabaseResponse;
