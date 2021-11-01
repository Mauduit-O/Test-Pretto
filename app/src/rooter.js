import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Homepage from "./pages/Homepage"


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={()=>(
            <div>
              <Homepage/>
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;