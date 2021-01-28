import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { UncontrolledTooltip } from 'reactstrap';
import Icon from "@material-ui/core/Icon";

const longText =
  "MPOT - минимальный размер оплаты труда.Разный для разных регионов.";
const shortText = longText;
const TooltipContent = ({ scheduleUpdate }) => {
  const [text, setText] = useState(shortText);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(text === shortText ? longText : shortText);
      scheduleUpdate();
    }, 2000);

    return () => clearInterval(intervalId);
  });

  return <>{text}</>;
};

function MetodItem({ metod, index, onChange }) {
  const [iconflag, seticonflag] = useState(true);
  const handleTooltipClose = () => {
    seticonflag(!iconflag);
  };

  const handleTooltipOpen = () => {
    seticonflag(!iconflag);
  };
  const styles = {
    input: {
      marginRight: "1rem",
    },
  };

  const classes = [];

  if (metod.completed) {
    classes.push("done");
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
        name="metod"
      />
      <label for={metod.id}>{metod.title}</label>

      <Icon
        id="ScheduleUpdateTooltip"
        onClick={handleTooltipOpen}
        onClose={handleTooltipClose}
        className="materials-icons"
      >
        {(iconflag) ? "priority_high" : "clear"}
      </Icon>

      <UncontrolledTooltip
        placement="bottom"
        target="ScheduleUpdateTooltip"
        trigger="click"
      >
        {({ scheduleUpdate }) => (
          <TooltipContent scheduleUpdate={scheduleUpdate} />
        )}
      </UncontrolledTooltip>
    </div>
  );
}

MetodItem.protoTypes = {
  metod: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
export default MetodItem;
