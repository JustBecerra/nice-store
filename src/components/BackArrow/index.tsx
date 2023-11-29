import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { theme } from "../../../utils/theme";
import { useRouter } from "next/navigation";
export const BackArrow = () => {
  const router = useRouter();
  return (
    <Button sx={{ mt: "0.5rem" }} onClick={() => router.back()}>
      <ArrowBackIcon sx={{ color: `${theme.palette.primary.light}` }} />
    </Button>
  );
};
