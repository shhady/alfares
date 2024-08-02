import { auth } from "@clerk/nextjs/server"
import { clerkClient } from "@clerk/nextjs/server";
export const checkRole = async () => {
  const {userId} = auth();
  console.log(userId);
  const data = await clerkClient().users.getUserList();
    const userRole = data.data.find(user=> user.id === userId)?.publicMetadata?.role;

  console.log(userRole);

  return userRole;
}