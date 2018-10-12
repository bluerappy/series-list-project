import React from 'react';
import { Button, ModalFooter, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { postNewProject } from '../actions/postNewProject-action';
import { alert } from '../actions/Alert-action'

class TJMForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type : "TJM",
      client : "",
      dev : "",
      TJM : "",
      location: "",
      start_date : "",
      end_date : "",
      comment : "",
      alert : true
    };
    this.handleChange = this.handleChange.bind(this);
    this._postNewProject = this._postNewProject.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  _postNewProject() {
    this.props.postNewProject(this.state); //Send state data to back
    this.props.parentToggle(); //Call toggle function from parent
    this.props.alert(this.state.alert);
  }

  render() {
    const {type, client , dev, TJM, location, start_date, end_date, } = this.state;
    const isValid = type && client && dev && TJM && location && start_date && end_date;
    return (
          <div>
                <FormGroup>
                  <Label>Client</Label>
                    <Input type="text" name="client" onChange={this.handleChange} placeholder="ex : Digin" valid={this.state.client ? true : false}/>
                </FormGroup>
                <FormGroup>
                  <Label>Location</Label>
                    <Input  type="text" name="location" onChange={this.handleChange} placeholder="ex : Bordeaux" valid={this.state.location ? true : false}/>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelectMulti">Developers</Label>
                    <Input type="select" name="dev" onChange={this.handleChange} multiple valid={this.state.dev ? true : false}>
                      <option>Nicolas B.</option>
                      <option>Vincent C.</option>
                      <option>Matthieu B.</option>
                      <option>David L.</option>
                      <option>Jean-Paul R.</option>
                      </Input>
                </FormGroup>
                <FormGroup>
                  <Label>TJM</Label>
                    <Input type="number" name="TJM" onChange={this.handleChange} placeholder="ex : 250€" valid={this.state.TJM ? true : false} />
                </FormGroup>
                <FormGroup>
                  <Label>Start Date</Label>
                    <Input type="date" name="start_date" onChange={this.handleChange} valid={this.state.start_date ? true : false} />
                </FormGroup>
                <FormGroup>
                  <Label>End Date</Label>
                    <Input type="date" name="end_date"onChange={this.handleChange}valid={this.state.end_date ? true : false} />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Comments</Label>
                    <Input type="textarea" name="comment" onChange={this.handleChange} placeholder="Facultatif" />
                </FormGroup>
                <FormGroup>
                    {!isValid ? <FormText color="danger">
                      Veuillez remplir tout les champs du formulaire
                        </FormText>
                          : <FormText color="muted">
                              Cliquer sur Valider pour confirmer votre saisie
                                </FormText> 
                    } 
                </FormGroup>
                  <ModalFooter>
                    <Button color={!isValid ? "danger" : "primary"} disabled={!isValid} onClick={this._postNewProject}>Validate</Button>{' '}
                    <Button color="secondary" onClick={this.props.parentToggle}>Cancel</Button>
                  </ModalFooter>
          </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        projectList : state.projectListStore.projectList,
        
    }
  }
  
export default connect(mapStateToProps,{postNewProject, alert})(TJMForm);