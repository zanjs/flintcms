import React, { Component, PropTypes } from 'react';
import './TitleBar.scss';

export default class TitleBar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    const { title, children } = this.props;
    return (
      <header className="title-bar">
        <h1 className="title-bar__title">{title}</h1>
        {children}
      </header>
    );
  }
}