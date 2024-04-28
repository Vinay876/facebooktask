import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Button } from "@chakra-ui/react";
import CreateUserPopup from "../components/Users/CreateUserPopup";
// import CreateUserPopup from "../components/dashboard/panel-user/CreateuserPopup";
import User from "../interface/Users";
import UserCard from "../components/Users/UserCard"; // assuming you have a UserCard component

const Users: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const createUser = (user: User) => {
    setUsers([...users, user]);
  };

  const deleteUser = (userId: string) => {
    const updatedUsers = users.filter((user) => user.userId !== userId);
    setUsers(updatedUsers);
  };

  const updateUser = (updatedUser: User) => {
    const updatedUsers = users.map((user) =>
      user.userId === updatedUser.userId ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  return (
    <>
         <h1 className="font-black text-3xl text-start text-black">Users</h1>
    <div
        className="bg-[#002F53] text-white text-[16px] font-[600] leading-[20px] rounded-md mt-4 flex justify-center items-center mb-2 w-fit px-4 py-2 cursor-pointer"
        onClick={openPopup}
      >
        <IoMdAdd className="mr-2 text-[20px] " />
        Create
      </div>
      <CreateUserPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onCreateUser={createUser}
      />
      <div className="flex flex-wrap">

       {users.map((user) => (
         <UserCard
         key={user.userId}
         user={user}
         onDeleteUser={deleteUser}
         onUpdateUser={updateUser}
       />
      ))}
      </div>
    
      </>
  );
}
export default Users;