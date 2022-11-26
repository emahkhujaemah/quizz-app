import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

const reorderAnswers = question => {
    const answers = [question.correct, ...question.incorrect];

    for (let index = 0; index < answers.length; index++) {
        const j = Math.floor(Math.random() * index);
        const tmp = answers[index];
        answers[index] = answers[j];
        answers[j] = tmp;
    }
    return answers;
};

export default function QuestionBox({ questions }){ 
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [answers, setAnswers] = useState([]);

    useEffect(() => { 
        const question = questions[currentQuestionIndex];
        setCurrentQuestion(question);
        setAnswers(reorderAnswers(question));
    }, [currentQuestionIndex]);

    const selectAnswer = answer => {
        
    };

    return(
        <>
            <div className="mb-4">
                <strong dangerouslySetInnerHTML={{ __html : currentQuestion.question }}/>
            </div>
            <div>
                <ListGroup>
                    {answers.map((a, i) => {
                        return (
                            <ListGroup.Item key={i}>
                                <span dangerouslySetInnerHTML={{ __html:  a}}></span>
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </div>
        </>
    );
}