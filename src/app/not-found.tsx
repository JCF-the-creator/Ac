export default function NotFound(){
    return(
        <div className=" flex flex-col items-center justify-center">
            <h1 className=" text-center font-bold mt-9 text-6xl py-2">Erro 404 - Pagina não encontrada!</h1>
            <p>A pagina que tentou acessar não existe.</p>

            <a href="/">Voltar para a página inicial</a>
        </div>
        
    )
}
