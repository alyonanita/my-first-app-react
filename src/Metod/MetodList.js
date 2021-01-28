import React, { useState } from 'react'
import PropTypes from "prop-types";
import MetodItem from "./MetodItem";
import MetodItem2 from "./MetodItemIcon";
import Switch from '@material-ui/core/Switch';
import AllSum from '../AllSum'

function MetodList(props) {
    const [isChecked, setNdfl] = useState(true);


    function handleChange(e) {
        setNdfl(!isChecked)
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
                    onChange={e => handleChange(e)}
                    value="isChecked"
                /> без НДФЛ
            </div>
            {(props.showInput === 'salarymonth') ?
                <AllSum showInfo={props.showInfo} isChecked={isChecked} /> :
                (props.showInput === 'salaryday') ?
                    <div><input />₽ в день</div> :
                    (props.showInput === 'salarytime') ? <div><input />₽ в час</div> : <div />}
        </div>
    )
}
MetodList.propTypes = {
    metods: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
    inputSum: PropTypes.number
}
export default MetodList



