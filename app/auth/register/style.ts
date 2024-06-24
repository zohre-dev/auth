"use client";
import styled from "styled-components";

export const RegisterContainer = styled.div`
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
  form {
    margin-top: 16px;
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
`;
