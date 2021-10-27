import "./App.css";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const theme = createTheme({
  palette: {
    primary: {
      light: "#506dce",
      main: "#00439c",
      dark: "#001e6d",
      contrastText: "#fff",
    },
    secondary: {
      light: "#484848",
      main: "#212121",
      dark: "#000",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
