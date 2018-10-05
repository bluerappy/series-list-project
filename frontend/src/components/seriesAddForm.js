import React from "react";
import { postNewSeries } from '../actions/postNewSeries-action';
import { connect } from 'react-redux';

class SeriesAddForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { title:"",
                     genre:"",
                     year:""};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
      console.log("plop",this.state)
      this.props.postNewSeries(this.state)
      //  event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input name="title" type="text" onChange={this.handleChange} />
          </label>     
          <label>
            Genre:
            <input name="genre" type="text" onChange={this.handleChange} />
          </label>  
          <label>
            Year:
            <input name="year" type="text" onChange={this.handleChange} />
          </label>      
          <input type="submit" value="Submit"/>
        </form>
      );
    }
  }

  //SERIES LIST ARRAY AVAILABLE IN PROPS
function mapStateToProps(state) {
  return {
      seriesListStore : state.seriesListStore.seriesList,
  }
}


  export default connect(mapStateToProps,{postNewSeries})(SeriesAddForm);