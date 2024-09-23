/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import * as s from "./SideBarstyled";
import { removeFromCart } from "../../redux/CarritoSlices/cartSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const SideBar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const itemsInCart = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
    toast.error("Producto eliminado del carrito");
  };

  const subtotal = itemsInCart.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );

  const total = subtotal;

  const handleFinalizePurchase = () => {
    navigate("/payment", { state: { total } });
    onClose();
  };

  return (
    <s.SidebarContainer isOpen={isOpen}>
      <s.CardsWrapper>
        {itemsInCart.length > 0 ? (
          <>
            {itemsInCart.map((item) => (
              <s.SidebarItem key={item.id}>
                <img src={item.img} alt="" />
                <s.Label isOpen={isOpen}>
                  {item.nombre} (x{item.quantity})
                </s.Label>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Eliminar
                </button>
              </s.SidebarItem>
            ))}
            <s.Footer>
              <s.TotalContainer>
                <s.Subtotal>Subtotal: ${subtotal.toFixed(2)}</s.Subtotal>
                <s.Total>Total: ${total.toFixed(2)}</s.Total>
              </s.TotalContainer>
              <s.CheckoutButton onClick={handleFinalizePurchase}>
                Finalizar compra
              </s.CheckoutButton>
            </s.Footer>
          </>
        ) : (
          <p>El carrito está vacío.</p>
        )}
      </s.CardsWrapper>
    </s.SidebarContainer>
  );
};
