import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Map extends React.Component{

    
    render(){

        console.log(this.props);
        return(
            <>
<br/>
{this.props.display_name}
<br/>
{this.props.lat} 
<br/>
{this.props.lon} 
<br/>
 
 
{
this.props.showMap &&
 <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.4c3005b1826605a4f7ba622e6e59cb39&center=${this.props.lat},${this.props.lon}
` } alt='map image'/>

  }

{
  this.props.displayErr && this.props.errMsg

}
            </>
        )
    }
}

export default Map;