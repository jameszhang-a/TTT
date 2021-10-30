const Block = ({ checked, onClick }) => {
  return (
    <div
      // className='bg-pink-200 rounded-md
      // 				text-white font-medium w-24 h-24
      // 			  justify-items-center items-center '
      className='block'
      onClick={onClick}
    >
      <p> {checked}</p>
    </div>
  );
};

export default Block;
