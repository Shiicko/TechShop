import styled from "styled-components";

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 40px;
  user-select: none;
  gap: 4rem;
`;

export const CardCategoria = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 150px;
  height: 100%;
  padding: 2rem 0.5rem;
  border-radius: 15px;
  cursor: pointer;
  background-color: #0d0e0e;
  margin: 15px 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
  h2 {
    font-size: 1rem;
    text-align: center;
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }
`;
