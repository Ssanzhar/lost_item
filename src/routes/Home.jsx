import styled from "@emotion/styled";
import ChoiceButton from "../components/ChoiceButton";
import { createTheme, Paper, ThemeProvider } from "@mui/material";

function Home() {
  const choices = {
    found: {
      title: "You have found the item",
      path: "/found",
    },
    lost: {
      title: "You have lost the item",
      path: "/lost",
    },
  };

  const Sheet = styled(Paper)(() => ({
    textAlign: "center",
    backgroundColor: "#181818",
    height: "80vh",
    width: "40%",
    borderRadius: 30,
    lineHeight: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid",
    borderColor: "#242424",
  }));

  return (
    <div
      className="App"
      style={{
        display: "flex",
        backgroundColor: "#1F1F1F",
        height: "94.7vh",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Sheet>
        <ChoiceButton title={choices.found.title} path={choices.found.path} />
      </Sheet>
      <Sheet>
        <ChoiceButton title={choices.lost.title} path={choices.lost.path} />
      </Sheet>
    </div>
  );
}

export default Home;
