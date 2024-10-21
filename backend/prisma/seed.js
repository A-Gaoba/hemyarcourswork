// prisma/seed.js

const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  // Sample data for users
  const users = [
    {
      email: "user1@example.com",
      password: await bcrypt.hash("password1", 10),
    },
    {
      email: "user2@example.com",
      password: await bcrypt.hash("password2", 10),
    },
  ];

  // Create users
  await Promise.all(users.map((user) => prisma.user.create({ data: user })));

  // Sample data for retail spaces
  const spaces = [
    {
      name: "Retail Space 1",
      floor: 1,
      size: 100,
      hasAirConditioner: true,
      rentCost: 500,
    },
    {
      name: "Retail Space 2",
      floor: 2,
      size: 200,
      hasAirConditioner: false,
      rentCost: 700,
    },
  ];

  // Create retail spaces
  await Promise.all(
    spaces.map((space) => prisma.retailSpace.create({ data: space }))
  );

  // Sample data for inquiries
  const inquiries = [
    {
      clientName: "Client 1",
      clientContact: "client1@example.com",
      spaceId: 1, // Assuming it exists
      userId: 1, // Assuming it exists
    },
    {
      clientName: "Client 2",
      clientContact: "client2@example.com",
      spaceId: 2,
      userId: 2,
    },
  ];

  // Create inquiries
  await Promise.all(
    inquiries.map((inquiry) => prisma.inquiry.create({ data: inquiry }))
  );

  console.log("Database seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
