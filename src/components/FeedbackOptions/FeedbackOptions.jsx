import React from "react";
import PropTypes from "prop-types";
import FeedbackOptionsStyled from "./FeedbackOptionsStyled";
import { v4 as uuidv4 } from "uuid";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <FeedbackOptionsStyled>
      {options.map((option) => {
        return (
          <button
            key={uuidv4()}
            type="button"
            name={option.name}
            className={option.name}
            onClick={onLeaveFeedback}
          >
            {option.title}
          </button>
        );
      })}
    </FeedbackOptionsStyled>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
