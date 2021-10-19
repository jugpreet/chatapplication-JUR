
import './App.css';
import {
  BrowserRouter ,
  Switch,
  Route
} from "react-router-dom";
import { renderRoutes } from "./Config/routes";
import { Suspense } from "react";
import { Spin, Space } from 'antd';
function App() {
  
  return (
    <div className="App">
    <Suspense fallback={<Spin size="large" className='spinner' />}>
    <BrowserRouter>
          <Switch>
            {renderRoutes.map(([key, route]) =>
                <Route
                  key={key}
                  exact
                  render={() => <route.component />}
                  path={route.path}
                />
              )}
          </Switch>
        </BrowserRouter>
        </Suspense>
   </div>
  
  );
}

export default App;
