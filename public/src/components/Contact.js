import './contact.css'
import { useState } from 'react'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Contact = ({ inContact, handleMsg }) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [phone, setPhone] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name,
      email,
      phone,
      message,
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    axios.post('/email', data, config).then((res) => {
      handleMsg(res.data)
    })
  }
  return (
    <div id="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <TransitionGroup>
          <div className="form-container">
            <CSSTransition
              in={inContact}
              timeout={1800}
              classNames="slidefrombottom"
            >
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-text"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label for="name">Name</label>
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-text"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label for="email">Email</label>
                </div>
                <div className="form-control">
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    className="input-text"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <label for="phone">Phone Number</label>
                </div>
                <div className="form-control">
                  <input
                    type="textarea"
                    id="message"
                    name="message"
                    className="input-textarea"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <label for="message" className="message-label">
                    Message
                  </label>
                </div>
                <button className="submit">Submit</button>
              </form>
            </CSSTransition>
          </div>
        </TransitionGroup>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default Contact
