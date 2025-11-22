import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      comment: "",
      isVisible: true,
      mode: "",
      favCar: ""
    }
  )

  console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value
        [name]: (type === "checkbox") ? checked : value
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log('Printing entire data: ');
    console.log(formData);
  }

  return (
    <div className='App'>
      <form onSubmit={submitHandler}>

        <label htmlFor='firstName'>First Name </label>
        <input
          name='firstName'
          type='text'
          placeholder='Enter First Name'
          onChange={changeHandler}
          value={formData.firstName}></input>

        <br /><br />

        <label htmlFor='lastName'>Last Name </label>
        <input
          name='lastName'
          type='text'
          placeholder='Enter Last Name'
          onChange={changeHandler}
          value={formData.lastName}></input>

        <br /><br />

        <label htmlFor='email'>Email </label>
        <input
          name='email'
          type='email'
          placeholder='Enter Your Email Here'
          onChange={changeHandler}
          value={formData.email}></input>

        <br /><br />

        <label htmlFor='textArea'>Comment </label>
        <textarea
          name='comment'
          placeholder='Enter Your Comment Here'
          onChange={changeHandler}
          value={formData.comment}>
        </textarea>

        <br /><br />

        <label htmlFor='isVisible'>Am I Visible?</label>
        <input
          type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible}>
        </input>

        <br /><br />

        <fieldset>
          <legend>Mode: </legend>
          <label htmlFor='Online-Mode'>Online Mode</label>
          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value='Online-Mode'
            id='Online-Mode'
            checked={formData.mode === 'Online-Mode'}>
          </input>

          <label htmlFor='Offline-Mode'>Offline Mode</label>
          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value='Offline-Mode'
            id='Offline-Mode'
            checked={formData.mode === 'Offline-Mode'}>
          </input>
        </fieldset>

        <br /><br />

        <label htmlFor='favCar'>Tell me your faviour car </label>
        <select
          name='favCar'
          id='favCar'
          value={formData.favCar}
          onChange={changeHandler}>

          <option value="Scorpio">Scorpio</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Thar">Thar</option>
          <option value="Bolero">Bolero</option>
          <option value="Seltos">Seltos</option>
        </select>

        <br /><br />

        <button>Submit</button>

      </form>
    </div>
  )
}

export default App
