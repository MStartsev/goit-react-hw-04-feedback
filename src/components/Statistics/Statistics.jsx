import PropTypes from 'prop-types';
import {
  StatisticContainer,
  StatisticItem,
  StatisticValue,
} from './StatisticsElements';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticContainer>
    <StatisticItem>
      Good:
      <StatisticValue>{good}</StatisticValue>
    </StatisticItem>
    <StatisticItem>
      Neutral:
      <StatisticValue>{neutral}</StatisticValue>
    </StatisticItem>
    <StatisticItem>
      Bad:
      <StatisticValue>{bad}</StatisticValue>
    </StatisticItem>
    <StatisticItem>
      Total:
      <StatisticValue>{total}</StatisticValue>
    </StatisticItem>
    <StatisticItem>
      Positive feedback:
      <StatisticValue>{positivePercentage}%</StatisticValue>
    </StatisticItem>
  </StatisticContainer>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
