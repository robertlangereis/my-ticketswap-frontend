import React from 'react'
import {connect} from 'react-redux'
import AdDetails from './AdDetails'
import {loadEvent, deleteEvent} from '../../actions/events'

class AdDetailsContainer extends React.Component {
  state = {
    formValues: {
      name: '',
      description: '',
      image_url: '',
      start_date: '',
      start_date: ''
    }
  }
  
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  onDelete = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }
  
  render() {
    return (<div><AdDetails
      onDelete={this.onDelete}
      event={this.props.event}
      values={this.state}
    /><br></br>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  event: state.event,
  events: state.events
})

export default connect(mapStateToProps, {loadEvent, deleteEvent})(AdDetailsContainer)