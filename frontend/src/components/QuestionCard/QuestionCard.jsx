import React, { useState } from 'react';
import styles from './QuestionCard.module.css';
import Button from '@mui/material/Button';

export default function QuestionCard({ question, choices, correctIndex }) {
    const [selected, setSelected] = useState(null);
    const [feedback, setFeedback] = useState('');
    
    function handleChoice(idx) {
        setSelected(idx);
        setFeedback(idx === correctIndex ? 'Correct' : 'Incorrect');
    }

    return (
        <div className={styles.card}>
            <div className={styles.question}>{question}</div>
            <div className={styles.choices}>
                {choices.map((choice, idx) => (
                <Button
                    key={idx}
                    onClick={() => handleChoice(idx)}
                    variant="contained"
                    size="large"
                    sx={{
                        fontFamily: "'LowresPixel', sans-serif",
                        color: 'var(--text)',
                        backgroundColor: 'var(--black1)',
                        boxShadow: selected === idx ? 'none' : 'var(--shadow-s)',
                    }}
                >
                    {choice}
                </Button>
                ))}
            </div>

            {selected !== null && (
            <div className={styles.feedback}>
                {feedback}
            </div>
            )}
        </div>
    );
}