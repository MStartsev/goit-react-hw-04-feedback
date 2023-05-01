import {
  React,
  useState,
  Statistics,
  FeedbackOptions,
  Section,
  Notification,
  Container,
} from 'components/App';

document.title = 'Feedback';

export default function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const optionsFeedback = {
    good: 'good',
    neutral: 'neutral',
    bad: 'bad',
  };

  const onLeaveFeedback = feedback =>
    setFeedback(prevState => ({
      ...prevState,
      [feedback]: prevState[feedback] + 1,
    }));

  const countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  const countPositiveFeedbackPercentage = total =>
    total ? (feedback.good / total) * 100 : 0;

  const total = countTotalFeedback(feedback);
  const positivePercentage = Math.round(countPositiveFeedbackPercentage(total));

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsFeedback}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistic">
        {total ? (
          <Statistics
            {...feedback}
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
