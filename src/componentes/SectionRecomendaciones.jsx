
import DisplayRecomendaciones from "./DisplayRecomendaciones";

export default function SectionRecomendaciones() {
  return (
    <div className='bg-white w-full text-center'>
      <div className='relative -top-3'>
        <h2 className='font-podkova text-2xl' >Recomendaciones</h2>
        <h4 className='font-podkova'>¡Lo mejor de lo mejor!</h4>
        <div className='h-4 w-80 m-auto bg-[url("/public/img/adorno2.png")] bg-no-repeat bg-center_56%' style={{backgroundSize: "cover"}}></div>
      </div>
      <DisplayRecomendaciones />
    </div>
  );
}
