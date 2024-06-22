"use client";
import styled from "styled-components";

export const CellFormContainer = styled.div`
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
    margin-top: 16px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .cellphone {
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
  }

  .bottomBoxTxt a {
    color: #778899;
  }
`;
