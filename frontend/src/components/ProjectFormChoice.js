import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form,
         FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { postNewProject } from '../actions/postNewProject-action';
import TJMForm from './TJMForm';
import ForfaitForm from './ForfaitForm';

class ProjectFormChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      type: ""
    };
    this.baseState = this.state;
  }

  toggle = () => {
    this.setState(this.baseState)
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
    <div>
      <Button color="danger" onClick={this.toggle}>+</Button>
        <Modal isOpen={this.state.modal} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Project</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup tag="fieldset">
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="type" value="TJM" onChange={this.handleChange}/>{' '}
                        TJM
                      </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="type" value="Mission" onChange={this.handleChange}/>{' '}
                        Mission
                    </Label>
                  </FormGroup>
                </FormGroup>
                  {this.state.type === "TJM" ? <TJMForm parentToggle={this.toggle}/> : ""} 
                  {this.state.type === "Mission" ? <ForfaitForm parentToggle={this.toggle}/>: ""}
              </Form>
            </ModalBody>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        projectList : state.projectListStore.projectList,
    }
  }
  
export default connect(mapStateToProps,{postNewProject})(ProjectFormChoice);