import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";
import { Logout } from "../../components/logoutbutton/logout";

const page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      page {session?.user.username}
      <br />
      {session?.user.accessToken}
      <br />
      {session?.user.userid}
      <br />
      <Logout />
    </div>
  );
};

export default page;
