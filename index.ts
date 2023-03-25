import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // FACT:creating a user with some post details
  // const user = await prisma.user.create({
  //   data: {
  //     email: "myemail@email",
  //     name: "my name",
  //     posts: {
  //       create: {
  //         title: "foo",
  //         published: false,
  //         content: "lorem ipsum",
  //       },
  //     },
  //   },
  // });

  const usersWithPost = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  console.dir(usersWithPost, {
    depth: null,
  });

  // console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(0);
  });

// 54.204.197.119, 3.222.148.224, 54.204.47.202, 3.227.136.248
