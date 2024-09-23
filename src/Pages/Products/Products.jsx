import { Button } from "@mui/material";
import * as s from "./ProductsStyled";
// import products from "./productos.json";
import { toast } from "sonner";
import { addToCart } from "../../redux/CarritoSlices/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Products = () => {
  const { recommended } = useSelector((state) => state.recommended);
  const dispatch = useDispatch();

  const handleAddToCart = (producto) => {
    dispatch(addToCart(producto));
    toast.success("Producto agregado");
  };

  return (
    <s.ProductContainer>
      <s.h2Product>Productos destacados 🔥</s.h2Product>

      <s.CardsContainer>
        {recommended.map((product) => (
          <s.Card key={product.id}>
            <s.ImageWrapper>
              <img src={product.img} alt={product.nombre} />
            </s.ImageWrapper>
            <s.Content>
              <h3>{product.nombre}</h3>
              <p>{product.descripcion}</p>
              <s.Price>${product.precio}</s.Price>
              <s.ButtonsContainer>
                <Button
                  variant="outlined"
                  onClick={() => handleAddToCart(product)}
                >
                  Añadir al carrito
                </Button>
              </s.ButtonsContainer>
            </s.Content>
          </s.Card>
        ))}
      </s.CardsContainer>
    </s.ProductContainer>
  );
};
