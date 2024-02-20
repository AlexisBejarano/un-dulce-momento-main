    /*export default function Perfil(){
        return(
            <div>
                <div className='bg-[url("/public/img/icon.png")] h-11 w-11 bg-35 bg-center_56% bg-purple-200 rounded-full'></div>
            </div>
        );
    }
*/

    import React, { useState } from 'react';

    export default function Perfil() {
        const [menuAbierto, setMenuAbierto] = useState(false);
      
        const toggleMenu = () => {
          setMenuAbierto(!menuAbierto);
        };
      
        return (
          <div>
            
            {menuAbierto && (
              <div className="z-10 fixed top-0 right-0 h-full w-80 bg-[#21235D] text-white p-4">
                <button className='absolute w-5 h-5 right-0 mr-4' onClick={toggleMenu}>X</button>
                <ul className='mt-10'>
                  <p>Iniciar Sesión</p>
                  <input className='text-black' />
                  <li>Registrarse</li>
                </ul>
                <br></br>
                <p>averr</p>
              </div>
            )}
            <div className='bg-[url("/public/img/icon.png")] h-10 w-10 bg-33 bg-center_56% bg-purple-200 rounded-full' onClick={toggleMenu}></div>
          </div>
        );
      }