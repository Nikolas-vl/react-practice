import s from './/MoodStats.module.css';

const MoodStats = ({ total, mood, positive }) => {
  return (
    <>
      <p>Happy:{mood.happy}</p>
      <p>Okay:{mood.okay}</p>
      <p>Sad:{mood.sad}</p>
      <p>Total:{total}</p>
      <p>Positive:{positive}%</p>
    </>
  );
};

export default MoodStats;
