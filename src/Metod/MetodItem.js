import React from 'react'
import PropTypes from "prop-types";

function MetodItem({ metod, onChange }) {
    const styles = {
        input: {
            marginRight: '1rem'
        }
    }

    const classes = []

    if (metod.completed) {
        classes.push('done')
    }

    return (
        <div>
            <input
                type="radio"
                value={metod.title}
                id={metod.id}
                checked={metod.completed}
                style={styles.input}
                onChange={() => onChange(metod.id)}
                name="metod" />
            <label htmlFor={metod.id} >{metod.title}</label>

        </div>
    )

}

MetodItem.protoTypes = {
    metod: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}
export default MetodItem