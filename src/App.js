import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Join from "./pages/join/join";
import Feed from "./pages/feed/feed";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/feed">
              <Feed/>
            </Route>
            <Route path="/">
              <Join />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
