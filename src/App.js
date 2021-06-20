import React from 'react'
//pages
import {Home,Characters,Contact,SingleCharacter} from './pages'
//component
import { Navbar, Footer,Sidebar } from './components'
//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Navbar />
        <Sidebar />
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contactus' component={Contact} />
          <Route path='/characters' exact component={Characters} />
          <Route path='/characters/:id' component={SingleCharacter} />
        </Switch>
      </main>
        <Footer />
    </Router>
  );
}

export default App;
