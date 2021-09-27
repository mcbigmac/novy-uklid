import TydenNeboPololeti from "./components/TydenNeboPololeti";
import styled, { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getWeek, getCurrentWeek } from "./reducers/weekReducer";
import { useEffect } from "react";
import { getCurrentSeason, getSeason } from "./reducers/seasonReducer";

const Buttons = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: left;
  margin: 50px;
  margin-bottom: 0;
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

const NovyTyden = styled(Prepinac)`
  background: lightskyblue;
  margin: 0;
  margin-left: 70px;
`;

const NovePololeti = styled(Prepinac)`
  background: oldlace;
  margin: 0;
  margin-left: 70px;
`;

const Nadpis = styled.h1`
  color: ${(props) => props.theme.color};
  margin: 50px;
  margin-top: 0;
  padding-top: 50px;
  text-decoration: underline;
`;

function App() {
  const dispatch = useDispatch();
  const week = useSelector((state) => state.meta.week);

  useEffect(() => {
    dispatch(getCurrentWeek());
    dispatch(getCurrentSeason());
  }, []);

  const handleClick = (bool) => {
    dispatch({ type: "SWITCH", payload: bool });
    dispatch(bool ? getCurrentWeek() : getCurrentSeason());
  };

  return (
    <ThemeProvider
      theme={{
        color: "indigo",
        week,
      }}
    >
      <Nadpis>Rodinný úklid aneb Kdo uteče, vyhraje</Nadpis>
      <Buttons>
        <Prepinac onClick={() => handleClick(true)}>Týdenní úklid</Prepinac>
        <PrepinacPololeti onClick={() => handleClick(false)}>
          Podzimní úklid
        </PrepinacPololeti>
      </Buttons>
      {week && (
        <NovyTyden
          onClick={() => {
            dispatch(getWeek());
            dispatch({ type: "DONE", payload: false });
          }}
        >
          Nový týden
        </NovyTyden>
      )}
      {/* <NovePololeti
        onClick={() => {
          dispatch(getSeason());
        }}
      >
        Nový jarní úklid
      </NovePololeti> */}

      <TydenNeboPololeti />
    </ThemeProvider>
  );
}

export default App;
