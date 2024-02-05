/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Menu() {
	return(
		<div className='w-auto h-12 text-white bg-purple-950 flex items-center'>
			<div className='ml-5 font-cinzel text-3xl'>
				<h1>Un DUlce MomeNto</h1>
			</div>
			<ul className='flex right-0 font-syne italic text-lg absolute list-none mr-4'>
				<li style={{ borderBottom: "1px solid #fff" }}><a href="#">Inicio</a></li>
				<li><a href="#">Recetas</a></li>
				<li><a href="#">Contacto</a></li>
				<li><a href="#">Productos</a></li>
				<li>|</li>
				<li><a href="#">Iniciar Sesion</a></li>
			</ul>
		</div>
	);
}