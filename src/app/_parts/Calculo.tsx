"use client"
import { useState } from "react"

export function Calculo(){

    const [Larg, setLarg] = useState('0')
    const [Alt, setAlt] = useState('0')
    const [Comp, setComp] = useState('0')
    const [Res, setResult] = useState<number>(0)
    const [Calc, setCalc] = useState('1')

    function handleAlturaChange(valor: string) {
        setAlt(valor)
        calcularResultado()
    }

    function ClickCalc(valor: string) {
    setCalc(valor)
    calcularResultado()
    }

    function handleComprimentoChange(valor: string) {
        setComp(valor)
        calcularResultado()
    }

    function handleLarguraChange(valor: string) {
        setLarg(valor)
        calcularResultado()
    }
    

    function calcularResultado() {
        
        const A = parseFloat(Alt)
        const C = parseFloat(Comp)
        const L = parseFloat(Larg)
        const BC = parseFloat(Calc)

        const resultado = A*C*L*.25*3
        setResult(resultado)
    }

    return(

        <div className="flex flex-col xl:flex-row justify-center items-center p-4 mx-auto sm:text-1xl md:text-2xl lg:text-3xl py-4">
            
            
            <label className="shadow-md border border-black bg-gray-200 text-black px-2">Altura: </label>
            <select value={Alt} onChange={(evt) => handleAlturaChange(evt.target.value)} className="shadow-md border border-black hover:bg-yellow-600 transition-colors bg-black text-white px-1">
                <option value="0">Selecione</option>
                <option value="0.5">0,5 cm</option>
                <option value="1">1 cm</option>
                <option value="1.5">1,5 cm</option>
                <option value="2">2 cm</option>
                <option value="2.5">2,5 cm</option>
                <option value="3">3 cm</option>
                <option value="3.5">3,5 cm</option>
                <option value="4">4 cm</option>
                <option value="4.5">4,5 cm</option>
                <option value="5">5 cm</option>
                <option value="5.5">5,5 cm</option>
                <option value="6">6 cm</option>
                <option value="6.5">6,5 cm</option>
                <option value="7">7 cm</option>
                <option value="7.5">7,5 cm</option>
                <option value="8">8 cm</option>
                <option value="8.5">8,5 cm</option>
                <option value="9">9 cm</option>
                <option value="9.5">9,5 cm</option>
                <option value="10">10 cm</option>
                <option value="10.5">10,5 cm</option>
                <option value="11">11 cm</option>
                <option value="11.5">11,5 cm</option>
                <option value="12">12 cm</option>
                <option value="12.5">12,5 cm</option>
                <option value="13">13 cm</option>
                <option value="13.5">13,5 cm</option>
                <option value="14">14 cm</option>
                <option value="14.5">14,5 cm</option>
                <option value="15">15 cm</option>
                <option value="15.5">15,5 cm</option>
                <option value="16">16 cm</option>
                <option value="16.5">16,5 cm</option>
                <option value="17">17 cm</option>
                <option value="17.5">17,5 cm</option>
                <option value="18">18 cm</option>
                <option value="18.5">18,5 cm</option>
                <option value="19">19 cm</option>
                <option value="19.5">19,5 cm</option>
                <option value="20">20 cm</option>
                <option value="20.5">20,5 cm</option>
                <option value="21">21 cm</option>
                <option value="21.5">21,5 cm</option>
                <option value="22">22 cm</option>
                <option value="22,5">22,5 cm</option>
                <option value="23">23 cm</option>
            </select>


            <label className="px-10">  </label>        
            <label className="shadow-md border border-black bg-gray-200 text-black px-2">Comprimento: </label>
            <select value={Comp} onChange={(evt) => handleComprimentoChange(evt.target.value)} className="shadow-md border border-black hover:bg-yellow-600 transition-colors bg-black text-white px-1">
                <option value="0">Selecione</option>
                <option value="0.5">0,5 cm</option>
                <option value="1">1 cm</option>
                <option value="1.5">1,5 cm</option>
                <option value="2">2 cm</option>
                <option value="2.5">2,5 cm</option>
                <option value="3">3 cm</option>
                <option value="3.5">3,5 cm</option>
                <option value="4">4 cm</option>
                <option value="4.5">4,5 cm</option>
                <option value="5">5 cm</option>
                <option value="5.5">5,5 cm</option>
                <option value="6">6 cm</option>
                <option value="6.5">6,5 cm</option>
                <option value="7">7 cm</option>
                <option value="7.5">7,5 cm</option>
                <option value="8">8 cm</option>
                <option value="8.5">8,5 cm</option>
                <option value="9">9 cm</option>
                <option value="9.5">9,5 cm</option>
                <option value="10">10 cm</option>
                <option value="10.5">10,5 cm</option>
                <option value="11">11 cm</option>
                <option value="11.5">11,5 cm</option>
                <option value="12">12 cm</option>
                <option value="12.5">12,5 cm</option>
                <option value="13">13 cm</option>
                <option value="13.5">13,5 cm</option>
                <option value="14">14 cm</option>
                <option value="14.5">14,5 cm</option>
                <option value="15">15 cm</option>
                <option value="15.5">15,5 cm</option>
                <option value="16">16 cm</option>
                <option value="16.5">16,5 cm</option>
                <option value="17">17 cm</option>
                <option value="17.5">17,5 cm</option>
                <option value="18">18 cm</option>
                <option value="18.5">18,5 cm</option>
                <option value="19">19 cm</option>
                <option value="19.5">19,5 cm</option>
                <option value="20">20 cm</option>
                <option value="20.5">20,5 cm</option>
                <option value="21">21 cm</option>
                <option value="21.5">21,5 cm</option>
                <option value="22">22 cm</option>
                <option value="22,5">22,5 cm</option>
            </select>


            
            <label className="px-10">  </label>
            <label className="shadow-md border border-black bg-gray-200 text-black px-2">Largura: </label>
            <select value={Larg} onChange={(evt) => handleLarguraChange(evt.target.value)} className="shadow-md border border-black hover:bg-yellow-600 transition-colors bg-black text-white px-1">
                <option value="0">Selecione</option>
                <option value="0.5">0,5 cm</option>
                <option value="1">1 cm</option>
                <option value="1.5">1,5 cm</option>
                <option value="2">2 cm</option>
                <option value="2.5">2,5 cm</option>
                <option value="3">3 cm</option>
                <option value="3.5">3,5 cm</option>
                <option value="4">4 cm</option>
                <option value="4.5">4,5 cm</option>
                <option value="5">5 cm</option>
                <option value="5.5">5,5 cm</option>
                <option value="6">6 cm</option>
                <option value="6.5">6,5 cm</option>
                <option value="7">7 cm</option>
                <option value="7.5">7,5 cm</option>
                <option value="8">8 cm</option>
                <option value="8.5">8,5 cm</option>
                <option value="9">9 cm</option>
                <option value="9.5">9,5 cm</option>
                <option value="10">10 cm</option>
                <option value="10.5">10,5 cm</option>
                <option value="11">11 cm</option>
                <option value="11.5">11,5 cm</option>
                <option value="12">12 cm</option>
                <option value="12.5">12,5 cm</option>
            </select>

            <label className="px-5">  </label>

            <button onClick={ClickCalc} className="shadow-md border border-black hover:bg-black transition-colors bg-yellow-600 text-white px-1">Calcular orçamento:</button>
            <div className="shadow-md sm:text-2xl md:text-2xl lg:text-4xl px-2 border border-green-950 bg-green-800 text-white">
                R$ {Res.toFixed(2)}
            </div>
        </div>
     )
}