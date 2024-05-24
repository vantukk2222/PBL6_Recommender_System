// here I have used https://react-svgr.com/playground/ to convert svg to react component
// Here are all the svg Icons that I hae used in this project as a react component
import logo from "../../assets/images/logo.png";
export const CodeIcon = (props) => (
  <img src={logo} alt="Logo" className="w-12 h-12" />
);
export const BrowseIcon = () => (
  <svg viewBox="0 0 1024 1024" width="24" height="24">
    <path
      fill="black" 
      d="M512 85.333333c235.52 0 426.666667 191.146667 426.666667 426.666667s-191.146667 426.666667-426.666667 426.666667S85.333333 747.52 85.333333 512 276.48 85.333333 512 85.333333z m234.666667 192L426.24 426.24 277.333333 746.666667l320.426667-148.906667L746.666667 277.333333zM512 465.066667c26.026667 0 46.933333 20.906667 46.933333 46.933333 0 26.026667-20.906667 46.933333-46.933333 46.933333-26.026667 0-46.933333-20.906667-46.933333-46.933333 0-26.026667 20.906667-46.933333 46.933333-46.933333z"
    ></path>
  </svg>
);
export const backgroundIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="215"
    height="44"
    viewBox="0 0 215 44"
    fill="none"
  >
    <path d="M20 9h195l-12.037 35H20V9z" fill="#FFBC69" />
    <path d="M0 0h204l-12 36H0V0z" fill="url(#paint0_linear)" />
    <path
      d="M108.81 0H204l-12.108 36H90l18.81-36z"
      fill="url(#paint1_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        y1="15.3"
        x2="204"
        y2="15.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B66F5" />
        <stop offset="1" stopColor="#163BCD" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="199.969"
        y1="23"
        x2="75.027"
        y2="24.805"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B66F5" />
        <stop offset="1" stopColor="#3B66F5" stopOpacity=".69" />
      </linearGradient>
    </defs>
  </svg>
);
export const HamburgetMenuOpen = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 17h18M3 12h18M3 7h18"
    />
  </svg>
);

export const HamburgetMenuClose = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
    <g fill="none" fillRule="evenodd">
      <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
      <path
        fill="currentColor"
        d="m12 14.121 5.303 5.304a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879 6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.303a1.5 1.5 0 1 0 2.122 2.122L12 14.12Z"
      />
    </g>
  </svg>
);
