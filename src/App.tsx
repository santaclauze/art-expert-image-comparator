import logo from './logo.svg';
import tw from 'twin.macro';
import { Container } from './styles';
import ImageDragger from './components/ImageDragger';
import ImageComparator from './components/ImageComparator';

import './App.css';

const Button = tw.button`bg-black text-white`


const App = () => {
  return (
    // <ImageDragger />
      <div style={{ height: '100vh', width: '100vw', backgroundColor: 'darkgray', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, margin: 0 }}>
        <ImageComparator />
      </div>
  );
}

export default App;
