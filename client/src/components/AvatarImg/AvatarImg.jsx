import React from "react";
// import { Avatar } from "@nextui-org/react";

// export default function AvatarImg() {
//   const { user } = useAuth();

//   return (
//     <div className="flex gap-4 items-center">
//       <div>
//         <h1 className="font-bold">{user?.displayName}</h1>
//         <h1>{user?.email}</h1>
//       </div>
//       <div>
//         <Avatar radius="lg" color="default" src={user?.photoURL} />
//       </div>
//     </div>
//   );
// }

// import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Avatar,
  User,
} from "@nextui-org/react";
import ModalLogSig from "../ModalLogSig/ModalLogSig";
import { useAuth } from "../../context/AuthContext";

export default function AvatarImg() {
  const { user } = useAuth();
  const imgProfile = user?.photoURL;

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: imgProfile,
            }}
            className="transition-transform"
            description={user?.email}
            name={user?.displayName}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Hola 🐾</p>
            <p className="font-bold">{user?.displayName}</p>
          </DropdownItem>
          {/* <DropdownItem key="settings">My Settings</DropdownItem> */}
          {/* <DropdownItem key="team_settings">Team Settings</DropdownItem> */}
          <DropdownItem key="analytics">OTROS 1</DropdownItem>
          <DropdownItem key="system">OTROS 2</DropdownItem>
          <DropdownItem key="configurations">OTROS 3</DropdownItem>
          <DropdownItem>
            <ModalLogSig />
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
