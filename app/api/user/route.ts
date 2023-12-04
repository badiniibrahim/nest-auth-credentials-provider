import prisma from "@/lib/prisma";
import { CreateUserRequestBody } from "@/types";
import bcrypt from "bcrypt";

export const POST = async (request: Request) => {
  const body: CreateUserRequestBody = await request.json();
  const user = await prisma.user.create({
    data: {
      username: body.username,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    },
  });
  const { password, ...result } = user;
  return Response.json({ result });
};
