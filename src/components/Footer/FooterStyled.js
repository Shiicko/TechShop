import styled from "styled-components";

export const ServiciosWrapper = styled.section`
  padding: 40px 20px;
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
  font-weight: 700;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
`;

export const Card = styled.div`
  background-color: #121212;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(255, 102, 0, 0.2);
  padding: 30px 25px;
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 30px rgba(255, 102, 0, 0.35);
  }
`;

export const Icon = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
  filter: drop-shadow(0 0 2px #ff6600);
`;

export const CardTitle = styled.h3`
  font-size: 1.6rem;
  color: #ff6600;
  margin-bottom: 12px;
  font-weight: 600;
`;

export const CardText = styled.p`
  font-size: 1rem;
  color: #ddd;
  line-height: 1.6;
  text-align: center;
`;

export const Footer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 40px 20px 20px;
  margin-top: 60px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 35px;
  max-width: 900px;
  margin: 0 auto;
`;

export const FooterDescription = styled.div`
  max-width: 650px;
  font-size: 1.1rem;
  color: #bbb;
  line-height: 1.5;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  a {
    color: #ff6600;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: #ff4500;
      text-decoration: underline;
    }
  }
`;

export const Divider = styled.hr`
  width: 90%;
  border: 1px solid #222;
  margin: 30px auto;
`;

export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  p {
    font-size: 1.1rem;
    color: #fff;
    font-weight: 500;
  }
`;

export const Input = styled.input`
  padding: 12px 15px;
  border: 2px solid #ff6600;
  border-radius: 8px;
  width: 280px;
  text-align: center;
  font-size: 1rem;
  background-color: #121212;
  color: #fff;

  &::placeholder {
    color: #ffb380;
  }
`;

export const Button = styled.button`
  background-color: #ff6600;
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e65500;
  }
`;

export const FooterBottom = styled.div`
  margin-top: 40px;
  font-size: 0.9rem;
  color: #777;
  text-align: center;
`;
