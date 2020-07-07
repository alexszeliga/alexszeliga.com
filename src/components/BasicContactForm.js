import React from "react"

export default class BasicContactForm extends React.Component {
  state = {
    email: "",
    message: "",
  }
  render() {
    return (
      <form action="https://getform.io/f/e792c058-235e-4f86-9c16-c5e1ef0ff9af" method="POST">
        <div className="field">
          <p className="menu-label">Email</p>
          <div className="control">
            <input
              className="input"
              type="text"
              name="email"
              placeholder="you@domain.com"
            ></input>
          </div>
        </div>
        <div className="field">
          <p className="menu-label">Message</p>
          <div className="control">
            <textarea
              className="textarea"
              name="message"
              placeholder="You are terrible!"
              rows="2"
            ></textarea>
          </div>
        </div>
        <div className="field is-grouped is-grouped-right">
          <p className="control">
            <button className="button is-light">Send</button>
          </p>
        </div>
      </form>
    )
  }
}
