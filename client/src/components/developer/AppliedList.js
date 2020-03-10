// AppliedList = ListItem

import React from "react";
import data from "../../data"

class AppliedList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectedJob: {}
    }
  }

  updateData(id){
    const selected = data.filter( item => item.id === parseInt(id) );
    this.setState({ selectedItem: selected[0] })
  }

  componentDidMount(){
    const { id } = this.props.match.params
    this.updateData(id)
  }

  componentWillReceiveProps(newProps){
    const { id } = newProps.match.params
    this.updateData(id)
  }

  render(){
    return (
      <>
        <div className="applied-list">
          <p>
            <strong>Name: </strong><br/>
            {this.state.selectedJob.name}
          </p>

          <p>
            <strong>Description: </strong><br/>
            {this.state.selectedJob.description}
          </p>

          <p>
            <strong>Cost: </strong><br/>
            {this.state.selectedJob.cost}
          </p>
        </div>
      </>
    )
  }
}

export default AppliedList