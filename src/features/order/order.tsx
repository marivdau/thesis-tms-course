import styled from "styled-components";
import { Button } from "@mui/material";
import AttachMoney from '@mui/icons-material/AttachMoney'

export const Order: React.FC = () => {  
  return (
    <OrderDiv>
      <OrderDetailesDiv>
        <SumTotalDiv>
          <SpanOrder>
            Sum total
          </SpanOrder>
          <SpanOrder>
            <AttachMoney />
            22
          </SpanOrder>
        </SumTotalDiv>
        <VatDiv>
          <SpanOrder>
            VAT
          </SpanOrder>
          <SpanOrder>
            <AttachMoney />
            33
          </SpanOrder>
        </VatDiv>
        <TotalDiv>
          <TotalSpan>
            Total:
          </TotalSpan>
          <TotalSpan>
            <AttachMoney fontSize="large" />
            1111
          </TotalSpan>
      </TotalDiv>
    </OrderDetailesDiv>
    <Button variant="contained" fullWidth={true}>          
      Check out
    </Button>
  </OrderDiv>
  )
}

const OrderDiv = styled.div`   
  width: 300px;
  margin-left: 60%;
  padding: 30px;
`;

const OrderDetailesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: stretch;`;

const SumTotalDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SpanOrder = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: var(--text-primary-color);
`;

const VatDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;  
`;

const TotalDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TotalSpan = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: 400;
  line-height: 60px;
  color: var(--text-primary-color);
`;
