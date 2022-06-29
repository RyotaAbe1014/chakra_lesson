import { FC, memo } from "react";
import { Header } from "../organisms/layout/Header";
import { Wrap, WrapItem } from "@chakra-ui/layout";

import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: FC = memo(() => {
  return (
    <>
      <Header></Header>
      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <UserCard imageUrl="https://source.unsplash.com/random" userName="aaaa" fullName="aaaaa bbb"></UserCard>
        </WrapItem>
      </Wrap>
    </>

  )
});