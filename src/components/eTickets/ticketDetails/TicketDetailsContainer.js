import React from 'react'
import {connect} from 'react-redux'
import TicketDetails from './TicketDetails'
import {getTicket} from '../../../actions/tickets'
import {getEvent} from '../../../actions/events'

class TicketDetailsContainer extends React.Component {
  state = {
    formValues: {
      name: '',
      description: '',
      image_url: '',
      start_date: '',
      end_date: ''
    }
  }
  
  componentDidMount() {
    this.props.getTicket(this.props.match.params.id)
    this.props.getEvent(this.props.match.params.id)
    // if (this.props.event === null) this.props.getTicket(this.props.match.params.id)
    // this.props.getTicket(this.props.match.params.id)
    // const getTicket = this.props.getTicket(this.props.match.params.id)
    // console.log("this.props.match.params.id bij TicketDetailsCont",this.props.match.params.id)
    // console.log(this.props.getTicket(1))
  }

  onDelete = () => {
    // this.props.deleteTicket(this.props.event.id)
    this.props.history.push('/')
  }
  
  render() {
    // console.log("this.props in render is:", this.props.event)
    return (<div><TicketDetails
      onDelete={this.onDelete}
      ticket={this.props.ticket}
      event={this.props.event}
      // values={this.state}
    /><br></br>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  event: state.event,
  ticket: state.eventticket
  // events: state.events,
  // tickets: state.tickets
  // authenticated: state.currentUser !== null,
  // userId: state.currentUser && userId(state.currentUser.jwt),
  // users: state.users
})


// const mapDispatchToProps = {
//   getTicket
// }

export default connect(mapStateToProps, {getEvent, getTicket})(TicketDetailsContainer)