import React from "react";
import PropTypes from "prop-types";
import StatisticsStyled from "./StatisticsStyled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsStyled>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total feedback: {total}</p>
      </li>
      <li>
        <p>Positive feedback: {positivePercentage} %</p>
      </li>
    </StatisticsStyled>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
