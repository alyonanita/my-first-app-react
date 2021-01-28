import React,{useState} from 'react'

function  AllSum (props) {
    const [inputSum, setInputSum] = useState('');
    const [inputSumshow, setinputSumshow] = useState(false);
     const handleInputChange = (e) => {
        const {value } = e.target;
        setInputSum(value);
        setinputSumshow(true);
    };
return(
    <div style={{display: props.showInfo ? "block" : "none" }}>
                    <input
                        name="salary"
                        placeholder="Enter salary"
                        value={inputSum}
                        onChange={e => handleInputChange(e, 0)}
                    />
                    <label style={{ marginLeft: 10 }}>₽</label>
                    <div style={{ marginTop: 20, display: inputSumshow ? "block" : "none" }}>
                        <div style={{ display: props.isChecked ? "block" : "none" }} className="nondfl">
                            {inputSum} ₽ сотрудник будет получать на руки
                    </div>
                        <div style={{ display: props.isChecked ? "none" : "block" }} className="ndfl">
                            {inputSum * 0.87} ₽ сотрудник будет получать на руки
                         </div>
                        <div style={{ display: props.isChecked ? "block" : "none" }} className="nondfl">
                            {inputSum * 1.15 * 0.13} ₽ НДФЛ,13 % от оклада
                                </div>
                        <div style={{ display: props.isChecked ? "block" : "none" }} className="nondfl">
                            {inputSum * 1.1495} ₽ за сотрудника в месяц
                                </div>
                        <div style={{ display: props.isChecked ? "none" : "block" }} className="ndfl" >
                            {inputSum * 0.13} ₽ НДФЛ,13 % от оклада
                    </div>
                        <div style={{ display: props.isChecked ? "none" : "block" }} className="ndfl">
                            {inputSum} ₽ за сотрудника в месяц</div>
                    </div>
                </div>
)
    
}

export default AllSum;