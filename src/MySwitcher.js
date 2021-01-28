import React from 'react'
import Switch from '@material-ui/core/Switch';

// function MySwitcher(props) {
  

class MySwitcher extends React.Component {
 state = {
   isChecked: true,
 };

//  handleChange = name => event => {
    
//    this.setState({ [name]: event.target.checked });
//  };

  render() {
   return (
     <div>
        Указать с НДФЛ 
       <Switch
         checked={this.state.isChecked}
        //  onChange={this.handleChange('isChecked')}
       onChange={()=>{this.props.getNdfl(this.state.isChecked)}}
         value="isChecked"
       /> без НДФЛ
       {/* <div id="switch">{this.state.isChecked ? (this.props.sum-this.props.sum*0.13)*0.13 : (this.props.sum*0.13)}</div> */}
       
     </div>
   );
 }
}





export default MySwitcher