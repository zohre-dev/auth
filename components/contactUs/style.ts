"use client";

import styled from "styled-components";
export const ContactWarraper = styled.section`
  background-color: #cdc8cc;
  padding-top: 47px;
  padding-bottom: 55px;
  display: flex;
  gap: 154px;
  justify-content: center;
  .right {
    color: #ffffff;
  }
  .title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 33px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  .inputs {
    background-color: #e7e7e7;
    border-radius: 10px;
    outline: none;
    width: 608px;
    color: #cdc8cc;
    padding: 10px;
    font-family: "YekanBakh bold";
    border: none;
  }

  .message {
    min-height: 250px;
  }
  .sendBtn {
    background-color: #040404;
    border: none;
    color: #ffffff;
    padding: 8px;
    border-radius: 3px;
    cursor: pointer;
  }
  .left > img {
    width: 300px;
    height: 550px;
  }
`;
