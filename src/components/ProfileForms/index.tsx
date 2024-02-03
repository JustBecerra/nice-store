import { Avatar, Box } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { ProfileInfo } from "../ProfileInfo";
import { ProfileInputs } from "../ProfileInputs";

export const ProfileForms = () => {
  const { data: session } = useSession();
  const [selectedImage, setSelectedImage] = useState("");
  const [update, setUpdate] = useState(session ? false : true);

  const handleLogOut = () => {
    signOut({ callbackUrl: "http://localhost:3000" });
    redirect("/authentication");
  };

  // const handleInputChange = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  //   setInput: React.Dispatch<React.SetStateAction<string>>
  // ) => {
  //   setInput(event.target.value);
  // };
  console.log({ session });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
        my: "auto",
      }}
    >
      <Avatar
        src={selectedImage ? selectedImage : (session!.user?.image as string)}
        sx={{ borderRadius: "0.75rem", height: "6rem", width: "6rem" }}
      />

      {!session || !update ? (
        <ProfileInfo handleLogOut={handleLogOut} setUpdate={setUpdate} />
      ) : (
        <ProfileInputs
          handleLogOut={handleLogOut}
          setSelectedImage={setSelectedImage}
        />
      )}
    </Box>
  );
};
