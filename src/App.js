import TydenNeboPololeti from "./components/TydenNeboPololeti";
import cinnostiPololeti from "./cinnostiPololeti";
import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Buttons = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: left;
  margin: 50px;
`;

const Prepinac = styled.button`
  font-size: 20px;
  margin: 20px;
  padding: 15px;
  border: 2px solid rgb(126, 197, 194);
  border-radius: 5px;
  text-transform: uppercase;
  background: ${(props) => (props.theme.week ? "rgb(126, 197, 194)" : "white")};
  &:hover {
    border: 2px solid black;
  }
`;

const PrepinacPololeti = styled(Prepinac)`
  background: ${(props) => (props.theme.week ? "white" : "rgb(126, 197, 194)")};
`;

const Nadpis = styled.h1`
  color: ${(props) => props.theme.color};
  margin: 50px;
  margin-top: 0;
  padding-top: 50px;
  text-decoration: underline;
`;

function App() {
  const [background, setBackground] = useState({ backgroundColor: "white" });
  const dispatch = useDispatch();
  const week = useSelector((state) => state.meta.week);

  return (
    <div style={background} data-testid="background">
      <ThemeProvider
        theme={{
          color: "indigo",
          week,
        }}
      >
        <Nadpis>Rodinný úklid aneb Kdo uteče, vyhraje</Nadpis>
        <Buttons>
          <Prepinac onClick={() => dispatch({ type: "SWITCH" })}>
            Týdenní úklid
          </Prepinac>
          <PrepinacPololeti onClick={() => dispatch({ type: "SWITCH" })}>
            Jarní úklid
          </PrepinacPololeti>
        </Buttons>
        <TydenNeboPololeti />
      </ThemeProvider>
    </div>
  );
}

export default App;
