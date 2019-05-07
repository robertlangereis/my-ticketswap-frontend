// import React from 'react'
// import {connect} from 'react-redux'
// import TicketDetails from './TicketDetails'
// import {getTicket} from '../../actions/tickets'

// class TicketDetailsContainer extends React.Component {
//   state = {
//     formValues: {
//       name: '',
//       description: '',
//       image_url: '',
//       start_date: '',
//       end_date: ''
//     }
//   }
  
//   componentDidMount() {
//     // if (this.props.event === null) this.props.getTicket(this.props.match.params.id)
//     this.props.getTicket(this.props.match.params.id)
//     // const getTicket = this.props.getTicket(this.props.match.params.id)
//     // console.log("this.props.match.params.id bij TicketDetailsCont",this.props.match.params.id)
//     // console.log(this.props.getTicket(1))
//   }

//   onDelete = () => {
//     // this.props.deleteTicket(this.props.event.id)
//     this.props.history.push('/')
//   }
  
//   render() {
//     console.log("this.props in render is:", this.props.events)
//     // return (<div><TicketDetails
//       // onDelete={this.onDelete}
//       // tickets={this.props.tickets}
//     //   // values={this.state}
//     // /><br></br>
//     // </div>
//     // )
//   }
// }

// const mapStateToProps = state => ({
//   event: state.event,
//   events: state.events,
//   tickets: state.tickets
// })

// export default connect(mapStateToProps, {getTicket})(TicketDetailsContainer)