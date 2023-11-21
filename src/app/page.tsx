import { ThemeProvider } from "@mui/material";
import { theme } from "../../utils/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>asd</main>
    </ThemeProvider>
  );
}
