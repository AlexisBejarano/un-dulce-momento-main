import Style from "./TextShadow.module.css";

export default function Buscador() {
	return (
		<div className="max-w-7xl backdrop-blur bg-opacity-80 bg-white py-14 sm:py-12 mx-auto mb-12 text-center border-b-15  border-[#21235D] shadow-4xl lg:rounded-t-2xl">
			<h1 className={`${Style.textShadow_black} font-syne text-4xl sm:text-5xl text-black`}>¿De qué tienes antojo hoy?</h1>
			<div className='sm:flex w-11/12 max-w-4xl m-auto'>
				<input className='w-5/6 h-14 pl-6 mt-3 sm:mt-5 rounded-full sm:rounded-r-none border-1 border-violet-950' type="text" id="#" name="buscador" required minlength="4" placeholder="Escribe aqui una receta deliciosa..." />
				<button className='w-40 h-14 mt-3 font-crimson_pro text-xl sm:mt-5 rounded-full sm:rounded-l-none bg-violet-950 text-white hover:bg-red-100 hover:text-black hover:border-[#21235D] hover:border-1'>Buscar</button>
			</div>
			<p className={`${Style.textShadow_lite} font-crimson_pro italic py-1 text-2xl text-violet-950`}>¡Encuentra el mejor platillo para ese antojo!</p>
		</div>
	);
}
