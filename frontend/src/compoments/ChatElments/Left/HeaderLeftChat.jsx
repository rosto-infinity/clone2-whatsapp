
import profil from './../../../public/images/profil.png'

function HeaderLeftChat ()  {
  return (
    <div className='relative bg-[#f0f2f5] h-full w-full p-2 border-r-[1px] border-[#0000001f] overflow-hidden'>
    <div className='absolute flex justify-between w-full '>

      <div className=' h-9 w-9 cursor-pointer z-10 '>
        <img 
        src={profil}
       alt='photof'
         className=' h-full w-full rounded-full ' />
      </div>

      <div className='flex items-center justify-center space-x-4 px-4 opacity-70 h-full '>
       <button> 
          <svg
            viewBox='0 0 24 24'
            height='24'
            width='24'
            preserveAspectRatio='xMidYMid meet'
            className=''
            fill='none'
          >
            <path
              d='m18 11v2h4v-2zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zm4.4-12.01c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zm-16.4 3.4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3v-12l-5 3zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z'
              fill='currentColor'
            ></path>
          </svg>
        </button>

        <button>
          <svg
            viewBox='0 0 24 24'
            height='24'
            width='24'
            preserveAspectRatio='xMidYMid meet'
            className=''
            fill='none'
          >
            <path 
              d='M3.71672 8.34119C3.23926 8.06362 3.07722 7.45154 3.35479 6.97407C4.33646 5.28548 5.79114 3.92134 7.53925 3.05006C9.28736 2.17878 11.2524 1.83851 13.1916 2.07126C13.74 2.13707 14.1312 2.63494 14.0654 3.18329C13.9995 3.73164 13.5017 4.12282 12.9533 4.05701C11.4019 3.87081 9.82989 4.14303 8.43141 4.84005C7.03292 5.53708 5.86917 6.62839 5.08384 7.97926C4.80626 8.45672 4.19419 8.61876 3.71672 8.34119Z'
              fill='currentColor'
            ></path>
            <path
              
              
              d='M12 16C14.2091 16 16 14.2091 16 12C16 9.79085 14.2091 7.99999 12 7.99999C9.79086 7.99999 8 9.79085 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68628 15.3137 5.99999 12 5.99999C8.68629 5.99999 6 8.68628 6 12C6 15.3137 8.68629 18 12 18Z'
              fill='currentColor'
            ></path>
            <path
              d='M20.8569 10.115C21.4065 10.0604 21.8963 10.4616 21.9509 11.0112C22.144 12.9548 21.7638 14.9125 20.857 16.6424C19.9503 18.3724 18.5567 19.799 16.8485 20.746C16.3655 21.0138 15.7568 20.8393 15.489 20.3563C15.2213 19.8732 15.3957 19.2646 15.8788 18.9968C17.2454 18.2392 18.3602 17.0979 19.0856 15.714C19.811 14.33 20.1152 12.7639 19.9607 11.209C19.9061 10.6594 20.3073 10.1696 20.8569 10.115Z'
              fill='currentColor'
            ></path>
            <path
              d='M6.34315 17.6568C7.89977 19.2135 9.93829 19.9945 11.9785 20C12.4928 20.0013 12.9654 20.3306 13.0791 20.8322C13.2105 21.4123 12.8147 21.9846 12.22 21.9976C9.58797 22.0552 6.93751 21.0796 4.92893 19.0711C2.90126 17.0434 1.92639 14.3616 2.00433 11.7049C2.02177 11.1104 2.59704 10.7188 3.17612 10.8546C3.67682 10.9721 4.00256 11.4471 4.00009 11.9614C3.99021 14.0216 4.77123 16.0849 6.34315 17.6568Z'
              fill='currentColor'
            ></path>
            <circle cx='19.95' cy='4.05005' r='3' fill='#009588'></circle>
          </svg>
        </button>

        <button>
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
              enableBackground='new'
              d='M19.005,3.175H4.674C3.642,3.175,3,3.789,3,4.821V21.02 l3.544-3.514h12.461c1.033,0,2.064-1.06,2.064-2.093V4.821C21.068,3.789,20.037,3.175,19.005,3.175z M14.016,13.044H7.041V11.1 h6.975V13.044z M17.016,9.044H7.041V7.1h9.975V9.044z'
            ></path>
          </svg>
        </button>

        <button>
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
              d='M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z'
            ></path>
          </svg>
        </button>

      </div>

    </div>
  </div>
     
  );
}

export default HeaderLeftChat;
