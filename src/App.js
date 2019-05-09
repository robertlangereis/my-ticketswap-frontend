import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import EventDetailsContainer from './components/events/eventDetails/EventDetailsContainer'
import TicketDetailsContainer from './components/eTickets/ticketDetails/TicketDetailsContainer'
import LogoutPage from './components/logout/LogoutPage'
import './App.css'
import TopBar from './components/layout/TopBar'
import Home from './components/events/Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <TopBar />
          </nav>
          <main style={{marginTop:75}}>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/events" component={Home} />
            <Route exact path="/events/:id" component={EventDetailsContainer} />
            <Route exact path="/events/:id/tickets/:ticketid" component={TicketDetailsContainer} />
            <Route exact path="/" render={ () => <Redirect to="/events" /> } />
          </main>
        </div>
      </Router>
    )
  }
}
export default App
