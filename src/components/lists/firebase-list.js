import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withFirebase } from '../../firebase'
import Layout from '../layouts/with-back'
import Loader from '../loader/loader'
import Input from '../inputs/input'
import ListItem from './list-item'
import GET_FIREBASE_LIST from '../../store/actions/get-firebase-list'

class FirebaseList extends Component {

  constructor(props) {
    super(props)
    this.query = props.location.pathname.replace(/\//g, '')
    this.state = { list: props[this.query] }
  }

  componentWillMount() {
    if (!this.props[this.query]) {
      this.props.getFirebaseList(this.query)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps[this.query] !== this.props[this.query]) {
      this.setState({ list: nextProps[this.query] })
    }
    if (!nextProps[this.query]) {
      this.props.getFirebaseList(this.query)
    }
  }

  handleSearch(e) {
    let list = this.props[this.query]
    list = list.filter(t => {
      return t.name
        .toLowerCase()
        .search(e.target.value.toLowerCase()) !== -1
    })
    this.setState({ list })
  }

  getItems() {
    return (
      this.state.list.map((item) => {
        return (
          <li key={item.id}>
            <ListItem
              query={this.query}
              data={item} />
          </li>
        )
      })
    )
  }

  render() {
    return (
      <Layout>
        {
          this.state.list
          ? <>
            <Input
              id="Search"
              handleChange={e => this.handleSearch(e)}
              type="search"
              placeholder="Search..." />
            <ul className="">
              {this.getItems()}
            </ul>
          </>
          : <Loader />
        }
        {
          (this.state.list && this.state.list.length === 0) &&
            <em>Nothing found</em>
        }
     </Layout>
    )
  }

}

const mapStateToProps = state => {
  return {
    teams: state.teams,
    leagues: state.leagues,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFirebaseList: payload => dispatch(GET_FIREBASE_LIST(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(FirebaseList))
