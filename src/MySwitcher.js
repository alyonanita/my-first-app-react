import React from 'react'
import Switch from '@material-ui/core/Switch';


class MySwitcher extends React.Component {
 state = {
   isChecked: true,
   kkk: '5977'
 };

 handleChange = name => event => {
    
   this.setState({ [name]: event.target.checked });
 };

 render() {
   return (
     <div>
Указать с НДФЛ 
       <Switch
         checked={this.state.isChecked}
         onChange={this.handleChange('isChecked')}
         value="isChecked"
       /> без НДФЛ
       <div id="switch">{this.state.isChecked ? this.state.kkk : this.props.sum}</div>
       
     </div>
   );
 }
}



export default MySwitcher;