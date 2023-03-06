import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./Container";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/themeActions";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const themeToggle = () =>
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  });
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={themeToggle}>
            {theme === "light" ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}{" "}
            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
