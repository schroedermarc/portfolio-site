import React, { useState } from 'react'
import './HiddenProjectNotification.scss'

export default function HiddenProjectNotification({ handlePasswordInput }) {
  const [pw, setPw] = useState([''])

  const handleFormInput = (e) => {
    setPw(e.target.value)
  }

  return (
    <div className="hidden-project-notification">
      <div class="hidden-project-notification__message">
        Pst. Some projects do require a password to see. If you know, enter it
        here. If not, please email me.
      </div>
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
    </div>
  )
}
