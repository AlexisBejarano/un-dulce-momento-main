import SeparadorSuperiorT from "./SeparadorSuperiorT.jsx";
import SeparadorInferiorT from "./SeparadorInferiorT.jsx";

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
    
    
    <button className='w-40 mx-2 mb-2 flex rounded-md border-none p-0 shadow-4xl hover:text-white hover:!bg-violet-950' style={backgroundBtn}>
      <div className='text-white text-xl pl-1 z-10'>|</div>
      <h5 className='items-center justify-center flex text-xs w-full'>{params.name}</h5>
      <div className='ml-auto' style={{ borderRight: '10px solid #ffffff', borderTop: '17px solid transparent', borderBottom: '15px solid transparent', zIndex: 1 }}></div>
      <div className='bg-white flex rounded-r-md'>
        <div className='bg-[url("/public/img/newIcon.png")] w-11 bg-150' style={iconPosition}></div>
        <div className='text-xl pr-1 content-center' style={line}>|</div>
      </div>
    </button>
  );
};

export default function Categorias() {
  return (
    

    <div className='w-full'>
      <SeparadorSuperiorT />
      
      {/*<div className='flex justify-center'>
        <div className='z-10' style={{borderRight: '10px solid #ffffff', borderTop: '15px solid transparent', borderBottom: '15px solid transparent'}}></div>*/}
        <h4 className='px-4 pt-1 text-center drop-shadow-xl font-podkova'>CATEGORIAS</h4>
        {/*<div className="z-10" style={{borderLeft: '10px solid #ffffff', borderTop: '15px solid transparent', borderBottom: '15px solid transparent'}}></div>
      </div>*/}
      
      <div className='my-14 flex flex-wrap justify-center'>
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
      
      <SeparadorInferiorT/>
    </div>
  );
}
