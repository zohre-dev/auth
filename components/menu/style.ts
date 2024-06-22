"use client";
import styled from "styled-components";

export const Nav = styled.div`
  color: #ffffff;
  padding: 29px 94px 0px 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .menu {
    display: flex;
    align-items: center;
    gap: 35px;
  }
  .menuLink {
    font-family: "YekanBakh Bold";
    text-decoration: none;
    color: inherit;
  }
  .signUp {
    padding: 10px;
    background-color: #d4b170;
    border-radius: 10px;
  }
  .signIn {
    border-radius: 10px;
    padding: 10px;
    border-color: #d9d9d9;
    background-color: #b4ad9d;
  }
  .logo {
    height: 48px;
    width: 48px;
    background-image: url("assets/images/logo.png");
    border-radius: 10px;
    cursor: pointer;
  }
`;
