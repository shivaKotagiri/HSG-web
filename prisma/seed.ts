import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

async function main() {
  const adminEmail = "hsgashiva@gmail.com";

  const existingAdmin = await prisma.admin.findUnique({
    where: { email: adminEmail },
  });

  if (existingAdmin) {
    console.log("Admin already exists");
    return;
  }

  const hashedPassword = await bcrypt.hash("Shiva@1296", 10);

  await prisma.admin.create({
    data: {
      email: adminEmail,
      password: hashedPassword,
    },
  });

  console.log("Admin created successfully");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
