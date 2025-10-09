export function Header(){
  return(
    //https://tailwindcss.com/docs/background-color cores de fundo
    // div é um para separar algo na tela, seja imagem, layout
    // <b> negrito <i>italico
    <header className="flex px-2 py-4 bg-white text-stone-950"> 
      <div className="flex items-center space-x-2">
        <img src="logo advanc3d atualizado.png" height="40px" width="40px" alt=""/>
          <a href="/" className="inline-block">
          <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-bold">
          Advanc3D Creation | HOME
          </button>
        </a>
      </div>
      <div className="flex items-justify-between ml-auto space-x-2"> 
        <a href="#Contato" className="inline-block">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors">
          Contato
          </button>
        </a>
        <a href="#Orçamento" className="inline-block">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors">
          Orçamento
          </button>
        </a>
      </div>
     
    </header>
  )
}