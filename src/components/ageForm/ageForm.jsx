import { Field } from '../'
import './ageForm.css'

export const AgeForm = () => {
  return (
    <div className="ageForm">
      <Field label='DIA' />
      <Field label='MES' />
      <Field label='AÑO' />
    </div>
  )
}

