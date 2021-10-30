const Block = ({ checked, onClick }) => {
  const styles = checked ? `block ${checked}` : 'block';

  return (
    <div className={styles} onClick={onClick}>
      <p> {checked}</p>
    </div>
  );
};

export default Block;
