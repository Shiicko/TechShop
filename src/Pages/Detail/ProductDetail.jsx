/* eslint-disable react/prop-types */
import { useState } from "react";
import * as s from "./ProductDetailStyled";

const ProductDetail = ({ producto, onClose }) => {
  const [coupon, setCoupon] = useState("");

  if (!producto) return null;

  const { img, nombre, descripcion, precio } = producto;

  const handleApplyCoupon = () => {
    if (coupon === "DESCUENTO10") {
      alert("¡Cupón aplicado! Obtienes un 10% de descuento.");
    } else {
      alert("Cupón no válido.");
    }
  };

  return (
    <s.DetailContainer>
      <s.CloseButton onClick={onClose}>Cerrar</s.CloseButton>
      <s.Image src={img} alt={nombre} />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <s.Price>${precio.toFixed(2)}</s.Price>

      <p>
        <strong>Detalles del producto:</strong>
      </p>
      <ul>
        <li>Conexión: USB</li>
        <li>Compatibilidad: Windows, macOS, Linux</li>
        <li>Color: Negro/RGB</li>
        <li>Envío gratis en todas las compras.</li>
        <li>
          Aplica el cupón <strong>DESCUENTO10</strong> para un 10% de descuento
          en tu compra.
        </li>
      </ul>

      <s.CouponContainer>
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Ingresa tu cupón"
        />
        <s.ApplyButton onClick={handleApplyCoupon}>Aplicar</s.ApplyButton>
      </s.CouponContainer>
    </s.DetailContainer>
  );
};

export default ProductDetail;
