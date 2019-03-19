import cn from 'classnames';
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
  state = { open: false };

  dropdown = createRef();

  componentDidMount() {
    document.addEventListener('click', this.handleClickAway);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickAway);
  }

  handleClickAway = e => {
    const dropdown = this.dropdown.current;

    if (!dropdown.contains(e.target)) {
      this.setState({ open: false });
    }
  };

  render() {
    const { className, title, children } = this.props;
    const { open } = this.state;

    return (
      <div ref={this.dropdown} className={cn('dropdown', { open })}>
        <a
          className={cn(className, 'dropdown-toggle')}
          href="#"
          aria-haspopup="true"
          role="button"
          onClick={() => this.setState(prevState => ({ open: !prevState.open }))}
        >
          {title}
        </a>
        {open && <ul className="dropdown-menu">{children}</ul>}
      </div>
    );
  }
}

export const Item = ({ className, href, children }) => (
  <a className={cn(className, 'dropdown-item')} href={href}>
    {children}
  </a>
);

export const Divider = () => <div role="separator" className="dropdown-divider" />;

Dropdown.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.node,
};

Item.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
};

Dropdown.Item = Item;
Dropdown.Divider = Divider;

export default Dropdown;
