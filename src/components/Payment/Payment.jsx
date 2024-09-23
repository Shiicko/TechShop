import { useState } from "react";
import * as s from "./PaymentStyled";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const total = location.state?.total || 0;
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cvv, setCvv] = useState("");
  const [dni, setDni] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [address, setAddress] = useState("");
  const [installments, setInstallments] = useState(1);
  const [successMessage, setSuccessMessage] = useState(null);
  const [trackingId, setTrackingId] = useState(null);

  const installmentAmount = (total / installments).toFixed(2);

  const handleFinalize = (e) => {
    e.preventDefault();
    const generatedTrackingId = Math.floor(Math.random() * 1000000);
    setTrackingId(generatedTrackingId);
    setSuccessMessage(
      `Compra finalizada con éxito. ID de seguimiento: ${generatedTrackingId}`
    );
  };

  return (
    <s.PaymentContainer>
      <s.FormCard>
        <h1>¡Completa tu compra!</h1>
        <form onSubmit={handleFinalize}>
          <label>
            Número de tarjeta:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </label>
          <label>
            Nombre del titular:
            <input
              type="text"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
              required
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </label>
          <label>
            DNI:
            <input
              type="text"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              required
            />
          </label>
          <label>
            Nombre del receptor:
            <input
              type="text"
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
              required
            />
          </label>
          <label>
            Dirección:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <label>
            Cuotas:
            <select
              value={installments}
              onChange={(e) => setInstallments(e.target.value)}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </label>
          <p>Cuota mensual: ${installmentAmount}</p>
          <button type="submit">Finalizar compra</button>
        </form>
        {successMessage && (
          <s.SuccessMessage>{successMessage}</s.SuccessMessage>
        )}
      </s.FormCard>
    </s.PaymentContainer>
  );
};

export default Payment;
