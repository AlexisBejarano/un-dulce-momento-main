/*import Style from "./TextShadow.module.css";*/
import Categorias from "./Categorias.jsx";

export default function Buscador() {
	return (
		<div className="max-w-7xl backdrop-blur bg-opacity-60 bg-white py-5 top-10 relative mx-auto text-center border-b-15  border-[#21235D] shadow-4xl rounded-t-2xl">
			{/*<h1 className={`${Style.textShadow_black} font-syne text-4xl sm:text-5xl text-black`}>¿De qué tienes antojo hoy?</h1>*/}
			<Categorias />
			{/*<p className={`${Style.textShadow_lite} font-crimson_pro italic py-1 text-2xl text-violet-950`}>¡Encuentra el mejor platillo para ese antojo!</p>*/}
		</div>
	);
}
