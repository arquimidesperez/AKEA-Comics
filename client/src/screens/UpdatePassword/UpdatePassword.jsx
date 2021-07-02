import React, { useState } from 'react'
import { changePassword } from "../../services/users";


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
    <div>
      <form onChange={handleChange} onSubmit={handleSubmit}>
            <input type="text" placeholder="email" name="email" />
            <input type="text" placeholder="Old Password" name="oldPassword" />
            <input type="text" placeholder="New Password" name="newPassword" />
            <button>Submit</button>
          </form>
    </div>
  )
}
