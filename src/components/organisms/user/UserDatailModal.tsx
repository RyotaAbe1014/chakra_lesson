import { FC, memo } from "react";
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
type Props = {
  user?: User | null;
  isOpen: boolean;
  onClose: () => void;
};


export const UserDatailModal: FC<Props> = memo((props) => {
  const { user, isOpen, onClose } = props;
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
                <Input value={user?.username} isReadOnly></Input>
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value={user?.name} isReadOnly></Input>
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input value={user?.email} isReadOnly></Input>
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value={user?.phone} isReadOnly></Input>
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
});