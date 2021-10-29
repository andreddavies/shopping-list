import "./App.css";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Lists from "./Pages/Lists";
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
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/lists" component={Lists} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
