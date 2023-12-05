import React, { useState, useEffect } from 'react';

const GamePage = () => {
  const [wordList, setWordList] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [definitions, setDefinitions] = useState([]);
  const [selectedChoice, setSelectedChoice] = useState('');
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState('');

  useEffect(() => {
    fetch('/api/lists')
      .then((response) => response.json())
      .then((data) => {
        setWordList(data); // Assuming the data is an array of words from MongoDB
        shuffleDefinitions(data[currentWordIndex]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (currentWordIndex < wordList.length) {
      shuffleDefinitions(wordList[currentWordIndex]);
    }
  }, [currentWordIndex, wordList]);

  const shuffleDefinitions = (word) => {
    // Shuffle the definitions and add the correct one
    const shuffled = shuffleArray([...word.items.map((item) => item.def), word.items[0].def]);
    setDefinitions(shuffled);
  };

  const shuffleArray = (array) => {
    // Shuffles the elements of an array randomly
    return array.sort(() => Math.random() - 0.5);
  };

  const handleChoiceClick = (choice) => {
    if (choice === wordList[currentWordIndex].items[0].def) {
      setAnswerStatus('Correct!');
      setScore(score + 1);
    } else {
      setAnswerStatus('Wrong!');
    }
  };

  const handleNextWord = () => {
    if (currentWordIndex < wordList.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setAnswerStatus('');
    } else {
      // Game ends when all words are completed
      setAnswerStatus('Game Over');
    }
  };

  if (wordList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome to the Vocabulary Game</h2>
      <h3>Score: {score}</h3>
      {currentWordIndex < wordList.length ? (
        <div>
          <h4>Word: {wordList[currentWordIndex].name}</h4>
          <ul>
            {definitions.map((choice, index) => (
              <li key={index} onClick={() => handleChoiceClick(choice)}>
                {choice}
              </li>
            ))}
          </ul>
          <p>{answerStatus}</p>
          <button onClick={handleNextWord}>Next</button>
        </div>
      ) : (
        <p>{answerStatus}</p>
      )}
    </div>
  );
};

export default GamePage;
