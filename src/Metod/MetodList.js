import React, { useState } from 'react'
import PropTypes from "prop-types";
import MetodItem from "./MetodItem";
import MetodItem2 from "./MetodItemIcon";
import MySwitcher from '../MySwitcher';

function MetodList(props) {
    const updateData=value=> {
        this.setState({name:value})        
    }
    const [inputSum, setInputSum] = useState(''); 
    const [inputSumshow,setinputSumshow ] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputSum(value);
        setinputSumshow(true);
      };
    return(
        <div>
            {props.metods.map((metod,index) =>{
                if (metod.id === 2){
                    return( 
                        <MetodItem2 metod={metod}
                        key={metod.id}
                        index={index}
                        onChange={props.onToggle}
                        />
                        
                    )
                    
                }else{
                    return(
                        <MetodItem metod={metod}
                        key={metod.id}
                        index={index}
                        onChange={props.onToggle}
                        />
                    )
                }
            })} 
            <label > <MySwitcher sum={inputSum}/></label>
            <div  style={{ display: props.showInfo ? "block" : "none" }}>
            <input
                    name="salary"
                    placeholder="Enter salary"
                    value={inputSum}
                    onChange={e => handleInputChange(e, 0)}
                  />
                  <label style={{marginLeft:10}}>₽</label>
                  <div style={{ marginTop: 20, display: inputSumshow? "block" : "none" }}>
                      {inputSum} ₽ сотрудник будет получать на руки
                     <div id='ndfl'/>
                </div>
            </div>
        </div>       
    )
}
MetodList.propTypes = {
    metods: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
export default MetodList


    
