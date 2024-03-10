const Card = () => {
   return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                Electronics
            </span>
            <img className="w-full h-full object-cover rounded-lg"
             src="https://media.istockphoto.com/id/860853774/es/foto/auriculares-azul-aislado-sobre-un-fondo-blanco.jpg?s=612x612&w=is&k=20&c=8BcnjTjhdula0Wbhe_q8JICMjmxUV0Sm_ILy-Y-ZDn4=" alt="hadphones"></img>
            <div className="absolute top-0 right-0 flex justify-center items-center bg-gray-50 w-6 h-6 rounded-full text-center text-medium m-2 p-1">+</div>
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-light">Headphones</span>
            <span  className="text-lg font-medium">$300</span>
        </p>
    </div>
   ) 
}

export default Card;