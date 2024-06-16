import reactImg from '../assets/react-core-concepts.png';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  //generating a random number to get a random number everytime to get different index from the array of above words.
 export default function Header(){
    return(
      <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    )
  }