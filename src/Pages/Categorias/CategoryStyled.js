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
  background-color: #1e1e2f;
  margin: 15px 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 255, 255, 0.15);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px rgba(0, 255, 255, 0.3);
  }

  h2 {
    font-size: 1rem;
    text-align: center;
    color: #e0f7fa;
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: contain;
    filter: drop-shadow(0 0 6px rgba(0, 255, 255, 0.2));
  }
`;
