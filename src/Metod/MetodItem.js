import React, {useContext,useState} from 'react'
import PropTypes from "prop-types";
import Context from "../context";
// import Iconadd from "../Iconadd"




function MetodItem({ metod, index, onChange }) {
// const [showIcon, setIconDisabled] = useState(false);

const styles = {
    input: {
        marginRight: '1rem'
    }
}

 
     const {removeTodo} = useContext(Context)
     const classes = []

     if (metod.completed) {
         classes.push('done')
     }
     if (metod.addinput==="MROT") {
        // setIconDisabled(true)
        }
         
    //  console.log('todo', todo)
    
    return(
        <div>
             <input 
                type="radio" 
                value={metod.title}
                id={metod.id} 
                checked={metod.completed}
                style={styles.input} 
                onChange={()=>onChange(metod.id)}
               //onChange={handleChange} 
               name="metod" />              
             <label for={metod.id} >{metod.title}</label>
           
        </div>
    )
    
}

MetodItem.protoTypes = {
    metod: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}
export default MetodItem