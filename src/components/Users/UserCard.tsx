import React, { useState } from "react";
import {Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import InputName from "../../components/input/InputName";
import InputEmail from "../../components/input/InputEmail";
import User from "../../interface/Users";
import { MdDelete, MdEdit } from "react-icons/md"; 

interface Props {
  user: User;
  onDeleteUser: (userId: string) => void;
  onUpdateUser: (updatedUser: User) => void;
}

const UserCard: React.FC<Props> = ({ user, onDeleteUser, onUpdateUser }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [updatedUser, setUpdatedUser] = useState<User>({
    userId: user.userId,
    name: user.name,
    username: user.username,
    email: user.email,
    password: user.password,
  });

  const openUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  const handleDelete = () => {
    onDeleteUser(user.userId);
  };

  const handleUpdate = () => {
    onUpdateUser(updatedUser);
    closeUpdateModal();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative w-[30%] ml-2 h-1/4 p-4 mb-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{user.name}</h2>
      </div>
      <p className="text-gray-600">Username: {user.username}</p>
      <p className="text-gray-600">Email: {user.email}</p>

      <Modal isOpen={isUpdateModalOpen} onClose={closeUpdateModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputName
              name="name"
              defValue={updatedUser.name}
              placeholder="Name"
              inputClassName="w-full"
              onChangeHandler={handleChange}
            />
            <InputName
              name="username"
              defValue={updatedUser.username}
              placeholder="Username"
              inputClassName="w-full"
              onChangeHandler={handleChange}
            />
            <InputEmail
              name="email"
              defValue={updatedUser.email}
              placeholder="Email"
              inputClassName="w-full"
              onChangeHandler={handleChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeUpdateModal}>
              Close
            </Button>
            <Button variant="ghost" onClick={handleUpdate}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <MdDelete
        className="absolute bottom-4 right-4 cursor-pointer text-red-500"
        size={24}
        onClick={handleDelete}
      />

      <MdEdit
        className="absolute bottom-4 right-12 cursor-pointer text-blue-500"
        size={24}
        onClick={openUpdateModal}
      />
    </div>
  );
};

export default UserCard;




