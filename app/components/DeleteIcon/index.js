import React, { Component, PropTypes } from 'react';
import { openModal } from 'actions/uiActions';
import Icon from 'utils/icons';
import ConfirmModal from '../Modals/ConfirmModal';

export default class DeleteIcon extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    message: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  }

  static defaultProps = {
    message: undefined,
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { onClick, message, dispatch } = this.props;
    dispatch(openModal(
      <ConfirmModal
        confirm={onClick}
        message={message}
      />),
    );
  }

  render() {
    return (
      <button type="button" className="table__delete" onClick={this.onClick}><Icon icon="circleWithLine" /></button>
    );
  }
}
