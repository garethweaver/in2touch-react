import React from 'react'
import { connect } from 'react-redux'
import Layout from 'components/layouts/index'
import Button from 'components/buttons/button-theme'
import RESET_STORE from 'store/actions/reset-store'

const getDate = str => new Date(str).toString()

const Settings = ({ ...props }) => (
  <Layout>
    <h1 className="Margin--b">Settings</h1>
    <section className="Section">
      <h2>Add to homescreen</h2>
      <p>To add this app to your homescreen:</p>
      <p>
        <strong>On IOS</strong> click the share button and find the 'add to
        homescreen' grey icon.
      </p>
      <p>
        <strong>On Android</strong> click the chrome menu button and then 'add
        to homescreen'.
      </p>
    </section>
    <section className="Section">
      <h2>Theme</h2>
      <Button theme={0} />
      <Button theme={1} />
      <Button theme={2} />
      <Button theme={3} />
    </section>
    <section className="Section">
      <h2>Free to use!</h2>
      <p>
        This is a free to use app created by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.garethweaver.com"
        >
          Gareth Weaver
        </a>
        . You can message me on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/garethdweaver"
        >
          twitter
        </a>{" "}
        if you have any questions or comments.
      </p>
    </section>
    <section className="Section">
      <h2>Latest database update</h2>
      <p>{getDate(props.config.updatedAt)}</p>
    </section>
    <section className="Section">
      <h2>Version number</h2>
      <p>DEPRECATED - 1.1.6</p>
    </section>
    <section className="Section">
      <button onClick={props.handleClick} className="Btn__flex">
        Clear local cache
        <span className="material-icons">sync</span>
      </button>
    </section>
  </Layout>
);

const mapStateToProps = state => {
  return {
    config: state.config,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => dispatch(RESET_STORE()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
