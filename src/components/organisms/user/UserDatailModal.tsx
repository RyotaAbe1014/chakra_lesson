import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { Center, Wrap, WrapItem, Box, Stack, Text } from "@chakra-ui/layout";
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
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
type Props = {
  user?: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};


export const UserDatailModal: FC<Props> = memo((props) => {
  const { user, isOpen, onClose, isAdmin = false } = props;
  const onClickUpdate = () => {
    alert('aa');
  };
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  useEffect(() => {
    setUsername(user?.username ?? '');
    setName(user?.name ?? '');
    setEmail(user?.email ?? '');
    setPhone(user?.phone ?? '');
  }, [user]);

  const onChangeUsername = (e:ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const onChangeName = (e:ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onChangeEmail = (e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePhone = (e:ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);



  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
        <ModalOverlay></ModalOverlay>
        <ModalContent pt={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody m={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value={username} onChange={onChangeUsername} isReadOnly={!isAdmin}></Input>
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value={name}  isReadOnly={!isAdmin} onChange={onChangeName}></Input>
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input value={email} isReadOnly={!isAdmin} onChange={onChangeEmail}></Input>
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value={phone} isReadOnly={!isAdmin} onChange={onChangePhone}></Input>
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  )
});