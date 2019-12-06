import React from 'react';
import Particles from 'react-particles-js';


const Carrousal = () => {
    const settings = {
        dots: true,
        infinite:true,
        autoplay: true,
        speed: 500
    }

    return (
        <div 
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                overflow:'hidden'
            }}
        >
            <Particles
            params= {{
                particles:{
                    number:{
                        value :150,
                        shadow:{
                            enable:true,
                            color:"#3CA901",
                            blur:5
                        
                        }
                    }
                }
            }}/>
            
            
            
        </div>
    );
};


export default Carrousal;