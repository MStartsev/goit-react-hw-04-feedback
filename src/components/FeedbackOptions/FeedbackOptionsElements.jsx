import css from './FeedbackOptions.module.css';

export const FeedbackContainer = ({ children }) => (
  <div className={css.container}>{children}</div>
);

export const FeedbackButton = event => (
  <button className={css.button} type="button" {...event}></button>
);
