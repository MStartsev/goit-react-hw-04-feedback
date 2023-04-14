import styled from '@emotion/styled';
import css from './FeedbackOptions.module.css';

export const FeedbackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  padding: 20px;
`;

export const FeedbackButton = event => (
  <button className={css.button} type="button" {...event}></button>
);
