import mapGenerator from '../utils/mapGenerator';
import DrawMap from './DrawMap';

function App() {
	return <DrawMap map={mapGenerator(50)} />;
}

export default App;
