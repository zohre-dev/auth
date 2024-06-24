"use client";
import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    background-color: #fff;
    padding: 50px 100px;
  }
  .title {
    font-size: 30px;
  }
  .topBoxTxt {
    margin: 25px 0;
  }
  .registerTxt {
    color: #32cd32;
    font-weight: bold;
    margin-right: 5px;
  }

  form {
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .inputs {
    background-color: #d9d9d9;
    outline: none;
    color: #a4a4a3;
    padding: 10px;
    font-family: "YekanBakh bold";
    border: none;
    width: 448px;
  }
  .submitBtn {
    background-color: #050505;
    color: #fefefe;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
    font-family: "YekanBakh bold";
  }
  .googleAccount {
    width: 448px;
    padding: 8px;
    background-color: #2ecc71;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-weight: bold;
    cursor: pointer;
    font-family: "YekanBakh bold";
  }
  .bottomBoxTxt {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    color: #778899;
  }
  .bottomBoxTxt a {
    color: inherit;
  }
`;
