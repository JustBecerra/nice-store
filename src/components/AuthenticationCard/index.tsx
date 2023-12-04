import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { theme } from "../../../utils/theme";

export const AuthenticationCard = () => {
  const registerStatus = true;
  return (
    <Card
      variant="outlined"
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <CardHeader>
        <Typography
          sx={{ textTransform: "none", color: theme.palette.primary.light }}
        >
          {registerStatus ? "Register" : "Sign In"}
        </Typography>
      </CardHeader>
      <CardContent>
        <TextField label="Email" />
        <TextField label="Password" />
        {registerStatus && <TextField label="Confirm Password" />}
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Button sx={{ width: "auto" }}>
          <Typography sx={{ textTransform: "none" }}>
            {registerStatus ? "Register" : "Sign In"}
          </Typography>
        </Button>
        <Link
          href={{
            pathname: "/authentication",
            query: { name: registerStatus ? "register" : "signin" },
          }}
        >
          <Typography sx={{ textTransform: "none" }}>
            {registerStatus
              ? "Already have an account? Sign in"
              : `Don't have an account? Register`}
          </Typography>
        </Link>
      </CardActions>
    </Card>
  );
};
