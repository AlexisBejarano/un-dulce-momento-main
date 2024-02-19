/* eslint-disable jsx-a11y/anchor-is-valid */
import Style from "./TextShadow.module.css";

export default function Menu() {
	return(
		<div className={`${Style.textShadow_white} flex w-auto h-14 text-white bg-purple-950 items-center`}>
			{/* AQUI FALTA OTRO DIV POR SI EL TAMAÑO DE LA PANTALLA ES MAS ESTIRADA PARA QUE EL MENU NO SE VAYA DE MAS. */}
			<div className='ml-5 font-cinzel text-3xl'>
				<h1>Un DUlce MomeNto</h1>
			</div>
			<div className='flex m-auto'>
				<input className='w-xl h-11 px-5 text-xl text-violet-950 rounded-full rounded-r-none' type="text" id="#" name="buscador" required minlength="4" placeholder="Escribe aqui una receta deliciosa..." />
				<button className='w-32 h-11 font-crimson_pro text-xl rounded-full rounded-l-none border-2 border-white text-white hover:bg-red-100 hover:text-purple-950 hover:border-l-purple-950 '>Buscar</button>
			</div>
			<ul className='flex font-syne italic text-lg list-none mr-4'>
				<li style={{ borderBottom: "1px solid #fff" }}><a href="#">Inicio</a></li>
				<li><a href="#">Recetas</a></li>
				<li><a href="#">Contacto</a></li>
				<li><a href="#">Productos</a></li>
				<li>|</li>
				<li><a href="#">X</a></li>
			</ul>
		</div>
	);
}