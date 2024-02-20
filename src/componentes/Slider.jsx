import Nubes from './Nubes.jsx';
import Categorias from './Categorias.jsx';

export default function Slider() {
	return(
		<div>
		<Nubes />
		<div className='bg-[url("/public/img/slider.jpg")] bg-no-repeat pt-80 bg-scroll bg-cover'>
			<Categorias />
		</div>
		</div>
	);
}
