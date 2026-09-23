import React, { useState } from 'react'
import './HiddenProjectNotification.scss'

export default function HiddenProjectNotification({
  handlePasswordInput,
  allProjectsView,
}) {
  const [pw, setPw] = useState([''])

  const handleFormInput = (e) => {
    setPw(e.target.value)
  }

  // elements
  const message = !allProjectsView
    ? 'Pst. Some projects do require a password to see. If you know it, enter it below, otherwise please email me for the password.'
    : 'Showing all projects.'

  const entryContainer = !allProjectsView ? (
    <div className="hidden-project-notification__entry-container">
      <div className="pw-form">
        <input
          className="pw-form__input"
          value={pw}
          onInput={handleFormInput}
        ></input>
        <div
          className="pw-form__submit"
          onClick={() => handlePasswordInput(pw)}
        >
          Submit
        </div>
      </div>
    </div>
  ) : null

  return (
    <div className="hidden-project-notification">
      <div class="hidden-project-notification__message">{message}</div>
      {entryContainer}
    </div>
  )
}
