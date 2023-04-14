import {
  Component,
  Statistics,
  FeedbackOptions,
  Section,
  Notification,
} from 'components/App';

import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  optionsFeedback = {
    good: 'good',
    neutral: 'neutral',
    bad: 'bad',
  };

  onLeaveFeedback = feedback =>
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = total =>
    total ? (this.state.good / total) * 100 : 0;

  render() {
    const total = this.countTotalFeedback(this.state);
    const positivePercentage = Math.round(
      this.countPositiveFeedbackPercentage(total)
    );

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.optionsFeedback}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistic">
          {total ? (
            <Statistics
              {...this.state}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
