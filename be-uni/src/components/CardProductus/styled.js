import styled from "styled-components";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";

export const CardContainer = styled(Card)`
  width: 250px;
  margin: 10px;
`;

export const ProductCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap:8px;
  justify-content: space-between;
  height: 40px;
`;
