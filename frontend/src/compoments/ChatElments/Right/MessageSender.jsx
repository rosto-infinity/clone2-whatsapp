
const MessageSender = () => {
  
  return (
    <div className=' h-full bg-[#f0f2f5]'>
      <form
       
        className=' flex justify-evenly px-5 py-2 items-center'
      >
        <input 
          
          
          placeholder='Entrez un message'
          className=' w-[92%] p-2 rounded-md outline-none'
        />
       
          <button type='submit' className=' opacity-60 cursor-pointer'>
            <svg
              viewBox='0 0 24 24'
              height='24'
              width='24'
              preserveAspectRatio='xMidYMid meet'
              version='1.1'
              x='0px'
              y='0px'
              enableBackground='new 0 0 24 24'
              xmlSpace='preserve'
            >
              <path
                fill='currentColor'
                d='M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z'
              ></path>
            </svg>
          </button>
       
      </form>
    </div>
  );
};

export default MessageSender;
