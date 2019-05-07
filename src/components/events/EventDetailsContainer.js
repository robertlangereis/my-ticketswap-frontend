import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {getEvent} from '../../actions/events'

class EventDetailsContainer extends React.Component {
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
    // if (this.props.event === null) this.props.getEvent()
    const getEvent = this.props.getEvent(Number(this.props.match.params.id))
    console.log("this.props in render is:", getEvent)
  }

  onDelete = () => {
    // this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }
  
  render() {
    return (<div><EventDetails
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
  // events: state.events
})

export default connect(mapStateToProps, {getEvent})(EventDetailsContainer)