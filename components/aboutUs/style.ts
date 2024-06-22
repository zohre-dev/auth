"use client";

import styled from "styled-components";
export const ProductWarraper = styled.section`
  padding: 100px;
  display: flex;
  justify-content: space-between;
  gap: 52px;
  .aboutTitle {
    display: inline-block;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 42px;
  }
  .description {
    text-align: justify;
  }
  .productConatiner {
    display: flex;
    justify-content: space-between;
    gap: 41px;
  }
  .img {
    width: 232px;
    height: 333px;
    margin-bottom: 41px;
  }
  .title {
    text-align: center;
    margin-bottom: 15px;
    font-weight: bold;
  }
  .price {
    text-align: center;
    font-weight: bold;
  }
`;
