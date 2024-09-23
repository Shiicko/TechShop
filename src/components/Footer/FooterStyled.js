import styled from "styled-components";

export const ServiciosWrapper = styled.section`
  padding: 20px 10px;
  background-color: #000;
  text-align: center;
  border-radius: 12px;
  max-width: 1200px;
  margin: 40px auto;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 40px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 15px;
`;

export const CardText = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
`;

/* Footer Styles */
export const Footer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px 20px;
  margin-top: 40px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;
`;

export const FooterDescription = styled.div`
  max-width: 600px;
  font-size: 1rem;
  color: #aaa;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6600;
    }
  }
`;

export const Divider = styled.hr`
  width: 80%;
  border: 1px solid #444;
  margin: 20px auto;
`;

export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p {
    font-size: 1rem;
    color: #fff;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 250px;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #ff6600;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4500;
  }
`;

export const FooterBottom = styled.div`
  margin-top: 30px;
  font-size: 0.9rem;
  color: #aaa;
  text-align: center;
`;
