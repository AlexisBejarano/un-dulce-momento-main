import Nubes from './Nubes.jsx';
import Categorias from './Categorias.jsx';

export default function Slider() {
	return(
		<div>
		<Nubes />
		<div className='bg-[url("/public/img/slider.jpg")] bg-no-repeat pt-390 bg-scroll bg-cover'>
			<div className='bg-[url("/public/img/nubesApartado3.png")] w-full h-60 bg-700'></div>
		</div>
		<Categorias />
		</div>
	);
}
