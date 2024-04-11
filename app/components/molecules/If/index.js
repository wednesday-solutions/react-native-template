/**
 *
 * If
 *
 */
// eslint-disable-next-line
import PropTypes from 'prop-types';

const If = props => (props.condition ? props.children : props.otherwise);

If.propTypes = {
  condition: PropTypes.bool,
  otherwise: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

If.defaultProps = {
  otherwise: null
};

export default If;
