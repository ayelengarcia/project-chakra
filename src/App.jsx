import { useState } from "react";
import { Container, Flex, Button } from "@chakra-ui/react";
import products from "../products.json";
import ProductsCard from "./components/ProductsCard";
import "./css/App.css";

function App() {
  const [productos, setProductos] = useState([]);

  return (
    <Container maxW="100%">
      <Flex justifyContent="center">
        <Button
          m="5"
          colorScheme="green"
          onClick={() => setProductos(products)}
        >
          Mostrar productos
        </Button>
        <Button m="5" colorScheme="green" onClick={() => setProductos([])}>
          Ocultar productos
        </Button>
      </Flex>
      <Flex flex="1" gap="3" justifyContent="center" flexWrap="wrap">
        {productos.map((producto) => {
          return (
            <ProductsCard
              key={producto.id}
              image={producto.image}
              title={producto.title}
              price={producto.price}
              description={producto.description}
            />
          );
        })}
      </Flex>
    </Container>
  );
}

export default App;
