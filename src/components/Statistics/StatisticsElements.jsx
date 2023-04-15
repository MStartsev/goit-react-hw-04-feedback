import css from './Statistics.module.css';

export const StatisticContainer = ({ children }) => (
  <div className={css.container}>{children}</div>
);

export const StatisticItem = ({ children }) => <p>{children}</p>;

export const StatisticValue = ({ children }) => (
  <span className={css.value}>{children}</span>
);
