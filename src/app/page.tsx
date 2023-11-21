import { Box, ThemeProvider } from "@mui/material";
import { theme } from "../../utils/theme";
import { NavBar } from "@/components/NavBar";
import { Product } from "@/components/Product";

const products = [
  {
    id: 1,
    title: "title1",
    price: 109,
    description: "descriptionasdasd",
  },
  {
    id: 2,
    title: "title2",
    price: 52,
    description: "descriptionasdasd",
  },
  {
    id: 3,
    title: "title3",
    price: 11,
    description: "descriptionasdasd",
  },
  {
    id: 4,
    title: "title4",
    price: 32,
    description: "descriptionasdasd",
  },
];

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <NavBar />
        <Box>
          {products.map((item) => (
            <Product
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </Box>
      </main>
    </ThemeProvider>
  );
}
