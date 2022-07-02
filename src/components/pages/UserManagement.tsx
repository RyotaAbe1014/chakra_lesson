import { FC, memo, useCallback, useEffect } from "react";
import { Center, Wrap, WrapItem, Stack } from "@chakra-ui/layout";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react'
import { Spinner } from "@chakra-ui/spinner";



import { Header } from "../organisms/layout/Header";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDatailModal } from "../organisms/user/UserDatailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { onSelectUser, selectedUser } = useSelectUser();
  useEffect(() => getUsers(), []);

  const onClickUser = useCallback((id: number) => {
    onOpen()
    onSelectUser({ id, users, onOpen })
  }, [users, onSelectUser, onOpen]);

  const { loginUser } = useLoginUser();
  return (
    <>
      <Header></Header>
      {loading ? (<Center h="100vh"><Spinner /></Center>) : (<Wrap p={{ base: 4, md: 10 }}>
        {users.map((user) => (
          <WrapItem key={user.id} mx="auto">
            <UserCard imageUrl="https://source.unsplash.com/random" id={user.id} userName={user.username} fullName={user.name} onClick={onClickUser}></UserCard>
          </WrapItem>
        ))}
      </Wrap>)}
      <UserDatailModal  user={selectedUser} isOpen={isOpen} onClose={onClose} isAdmin={loginUser?.isAdmin}></UserDatailModal>
    </>
  )
});