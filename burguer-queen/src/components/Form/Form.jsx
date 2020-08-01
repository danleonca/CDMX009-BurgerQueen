import React from 'react'

const Form = ({types, text, changeAction, getValue}) => {
  return (
    <div>

      <input type={types}
        placeholder={text}
        className="form-control mb-2"
        onChange={changeAction}
        value={getValue} />

    </div>
  )
}

export default Form