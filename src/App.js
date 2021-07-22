import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Statistics from "./components/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackIncrement = (event) => {
    const name = event.target.name;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let total = 0;
    values.map((item) => {
      return (total += item);
    });
    return total;
  };

  positivePercentage() {
    const total = this.countTotalFeedback();
    if (total === 0) return 0;
    return parseInt((this.state.good / total) * 100);
  }

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.positivePercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.feedbackIncrement}
          />
        </Section>
        {totalFeedback < 1 ? (
          <h2 className="noStatisticTitle">No feedback given</h2>
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
