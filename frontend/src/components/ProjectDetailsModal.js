import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form,
         FormGroup, Label, Input, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { postNewProject } from '../actions/postNewProject-action';

class ProjectDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days_done : "",
      task_comment : "",
      end_date : ""
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    const project = this.props.datas;
      return (
        <div>
            <Modal isOpen={this.props.isOpen}>
              <ModalHeader toggle={this.props.toggle}>{project.client}</ModalHeader>
                <ModalBody>
                  <Form>
                    <FormGroup>
                      <Label>Worked hours</Label>
                        <Input type="number" name="days_done" onChange={this.handleChange} placeholder="ex : 2"/>
                    </FormGroup>
                    <FormGroup>
                      <Label>Task Comment</Label>
                        <Input type="text" name="days_done" onChange={this.handleChange} placeholder="ex : Front end done"/>
                    </FormGroup>
                  </Form>
                  <FormGroup>
                    <Label>Deadline</Label>
                      <Input type="text" name="end_date" onChange={this.handleChange} value={project.end_date}/>
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this._postNewProject}>Update</Button>{' '}
                    <Button color="secondary">Cancel</Button>
                  </ModalFooter>
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
  
export default connect(mapStateToProps,{postNewProject})(ProjectDetailsModal);