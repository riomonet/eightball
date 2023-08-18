import React, { useState } from 'react'
import Answers from './answers'
import './EightBall.css'

const EightBall = () => {

    const getAnswer = () => {
	const idx = Math.floor(Math.random() * Answers.length)
	return Answers[idx]
    }
    
    const postReply = () => {
	let answer = getAnswer();
	setColor(answer.color)
	setMsg(answer.msg)
    }

    const [color, setColor] = useState('black')
    const [msg, setMsg] = useState('Think of a Question')

    return <div onClick={postReply} style={{ backgroundColor: color}} id="EightBall"> {msg} </div>
}

export default EightBall;


