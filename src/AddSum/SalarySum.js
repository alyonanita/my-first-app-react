import React,{useState} from 'react'





function SalarySum(){

    const [inputSumshow,setinputSumshow ] = useState(false);
    const [inputSum, setInputSum] = useState('');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputSum(value);
        setinputSumshow(true);
      };

    return(
    <div  style={{ display: showInfo ? "block" : "none" }}>
                  <input
                    name="salary"
                    visibility = "hidden"
                    // disabled = {(inputSum==='')?true:false}
                    placeholder="Enter salary"
                    value={inputSum}
                    onChange={e => handleInputChange(e, 0)}
                  />
                  <label style={{marginLeft:10}}>₽</label>
                  <div style={{ marginTop: 20, display: inputSumshow? "block" : "none" }}>{inputSum}p сотрудник будет получать на руки</div>
    </div>
    )}
    export default SalarySum