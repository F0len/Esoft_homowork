import React from 'react'
import './inputs.css'
export const Inputs = ({formData, handleChange, handleSubmit}) => {
    return (
      <>
      <input type="text" name="title" placeholder="Заголовок" value={formData.title} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Описание" value={formData.description} onChange={handleChange} required />
        <input type="number" name="level" placeholder="Уровень (%)" value={formData.level} onChange={handleChange} required />
        <button className='main-button' onClick={handleSubmit}>Создать</button>
      </>
    );
  };