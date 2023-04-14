import React from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackContainer,
  FeedbackButton,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { good, neutral, bad } = options;

  return (
    <FeedbackContainer>
      <FeedbackButton onClick={() => onLeaveFeedback(good)}>
        Good
      </FeedbackButton>
      <FeedbackButton onClick={() => onLeaveFeedback(neutral)}>
        Neutral
      </FeedbackButton>
      <FeedbackButton onClick={() => onLeaveFeedback(bad)}>Bad</FeedbackButton>
    </FeedbackContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
