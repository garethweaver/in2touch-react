import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import REMOVE_USER_ITEM_BY_ID from '../../store/actions/remove-user-item-by-id'
import REORDER_USER_ITEM_BY_ID from '../../store/actions/reorder-user-item-by-id'
import Button from './button-edit'
import './buttons-edit.sass'

class ButtonsEdit extends Component {

  constructor(props) {
    super(props)
    this.state = { editing: false }
  }

  toggleEdit() {
    this.setState({
      editing: !this.state.editing
    })
  }

  handleReorder(dir) {
    this.props.dispatchReorder({
      id: this.props.id,
      direction: dir,
      type: this.props.type,
    })
    this.toggleEdit()
  }

  getButtons() {
    return (
      <div className="ButtonsEdit__rack">
        <Button
          handleClick={() => this.handleReorder(-1)}>
          arrow_upward
        </Button>
        <Button
          handleClick={() => this.handleReorder(1)}>
          arrow_downward
        </Button>
        <Button
          handleClick={() => this.props.handleDelete({
            id: this.props.id,
            type: this.props.type,
          })}>
          delete_outline
        </Button>
        <Button
          handleClick={() => this.toggleEdit()}>
          close
        </Button>
      </div>
    )
  }

  render() {
    return (
      <div className="ButtonsEdit">
        <CSSTransition
          in={this.state.editing}
          classNames="slide"
          unmountOnExit
          timeout={300}>
          {this.getButtons()}
        </CSSTransition>
        <CSSTransition
          in={!this.state.editing}
          classNames="slide"
          unmountOnExit
          timeout={300}>
          <Button
            handleClick={() => this.toggleEdit()}>
            more_horiz
          </Button>
        </CSSTransition>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    handleDelete: payload => dispatch(REMOVE_USER_ITEM_BY_ID(payload)),
    dispatchReorder: payload => dispatch(REORDER_USER_ITEM_BY_ID(payload)),
  }
}

export default connect(null, mapDispatchToProps)(ButtonsEdit)
