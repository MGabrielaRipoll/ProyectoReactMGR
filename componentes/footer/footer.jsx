import "./footer.scss"

export const Footer = () => {
    return (
        <div className="contenedor_footer">
            <div className=" bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Visita nuestras redes
                </h2>
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://firebasestorage.googleapis.com/v0/b/proyectoreactjs-33076.appspot.com/o/facebook.png?alt=media&token=706abb16-f22c-4504-ae06-680dec5b24af"
                        alt="facebook_logo"
                        width={70}
                        height={70}
                        />
                        <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://firebasestorage.googleapis.com/v0/b/proyectoreactjs-33076.appspot.com/o/ig.png?alt=media&token=1e77d626-036b-4ea9-8b5b-5b65750021b7"
                        alt="Instagram_logo"
                        width={70}
                        height={70}
                        />
                        <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://firebasestorage.googleapis.com/v0/b/proyectoreactjs-33076.appspot.com/o/linkedin.avif?alt=media&token=f7c0d4ce-9155-4085-a014-45315308848b"
                        alt="Tuple"
                        width={70}
                        height={70}
                        />
                        
                    </div>
                </div>
            </div>
        </div>
        
        )
    }
  