/* eslint-disable jsx-a11y/alt-text */
const imageUrlRec = "#";

export default function DisplayRecomendaciones() {
  return (
    <div className='mx-auto my-8 max-w-7xl flex'>

      <div className='w-3/4 pr-8 border-r-1 border-black'>
        <h2>GELATINA DE FRESA</h2>
        <p className='px-24 flex'>
          Esta es la forma más sencilla y simple de hacer un postre o golosina
          que seguramente hace que muchos mexicanos que viven fuera de México
          recuerden a sus abuelitas o mamás preparándolos durante estas épocas
          del año.
        </p>

        <div className='m-auto justify-center flex py-9'>
          <div className='flex mx-2'>
            <img className='w-8 h-8' src={imageUrlRec} />
            <div className='text-left pl-1'>
              <h3>PREPARACION</h3>
              <h5>50 Minutos.</h5>
            </div>
          </div>
          <div className='flex mx-2 min-w-32'>
            <img className='w-8 h-8' src={imageUrlRec} />
            <div className='text-left pl-1'>
              <h3>DIFICULTAD</h3>
              <h5>Facil.</h5>
            </div>
          </div>
          <div className='flex mx-2'>
            <img className='w-8 h-8' src={imageUrlRec} />
            <div className='text-left pl-1'>
              <h3>RENDIMIENTO</h3>
              <h5>6 Pax.</h5>
            </div>
          </div>
          <div className='flex mx-2'>
            <img className='w-8 h-8' src={imageUrlRec} />
            <div className='text-left pl-1'>
              <h3>ESTACION</h3>
              <h5>Verano.</h5>
            </div>
          </div>
          <div className='flex mx-2'>
            <img className='w-8 h-8' src={imageUrlRec} />
            <div className='text-left pl-1'>
              <h3>METODO COXION</h3>
              <h5>S/N.</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='pl-12'>
      <img className='w-80 h-60' src={imageUrlRec} />
      </div>
    </div>
  );
}
