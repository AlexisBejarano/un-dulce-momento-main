
import DisplayRecomendaciones from "./DisplayRecomendaciones";

export default function SectionRecomendaciones() {
  return (
    <div className='bg-white w-full text-center mt-10'>
      <div className='relative -top-3'>
        <h2 className='font-podkova text-2xl' >Recomendaciones</h2>
        <h4 className='font-podkova'>¡Lo mejor de lo mejor!</h4>
      </div>
      <DisplayRecomendaciones />
    </div>
  );
}
