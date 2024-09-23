import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f8f8;
`;

export const FormCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;

  h1 {
    text-align: center;
    color: #333;
  }

  label {
    display: block;
    margin: 10px 0;
    color: #555;
  }

  input,
  select {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #45a049;
    }
  }
`;

export const SuccessMessage = styled.p`
  color: green;
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
`;
