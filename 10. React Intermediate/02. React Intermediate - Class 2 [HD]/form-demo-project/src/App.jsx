import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: ""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: (type === "checkbox") ? checked : value
    }))
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log('Printing Form Data');

    console.log(formData);

  }

  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={submitHandler}>
        <label htmlFor='firstName'>First Name </label>
        <br />
        <input
          type='text'
          id='firstName'
          name='firstName'
          placeholder='Vikas'
          value={formData.firstName}
          onChange={changeHandler}
          className='border'></input>

        <br></br>

        <label htmlFor='lastName'>Last Name </label>
        <br />
        <input
          id='lastName'
          type='text'
          name='lastName'
          placeholder='Khurendra'
          value={formData.lastName}
          onChange={changeHandler}
          className='border'></input>

        <br></br>

        <label htmlFor='email'>Email Address </label>
        <br />
        <input
          id='email'
          type='email'
          name='email'
          placeholder='vikas@gmail.com'
          value={formData.email}
          onChange={changeHandler}
          className='border'></input>

        <br></br>
        <label htmlFor='country'>Country</label>
        <br></br>
        <select
          id='country'
          name='country'
          placeholder="India"
          value={formData.country}
          onChange={changeHandler}
          className='border'>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="japan">Japan</option>
          <option value="germany">Germany</option>
        </select>

        <br></br>
        <label htmlFor='street'>Street Address </label>
        <br />
        <input
          id='street'
          type='text'
          name='street'
          placeholder='220B Baker Street'
          value={formData.street}
          onChange={changeHandler}
          className='border'></input>

        <br></br>
        <label htmlFor='city'>City </label>
        <br />
        <input
          id='city'
          type='text'
          name='city'
          placeholder='London'
          value={formData.city}
          onChange={changeHandler}
          className='border'></input>

        <br></br>
        <label htmlFor='state'>State/Province </label>
        <br />
        <input
          id='state'
          type='text'
          name='state'
          placeholder='London'
          value={formData.state}
          onChange={changeHandler}
          className='border'></input>

        <br></br>
        <label htmlFor='zip'>Zip/Postal Code </label>
        <br />
        <input
          id='zip'
          type='text'
          name='zip'
          placeholder='123456'
          value={formData.zip}
          onChange={changeHandler}
          className='border'></input>


        <br></br>
        <br></br>

        <fieldset>
          <legend>By Email</legend>
          <input
            id='comments'
            type='checkbox'
            name='comments'
            checked={formData.comments}
            onChange={changeHandler}
            className='border'></input>
          <div>
            <label htmlFor='comments'> Comments </label>
            <p>Get notified when someone posts a comment on a posting.</p>
          </div>

          <input
            id='candidates'
            type='checkbox'
            name='candidates'
            checked={formData.candidates}
            onChange={changeHandler}
            className='border'></input>
          <div>
            <label htmlFor='candidates'> Candidates </label>
            <p>Get notified when a candidate applies for a job.</p>
          </div>

          <input
            id='offers'
            type='checkbox'
            name='offers'
            checked={formData.offers}
            onChange={changeHandler}
            className='border'></input>
          <div>
            <label htmlFor='offers'> Offers </label>
            <p>Get notified when a candidate accepts or rejects an offer.</p>
          </div>
        </fieldset>

        <br></br>

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
            type='radio'
            id='pushEverything'
            name='pushNotification'
            value="Everything"
            onChange={changeHandler}>
          </input>
          <label htmlFor='pushEverything'>Everything</label>

          <br></br>

          <input
            type='radio'
            id='pushEmail'
            name='pushNotification'
            value="Same As Email"
            onChange={changeHandler}>
          </input>
          <label htmlFor='pushEmail'>Same As Email</label>

          <br></br>

          <input
            type='radio'
            id='pushNothing '
            name='pushNotification'
            value="No Push Notifications"
            onChange={changeHandler}>
          </input>
          <label htmlFor='pushNothing'>No Push Notifications</label>
        </fieldset>

        <button className='bg-blue-500 text-white font-bold rounded px-4 py-1'>Save</button>

      </form>
    </div>
  )
}

export default App
