import React from "react";
import routes from "./routes";
import { HashRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import theme from '../theme';



export default function() {
  return (
    <MuiThemeProvider theme={theme.default}>
      <Router>
        {routes.map(i => (
          <Route key={i.path} path={i.path} component={i.component} exact />
        ))}
      </Router>
    </MuiThemeProvider>
  );
}
