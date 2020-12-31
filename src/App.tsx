import tw from 'twin.macro';
import ImageComparator from './components/ImageComparator';

import './App.css';


const App = () => {
  return (
      <div style={{ height: '100vh', width: '100vw', backgroundColor: 'darkgray', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, margin: 0 }}>
        <ImageComparator />
      </div>
  );
}

export default App;
