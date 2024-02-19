import Buscador from '../componentes/Buscador';
import Nubes from './Nubes.jsx';

export default function Slider() {
	return(
		<div>
		<Nubes />
		<div className='bg-[url("/public/img/slider.jpg")] bg-no-repeat pt-80 bg-scroll bg-cover'>
			<Buscador/>
		</div>
		</div>
	);
}
