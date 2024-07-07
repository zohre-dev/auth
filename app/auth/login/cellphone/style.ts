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
    padding: 20px 24px 24px 24px;
    border-radius: 15px;
  }
  .formTitle {
    font-family: "YekanBakh bold";
    text-align: center;
  }
  .topBoxTxt {
    margin: 25px 0;
  }
  .registerTxt {
    color: #32cd32;
    font-weight: bold;
    margin-right: 5px;
  }
`;
