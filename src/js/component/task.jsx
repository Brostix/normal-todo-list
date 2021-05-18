import React from "react";
import PropTypes from "prop-types";

function Task(props) {
	return <div>{props.taskValue}</div>;
}

Task.propTypes = {
	taskValue: PropTypes.string
};

export default Task;
