import { useState } from 'react'
import { Field } from '../../components'
import './ageForm.css'

export const AgeForm = () => {
  const [ageUser, setAgeUser] = useState({
    DIA: undefined,
    MES: undefined,
    AÑO: undefined,
  })

  const handleOnchange = (e) => {
    setAgeUser({
      ...ageUser,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="ageForm">
      <Field label='DIA' onChange={handleOnchange} />
      <Field label='MES' onChange={handleOnchange} />
      <Field label='AÑO' onChange={handleOnchange} />
    </div>
  )
}

