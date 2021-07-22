import React from "react";
import PropTypes from "prop-types";
import FeedbackOptionsStyled from "./FeedbackOptionsStyled";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <FeedbackOptionsStyled>
      <button
        type="button"
        name="good"
        className="goodBtn"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        className="neutralBtn"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        className="badBtn"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </FeedbackOptionsStyled>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
