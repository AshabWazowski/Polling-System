import React from 'react'
import '../styles/createPoll.css'
const CreatePoll = () => {
  return (
    <div className='poll'>
        {/* Form Card */}
      <div className='poll-container'>
        <div className='create-poll-top'><h2>Create Poll</h2></div>
        <form>
            <div className='question'>
                <label>Question:</label>
                <input type="text" placeholder='Enter your question' className='question-input'/>
            </div>
            <div className='options'>
                <label>Options:</label>
                <div className='option-wrap'>
                <input type="text" placeholder='Option 1' className='option-input'/>
                <input type="text" placeholder='Option 2' className='option-input'/>
                <input type="text" placeholder='Option 3' className='option-input'/>
                <input type="text" placeholder='Option 4' className='option-input'/>
            </div>
            </div>
            <div className='btn-container'>
                <button className='submit-btn'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePoll
