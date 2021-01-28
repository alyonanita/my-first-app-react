import React, { useState } from 'react'
import PropTypes from "prop-types";
import MetodItem from "./MetodItem";
import MetodItem2 from "./MetodItemIcon";
import Switch from '@material-ui/core/Switch';

function MetodList(props) {
    const [isChecked, setNdfl] = useState(true);
    const [inputSum, setInputSum] = useState('');
    const [inputSumshow, setinputSumshow] = useState(false);

    function handleChange(e) {
        setNdfl(!isChecked)
    };
    const handleInputChange = (e) => {
        const {value } = e.target;
        setInputSum(value);
        setinputSumshow(true);
    };
    return (
        <div>
            {props.metods.map((metod, index) => {
                if (metod.id === 2) {
                    return (
                        <MetodItem2 metod={metod}
                            key={metod.id}
                            index={index}
                            onChange={props.onToggle}
                        />

                    )

                } else {
                    return (
                        <MetodItem metod={metod}
                            key={metod.id}
                            index={index}
                            onChange={props.onToggle}
                        />
                    )
                }
            })}
            <div>Указать с НДФЛ
                <Switch
                    checked={isChecked}
                    //  onChange={this.handleChange('isChecked')}
                    onChange={e => handleChange(e)}
                    value="isChecked"
                /> без НДФЛ
            <div style={{ display: props.showInfo ? "block" : "none" }}>
                    <input
                        name="salary"
                        placeholder="Enter salary"
                        value={inputSum}
                        onChange={e => handleInputChange(e, 0)}
                    />
                    <label style={{ marginLeft: 10 }}>₽</label>
                    <div style={{ marginTop: 20, display: inputSumshow ? "block" : "none" }}>
                        <div style={{ display: isChecked ? "block" : "none" }} class="nondfl">
                            {inputSum} ₽ сотрудник будет получать на руки
                    </div>
                        <div style={{ display: isChecked ? "none" : "block" }} class="ndfl">
                            {inputSum * 0.87} ₽ сотрудник будет получать на руки
                         </div>
                        <div style={{ display: isChecked ? "block" : "none" }} class="nondfl">
                            {inputSum * 1.15 * 0.13} ₽ НДФЛ,13 % от оклада
                                </div>
                        <div style={{ display: isChecked ? "block" : "none" }} class="nondfl">
                            {inputSum * 1.1495} ₽ за сотрудника в месяц
                                </div>
                        <div style={{ display: isChecked ? "none" : "block" }} class="ndfl" >
                            {inputSum * 0.13} ₽ НДФЛ,13 % от оклада
                    </div>
                        <div style={{ display: isChecked ? "none" : "block" }} class="ndfl">
                            {inputSum} ₽ за сотрудника в месяц</div>
                    </div>
                </div>

            </div>

        </div>
    )
}
MetodList.propTypes = {
    metods: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
    inputSum: PropTypes.number
}
export default MetodList



