import React, { useState } from 'react';
import styles from '../../styles/QA.module.css';

const QAPairs = [
  {
    question: 'What do you offer on your platform?',
    answer:
      'We offer an AI-powered interview simulation, resume creation tool, cover letter generator, expert career coaching, career advice and resources, and personalized learning paths.',
  },
  {
    question: 'Why should I choose your platform?',
    answer:
      'We provide comprehensive career support, AI-powered tools and feedback, expert guidance and support, and a convenient and user-friendly platform.',
  },
  {
    question: 'How do I get started?',
    answer:
      'You can sign up for our platform and gain access to our suite of career development tools and resources.',
  },
  {
    question: 'What is the Interview Room?',
    answer:
      'The Interview Room is an AI-powered interview simulation where you can practice your interview skills and receive instant feedback on your responses.',
  },
  {
    question: 'Can I customize my resume and cover letter?',
    answer:
      'Yes, our platform offers customizable sections and templates for resume and cover letter creation.',
  },
];

const QA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.qaContainer}>
        <h1 className={styles.section_title}>Q&A</h1>
      {QAPairs.map((pair, index) => (
        <div key={index} className={styles.qaItem}>
          <div className={styles.question} onClick={() => toggleQuestion(index)}>
            {pair.question}
          </div>
          {activeIndex === index && <div className={styles.answer}>{pair.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default QA;
