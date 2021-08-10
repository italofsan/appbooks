import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Search } from "../pages/Search";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/:bookName/detail' component={Detail} exact />
        <Route path='/search' component={Search} exact />
      </Switch>
    </BrowserRouter>
  );
}
