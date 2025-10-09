'use client'
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";

// telefone aleatorio no contato wa.me
export function Contato(){
    return(
    <div>

        <div  className="Contanier justify-center text-center font-bold pt-5">
        <section id="Contato">
            <strong className="sm:text-4xl md:text-5xl lg:text-6xl">Contato</strong>
        </section>
            <p className="flex-col my-5 items-center justify-center sm:text-3xl md:text-3xl lg:text-4xl">Entre em contato conosco para definir os detalhes do seu projeto 3D, ou para mais informações.</p>
            
        <div className="text-white gap-2 flex flex-col xl:flex-row justify-center items-center p-4 mx-auto sm:text-1xl md:text-2xl lg:text-3xl py-4">
            
            <a href={"https://wa.me/5519987654321?text=Olá vim pelo site e gostaria de mais informações"} target='_blank' className="gap-2 bg-green-600 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit hover:bg-yellow-600 transition-colors">
                <WhatsappLogo/>Inicie uma Conversa
            </a>

            <label className="px-15">  </label>
            <a href={"https://www.instagram.com/advanc3dcreation?igsh=dGpsYnFjYjZvZm5u"} target='_blank' className="gap-2 bg-fuchsia-800 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit hover:bg-yellow-600 transition-colors">
                <InstagramLogo/>Veja nosso Perfil
            </a>
        </div>

        </div>

    </div>
        )
}