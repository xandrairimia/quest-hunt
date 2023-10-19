export default function Logo(props) {
  return (
    <div className={props.className}>
      <h1 className="text-stroke-1 text-8xl">{props.logo}</h1>
      <h1 className="relative text-8xl text-yellow xs:inset-y-[-190px] sm:inset-y-[-95px]">
        {props.logo}
      </h1>
    </div>
  );
}

{
  /* <h1 style={{ color:'#E9C46A', fontSize:'6em', letterSpacing:'0.03em' }} */
}

// .logo {
//     height: 6em;
//     padding: 1.5em;
//     will-change: filter;
//     transition: filter 300ms;
//   }
//   .logo:hover {
//     filter: drop-shadow(0 0 2em #646cffaa);
//   }
//   .logo.react:hover {
//     filter: drop-shadow(0 0 2em #61dafbaa);
//   }
