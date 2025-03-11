import styled from "styled-components";
import { BtnSave } from "../../index";

export function LoginTemplate() {
  return (
    <Container>
      <div>
        <span> Version 1.0 </span>
        <div>
          <img />
        </div>
        <Titulo> Control Expenses </Titulo>
        <p> 📊💰 Toma el Control de tus Gastos e Ingresos 💳📈 </p>
        <ContainerBtn>
          <BtnSave />
        </ContainerBtn>
      </div>
    </Container>
  );
}

const Container = styled.div``;

const Titulo = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`;
