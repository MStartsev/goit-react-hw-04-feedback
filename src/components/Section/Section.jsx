import PropTypes from 'prop-types';
import { SectionTitle } from './SectionElements';

const Section = ({ title, children }) => (
  <div>
    <SectionTitle> {title}</SectionTitle>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
