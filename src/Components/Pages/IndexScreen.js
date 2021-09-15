import React from 'react';
import styled from 'styled-components';
import BgImg from '../../Images/bg-home.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Section = styled.section`
  background-image: url(${BgImg});
  height: 500px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Center = styled.div`
  padding-top: 100px;
  align-items: center;
`;

const Title = styled.p`
  font-size: 55px;
  color: #04050a;
  font-weight: 400;
  color: #fff;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(50deg, #82a9f7, #b7d2fa);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;

const span = styled.a`
  color: #fff;
`;

export const IndexScreen = () => {
  return (
    <Section>
      <Center>
        <Title>
          ¡Bienvenido, acá encuentras las tiendas de barrio registradas!
        </Title>
        <Button>
          <Link to='/home'>
            <span>Ingresar código QR de la tienda</span>
            <MdKeyboardArrowRight />
          </Link>
        </Button>
      </Center>
    </Section>
  );
};
