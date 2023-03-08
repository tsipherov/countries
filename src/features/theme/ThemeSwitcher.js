import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setTheme } from "./themeSlice";

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const themeToggle = () =>
    dispatch(setTheme(theme === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  });

  return (
    <ModeSwitcher onClick={themeToggle}>
      {theme === "light" ? (
        <IoMoonOutline size="14px" />
      ) : (
        <IoMoon size="14px" />
      )}{" "}
      <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
    </ModeSwitcher>
  );
};

export default ThemeSwitcher;
