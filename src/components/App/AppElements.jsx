import css from './App.module.css';

export const Container = ({ children }) => (
  <div className={css.container}>{children}</div>
);
