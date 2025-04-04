import Message from './Message/Message';
import MoodOptions from './MoodOptions/MoodOptions';
import MoodStats from './MoodStats/MoodStats';
import Title from './Title/Title';
import MainForm from './MainForm/MainForm';
import { useState, useEffect } from 'react';
const App = () => {
  const [mood, setMood] = useState(() => {
    const savedMood = localStorage.getItem('mood');
    if (savedMood) {
      try {
        return JSON.parse(savedMood);
      } catch (error) {
        console.error('Error parsing saved mood:', error);
        return { happy: 0, okay: 0, sad: 0 };
      }
    }
    return { happy: 0, okay: 0, sad: 0 };
  });

  const updateMood = moodType => {
    setMood(prev => {
      const updatedMood = { ...prev, [moodType]: prev[moodType] + 1 };
      return updatedMood;
    });
  };

  const total = mood.happy + mood.okay + mood.sad;

  const positive = Math.round((mood.happy / total) * 100);

  const resetMood = () => {
    const reset = { happy: 0, okay: 0, sad: 0 };
    setMood(reset);
  };

  useEffect(() => {
    localStorage.setItem('mood', JSON.stringify(mood));
  }, [mood]);

  return (
    <div>
      <Title />
      <MoodOptions total={total} updateMood={updateMood} reset={resetMood} />
      {total > 0 ? <MoodStats total={total} mood={mood} positive={positive} /> : <Message />}
      <MainForm />
    </div>
  );
};

export default App;
