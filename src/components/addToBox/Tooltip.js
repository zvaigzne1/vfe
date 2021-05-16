import React, { useState, useEffect, useRef, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Tooltip.scss';

/* Example
<Tooltip position="top" content="lorem ipsum">
<button>Hover me</button>
</Tooltip>
*/

// Content
const TooltipContent = ({ tooltipClass, content, position, tooltipPosition, duration }) => {
  const tooltipEl = useRef();
  const targetEl = document.getElementById('root');

  useEffect(() => {
    const el = tooltipEl.current;

    if(el) {
      el.style.transitionDuration = duration + 'ms';

      setTimeout(() => {
        if(tooltipPosition === 'top') {
          el.style.top = `${position.top - el.clientHeight}px`;
          el.style.left = `${position.left}px`;
          el.style.transform = `translate(-50%, -15px) scale(1)`;
        }
        el.style.opacity = '1';
      }, 20);
    }
    // eslint-disable-next-line
  }, []);

  const output = <div className={tooltipClass} ref={tooltipEl}>{content}</div>

  return targetEl ? ReactDOM.createPortal(output, targetEl) : output;
}

TooltipContent.propTypes = {
  content: PropTypes.any.isRequired,
  tooltipClass: PropTypes.string.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  }).isRequired,
  tooltipPosition: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired
}

// Tooltip
const Tooltip = ({ children, position, content, animationDuration = 200 }) => {
  const [elPosition, setElPosition] = useState({ top: 0, left: 0 });
  const [show, setShow] = useState(false);
  let tooltipClass = 'tooltip';

  const getPosition = (e) => {
    const pos = e.currentTarget.getBoundingClientRect();

    if(position === 'top') {
      setElPosition({ top: pos.top + window.pageYOffset, left: pos.left + (pos.width / 2) + window.pageXOffset });
    }
    setShow(true);
  }

  if(position === 'top') {
    tooltipClass += ' tooltip--top';
  }

  return(
    <>
      {show && <TooltipContent tooltipClass={tooltipClass} position={elPosition} content={content} tooltipPosition={position} duration={animationDuration} />}
      {cloneElement(children, {...children.props, onMouseOver: getPosition, onMouseLeave: () => setShow(false)})}
    </>
  );
}

Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  content: PropTypes.any.isRequired,
  position: PropTypes.oneOf(['top']).isRequired,
  animationDuration: PropTypes.number
}

export default Tooltip;