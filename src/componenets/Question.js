import React from 'react'
import { QuestionText, QuestionWrapper, QuestionBtn } from '../styles/Styles'
const Question = () => {
    return (
        <QuestionWrapper>
            <QuestionText>
                You’ve got questions, we’ve got answers... Let’s Chat!
            </QuestionText>
            <QuestionBtn>Contact the Team</QuestionBtn>
        </QuestionWrapper>
    )
}

export default Question