import PropTypes from "react"
import './field.css'

export const Field = ({ label }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input type="number" value='2003' />
    </div>
  )
}

Field.propTypes = {
  label: PropTypes.string
}