import s from './MoodOptions.module.css';

const MoodOptions = ({ mood, updateMood, total, reset }) => {
  return (
    <div className={s.btn}>
      <button onClick={() => updateMood('happy')}>Happy</button>
      <button onClick={() => updateMood('okay')}>Okay</button>
      <button onClick={() => updateMood('sad')}>Sad</button>
      {total > 0 && <button onClick={reset}>Reset</button>}
    </div>
  );
};

export default MoodOptions;
