import React from 'react';
import { Alert } from 'reactstrap';

import { connect } from 'react-redux';

class PostAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
 }

  onDismiss = () => {
    this.setState({ visible: false });
  }

  componentWillReceiveProps(nextProps){
      if (nextProps !== this.state.visible) {
        this.setState({ visible: this.props.alert });
      }
      setTimeout(() => {
        this.setState({visible: false});
      }, 2500)  
  }

  render() {

    return (
      <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
        Votre saisie à bien été prise en compte
      </Alert>
    );
  }
}

function mapStateToProps(state) {
    return {
        alert: state.alertStore.alert    
    }
  }

export default connect(mapStateToProps)(PostAlert);