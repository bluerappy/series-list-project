import React from 'react';

import { connect } from 'react-redux';
import { getProjectList } from '../actions/getProjectList-action';
import ProjectDetailsModal from './ProjectDetailsModal'

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      datas : {},
    };
 }

 componentDidMount() {
    this.props.getProjectList()
 }

 showModal = (data) => {
    this.setState({modal : true, datas : data})
 }

 toggle = () => {
     this.setState({modal : false})
 }

 projectMap = () => {
    const data = this.props.projectListStore;
    return data.map((data, id) => {
        return (
            <div style={{border : (data.type === "TJM") ? "1px solid blue" : "1px solid red", margin:'10px 0'}} key={id} 
                onClick={(data.type==='TJM')?()=>this.showModal(data): null}>
                <span>{data._id}</span>
            </div>
        )
    })  
 }

  render() {
    return (
        <div>
          {this.projectMap()}
          <ProjectDetailsModal isOpen={this.state.modal} datas={this.state.datas} toggle={() => this.toggle()}/>
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        projectListStore : state.getProjectListStore,
    }
  }

  export default connect(mapStateToProps,{getProjectList})(ProjectDetails);