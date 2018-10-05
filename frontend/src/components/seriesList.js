import React, {Component} from "react";
import { CardBody, Row, Col } from 'reactstrap';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { getSeriesList } from '../actions/getSeriesList-action';

class SeriesList extends Component {

componentDidMount() {
   console.log("componentdidmount")
    // this.props.postHeroes();
    this.props.getSeriesList();
  }

seriesListMap = () => {
    const seriesList = this.props.seriesListStore;
    return seriesList.map( (seriesList, index) =>{
        return(
            <Row key={index}>
                <Col xs="1">
                    <CardBody>
                    <p>ID : {seriesList._id}</p>
                    <p>TITLE : {seriesList.title}</p>
                    <p>YEAR : {seriesList.year}</p>
                    </CardBody>
                </Col>
            </Row>
        )
    })
}
    render(){
        console.log("SeriesList PROPS",this.props.seriesListStore)
            return(
                <div>
                  <h1>Series List</h1>
                  {this.seriesListMap()}
                </div>
                )
              }
            }

//SERIES LIST ARRAY AVAILABLE IN PROPS
function mapStateToProps(state) {
    return {
        seriesListStore : state.seriesListStore.seriesList,
      }
    }

export default connect(mapStateToProps, { getSeriesList })(SeriesList);