import React, { useState } from 'react'
import './UpdatePassword.css'
import { changePassword } from "../../services/users";
import { Layout } from "../../components";

export default function UpdatePassword(props) {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    const testPassword = await changePassword(form);
    console.log(testPassword);
  };

  return (
    <Layout user={props.user}>
      <div className='update-password-container'>
        <div className='update-password-form'>

        <p className='update-form-header'>UPDATE PASSWORD</p>
          
          <form onChange={handleChange} onSubmit={handleSubmit}>

            <div className='update-email-div'>
              <input className='email-update-input'
                type="text"
                placeholder="Email"
                name="email" />
            </div>
            <div className='update-old-div'>
              <input className='old-update-input'
                type="text"
                placeholder="Old Password"
                name="oldPassword" />
            </div>
            <div className='update-new-div'>
              <input className='new-update-input'
                type="text"
                placeholder="New Password"
                name="newPassword" />
            </div>
            <button className='update-submit-div'>Update</button>
        </form>
        </div>
      </div>
    </Layout>
  )
}
