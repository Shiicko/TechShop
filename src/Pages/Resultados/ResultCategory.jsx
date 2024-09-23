import { useState } from "react"; // Importa useState
import { Button } from "@mui/material";
import * as s from "../Products/ProductsStyled";
import ProductDetail from "../Detail/ProductDetail";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/CarritoSlices/cartSlice";
import { toast } from "sonner";

export const ResultCategory = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = useSelector((state) => state.categories.filteredProducts);
  const dispatch = useDispatch();

  const handleAddToCart = (producto) => {
    dispatch(addToCart(producto));
    toast.success("Producto agregado");
  };

  const handleViewDetails = (producto) => {
    setSelectedProduct(producto);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <s.CardsContainer>
        {products.length > 0 ? (
          products.map((producto) => (
            <s.Card key={producto.id}>
              <s.ImageWrapper>
                {producto.img ? (
                  <img src={producto.img} alt={producto.nombre} />
                ) : (
                  <p>Imagen no disponible</p>
                )}
              </s.ImageWrapper>
              <s.Content>
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                {producto.precio ? (
                  <s.Price>${producto.precio}</s.Price>
                ) : (
                  <s.Price>No disponible</s.Price>
                )}
                <s.ButtonsContainer>
                  <Button
                    color="success"
                    variant="contained"
                    onClick={() => handleViewDetails(producto)}
                  >
                    Ver más
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleAddToCart(producto)}
                  >
                    Añadir al carrito
                  </Button>
                </s.ButtonsContainer>
              </s.Content>
            </s.Card>
          ))
        ) : (
          <p>No se encontraron productos para esta categoría.</p>
        )}
      </s.CardsContainer>

      {selectedProduct && (
        <ProductDetail
          producto={selectedProduct}
          onClose={handleCloseDetails}
        />
      )}
    </>
  );
};
