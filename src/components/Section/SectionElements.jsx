import css from './Section.module.css';

export const SectionTitle = ({ children }) => (
  <h2 className={css.title}>{children}</h2>
);
