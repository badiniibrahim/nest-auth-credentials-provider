import prisma from "@/lib/prisma";
import { RequestBody } from "@/types";
import bcrypt from "bcrypt";

export const POST = async (request: Request) => {
  const body: RequestBody = await request.json();
  const user = await prisma.user.findFirst({ where: { email: body.email } });
  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...result } = user;
    return Response.json({ result });
  } else {
    return Response.json({});
  }
};
