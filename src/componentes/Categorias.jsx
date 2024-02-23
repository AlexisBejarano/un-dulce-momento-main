import Style from "./TextShadow.module.css";

const CategoriaBtn = (params) => {
  const colors = {
    Comida: "#FDF9C4",
    Asiatico: "#FFE1FE",
    Reposteria: "#D8F8E1",
    Bebidas: "#FCB7AF",
    Ensaladas: "#B0C2F2",
    Pasteleria: "#D5B0F2",
    Desayunos: "#D8F8E1",
    Postres: "#B0EEF2",
    Salsas: "#F8E2D8",
    Panaderia: "#D5B0F2",
  };

  const positionIcons = {
    Comida: "0% 0%",
    Asiatico: "0% 14%",
    Reposteria: "-1% 28%",
    Bebidas: "0% 43%",
    Ensaladas: "-1% 57%",
    Pasteleria: "-1% 100%",
    Desayunos: "0% 85%",
    Postres: "27% 28%",
    Salsas: "26% 14%",
    Panaderia: "26% 57%",
  };

  const positionIcon = positionIcons[params.name];
  const iconPosition = {
    backgroundPosition: positionIcon,
  };

  const color = colors[params.name];
  const backgroundBtn = {
    background: color,
  };

  const line = {
    color: color,
  };

  return (


    <button className='w-36 mx-2 mb-2 flex rounded-md border-none p-0 shadow-4xl hover:text-white hover:!bg-violet-950' style={backgroundBtn}>
      <div className='text-white text-xl pl-1 z-10'>|</div>
      <h5 className={`${Style.textShadow_black} items-center justify-center flex text-xs w-full`}>{params.name}</h5>
      <div className='ml-auto border-y-transparent border-solid border-y-13 border-r-10 border-white'></div>
      <div className='bg-white flex rounded-r-md'>
        <div className='bg-[url("/public/img/newIcon.png")] w-9 bg-130' style={iconPosition}></div>
        <div className='text-xl pr-1 content-center' style={line}>|</div>
      </div>
    </button>
  );
};

export default function Categorias() {
  return (

   /* <div className="w-full backdrop-blur bg-opacity-60 bg-white py-5 relative mx-auto text-center border-b-15  border-[#21235D] shadow-4xl">*/
      <div className='w-full'>
        <div className='flex justify-center'>
          <div className='bg-[url("/public/img/adorno.png")] w-48 h-9 mb-2 mx-2 bg-300 bg-aa'></div>
          <h4 className={`${Style.textShadow_black} font-syne text-center text-2xl`}>CATEGORIAS</h4>
          <div className='bg-[url("/public/img/adorno.png")] w-48 h-9 mb-2 mx-2 bg-300 bg-ab'></div>
        </div>
        

        <div className='w-11/12 mx-auto flex flex-wrap justify-center'>
          <CategoriaBtn name="Comida" />
          <CategoriaBtn name="Asiatico" />
          <CategoriaBtn name="Reposteria" />
          <CategoriaBtn name="Bebidas" />
          <CategoriaBtn name="Ensaladas" />
          <CategoriaBtn name="Pasteleria" />
          <CategoriaBtn name="Desayunos" />
          <CategoriaBtn name="Postres" />
          <CategoriaBtn name="Salsas" />
          <CategoriaBtn name="Panaderia" />
        </div>

        <div className='h-4 w-80 mt-2 mx-auto bg-[url("/public/img/adorno.png")] bg-no-repeat bg-center_56%' style={{backgroundSize: "cover"}}></div>
      </div>
    /* </div>*/
  );
}
