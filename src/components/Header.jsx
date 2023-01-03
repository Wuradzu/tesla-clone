import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars &&
          [...cars].map((car, index) => (
            <A href="#" key={index}>
              {car}
            </A>
          ))}
      </Menu>
      <RightMenu>
        <A href="#">Shop</A>
        <A href="#">Tesla Account</A>
        <CustomMenu
          onClick={(e) => {
            e.preventDefault();
            setIsActive(true);
          }}
        />
      </RightMenu>
      <BurgerNav show={isActive}>
        <CloseWrapper>
          <CloseMenu
            onClick={(e) => {
              e.preventDefault();
              setIsActive(false);
            }}
          />
        </CloseWrapper>
        {cars &&
          [...cars].map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  padding: 0 20px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
`;

const A = styled.a`
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px;
`;

const Menu = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  list-style: none;
  z-index: 10;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CloseMenu = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
