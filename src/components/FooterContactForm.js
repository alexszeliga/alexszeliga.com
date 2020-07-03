import React from "react"

export default class FooterContactForm extends React.Component {
  state = {
    email: "",
    message: "",
  }
  render() {
    return (
      <form>
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
        <div class="field is-grouped is-grouped-right">
          <p class="control">
            <button class="button is-light">Send</button>
          </p>
        </div>
      </form>
    )
  }
}
