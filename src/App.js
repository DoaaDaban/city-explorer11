
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
   display_name:'',
   lat:'',
   lon:'',
   showMap:false,
   displayErr:false,
    }
  }


  getLocationData = async (event)=> {
   event.preventDefault();

   let cityName= event.target.city.value
   console.log(cityName)

   //  https://eu1.locationiq.com/v1/search.php?key=pk.4c3005b1826605a4f7ba622e6e59cb39&q=amman&format=json

   let URL =`https://eu1.locationiq.com/v1/search.php?key=pk.4c3005b1826605a4f7ba622e6e59cb39&q=${cityName}&format=json`

  
   let locResult = await axios.get(URL);
   console.log(locResult.data[0].display_name);

   try{
    this.setState({
      display_name : locResult.data[0].display_name,
      lat : locResult.data[0].lat,
      lon : locResult.data[0].lon,
      showMap : true,
     
    })
  
   }

   catch{
    this.setState({
      displayErr : true,
    })
   }

  }



  render(){
    return (
      <div>
      <h1>
        City Explorer2
      </h1>

<Form onSubmit={this.getLocationData}>
  <Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" visuallyHidden>
        Choose city
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Choose city"
        name='city'
      />
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2" > 
       Expolr!
      </Button>
    </Col>
  </Row>
</Form>


<section>

{this.state.display_name}

 {this.state.lat} 


 {this.state.lon} 

</section>

 
{
this.state.showMap &&
 <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.4c3005b1826605a4f7ba622e6e59cb39&center=${this.state.lat},${this.state.lon}
` } alt={'map image'}/>

  }


{
  this.state.displayErr && 'unable to geocode'
}

      </div>
    )
  }
}

export default App;

