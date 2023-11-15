import PropTypes from "react"
import './field.css'

export const Field = ({ label, onChange }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input name={label} type="number" onChange={(e) => onChange(e)} />
    </div>
  )
}

Field.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func
}