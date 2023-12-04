import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

export const AuthenticationCard = () => {
  const registerStatus = true;
  return (
    <Card variant="outlined">
      <CardContent>
        <TextField label="Email" />
        <TextField label="Password" />
        {registerStatus && <TextField label="Confirm Password" />}
      </CardContent>
      <CardActions>
        <Button>
          <Typography>{registerStatus ? "Register" : "Login"}</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};
