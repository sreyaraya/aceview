interface i{
  username: string,
  title: string
}

export default function Result({username, title}:i) {
  const deployToVercel = () => {};
  console.log(username, title)
  return (
    <div className="w-full h-[100vh]   flex flex-col justify-center items-center">
      <div className="text-7xl font-extrabold text-center">
        <span className="animate-scale-in-center delay-200">
        All Done! <br></br><br></br> 
        </span>
        <span className="animate-scale-in-center delay-500">
        Check out your website below
        </span>
        
      </div>
      <div className="flex gap-10 mt-10">

      <a
        
        className="bg-green-900"
        href={`https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2${username}%2F${title}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="92" height="32">
          <g fill="none" fillRule="evenodd">
            <path
              fill="#16a34a"
              fillRule="nonzero"
              d="M0 4c0-2.21 1.75-4 3.9-4h84.2C90.25 0 92 1.79 92 4v24c0 2.21-1.75 4-3.9 4H3.9A3.95 3.95 0 0 1 0 28V4z"
            />
            <path fill="#15803d" d="M32 32V0h1v32z" />
            <path
              fill="#FFF"
              d="M16 10l-.41.76-5.2 9.53L10 21h12l-.39-.71-5.19-9.53L16 10zm51.61 10.59h-1.35v-9.27h1.35v9.27zm-26.26 0v-8.84h3.28c2.7 0 4.27 1.61 4.27 4.4 0 2.8-1.56 4.44-4.27 4.44h-3.28zm3.12-7.66h-1.71v6.47h1.71c1.9 0 3-1.18 3-3.24 0-2.04-1.12-3.23-3-3.23zm9.05 6.7c.82 0 1.38-.29 1.63-.83h1.3c-.29 1.18-1.4 1.91-2.96 1.91-1.97 0-3.17-1.31-3.17-3.44 0-2.11 1.23-3.47 3.16-3.47 1.9 0 3.06 1.27 3.06 3.36v.45H51.7v.06c.04 1.2.74 1.97 1.82 1.97zm1.64-2.97c-.03-1.08-.69-1.78-1.69-1.78s-1.7.7-1.77 1.78h3.46zm6.56-2.84a2.4 2.4 0 0 0-2.15 1.22h-.1v-1.1h-1.3v8.86h1.35v-3.22h.1c.36.7 1.14 1.12 2.11 1.12 1.73 0 2.83-1.34 2.83-3.44 0-2.11-1.1-3.44-2.84-3.44zm-.39 5.75c-1.13 0-1.84-.89-1.84-2.31 0-1.43.71-2.32 1.85-2.32 1.15 0 1.83.87 1.83 2.32 0 1.45-.68 2.31-1.84 2.31zm11.2 1.14c2.01 0 3.24-1.3 3.24-3.45 0-2.15-1.24-3.46-3.23-3.46-2 0-3.24 1.31-3.24 3.46s1.23 3.45 3.24 3.45zm0-1.12c-1.17 0-1.83-.85-1.83-2.33s.66-2.34 1.84-2.34c1.17 0 1.84.86 1.84 2.34s-.67 2.33-1.84 2.33zm7.91 1.3c-.58 1.6-1.23 2.11-2.63 2.11-.1 0-.43-.01-.56-.03v-1.08c.11.02.32.03.44.03.65 0 1.01-.27 1.24-.97l.1-.35-2.48-6.67h1.48l1.72 5.33h.1l1.71-5.33H83l-2.56 6.96z"
            />
          </g>
        </svg>
      </a>
      <a  href={`https://stackblitz.com/github/${username}/${title}`}>
  <img height={'40px'}
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>
      </div>
      {/* <button onClick={deployToVercel}>Deploy To Vercel</button> */}
      
    </div>
  );
}
