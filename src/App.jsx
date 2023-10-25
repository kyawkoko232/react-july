import Button from './Button';
import { GoBell } from 'react-icons/go'

function App() {

  const handleClick = ()=> {
    console.log('Click');
  }

  return (
    <div className='flex flex-wrap justify-center items-center gap-5 p-5'>
      <div className=''>
        <Button onClick={handleClick}  primary rounded>
         <GoBell /> Click me!!
        </Button>
      </div>
      <div>
        <Button onClick={handleClick} danger outline>
        
          Buy Now!
        </Button>
      </div>
      <div>
        <Button onClick={handleClick} warning>See Deal!</Button>
      </div>
      <div>
        <Button onClick={handleClick} secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button onClick={handleClick} secondary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
