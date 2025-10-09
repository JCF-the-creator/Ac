"use client"
import useEmblaCarousel from "embla-carousel-react"
import {ChevronsLeft, ChevronsRight} from "lucide-react"
import port1 from "../../../public/Port1.jpg"
import port2 from "../../../public/Port2.jpg"
import port3 from "../../../public/Port3.jpg"
import Image from "next/image"


// na linha 34 temos a divisão do carrosel, sendo o calculo a quantidade de elementos do carrosel a mostrar por pagina
const imagens = [{
    image: port1,
},
{
    image: port2,
},
{
    image: port3
},
]

export function Portfolio(){

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 2000px)": {slidesToScroll: 3}
        }
    })

    function retroceder(){ 
        emblaApi?.scrollPrev();}
    
    function passar(){ 
        emblaApi?.scrollNext();}

   return(

    <div className="Contanier mx-auto">

        <div className="overflow-hidden" ref={emblaRef}>
           
            <div className="flex justify-start">
                {imagens.map((item,index) =>(
                <div key={index} className="flex-[0_0_100%] min-w-1 md:flex-[0_0_50%] px-15 select-none">
                   <span> 
                    <Image 
                    src={item.image}
                    alt=""
                    />
                    </span>
                </div>
            ))}
            </div>
        </div>
            
        <button className="bg-black flex items-center justify-center rounded-full hover:bg-yellow-600 transition-colors w-12 h-12 absolute left-1 -translate-y-27">
            <ChevronsLeft
            onClick={retroceder} 
            className="w-9 h-9 text-white"
            />
        </button>

        <button className="bg-black flex items-center justify-center rounded-full hover:bg-yellow-600 transition-colors w-12 h-12 absolute right-1 -translate-y-27">
            <ChevronsRight
            onClick={passar} 
            className="w-10 h-10 text-white"
            />
        </button>
    </div>

   )
}
