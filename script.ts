import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Bob",
  //     email: "bobroberts@bobert.com",
  //   },
  // });
  // console.log(user);
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e: Error) => {
    console.error(e);
    await prisma.$disconnect();
    throw e;
  });
