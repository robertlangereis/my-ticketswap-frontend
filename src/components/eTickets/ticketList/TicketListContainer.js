import React from 'react'
import {connect} from 'react-redux'
import TicketList from './TicketList'
import {getUsers} from '../../../actions/users'

class TicketListContainer extends React.Component {
 
componentDidMount() {
}

  render() {
    if (this.props){
    return<div> 
      <TicketList event={this.props.event}/> 
      </div>}
    else return 'Loading tickets...'
}
    
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, {getUsers})(TicketListContainer)