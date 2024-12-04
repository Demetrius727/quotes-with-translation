import { useState, useEffect } from "react";

const Citacao = ({ texto, autor }) => {
    const [traducao, setTraducao] = useState("");

    // Resetar a tradução quando o texto da citação mudar
    useEffect(() => {
        setTraducao("");
    }, [texto]);

    async function traduzirCitacao(idioma) {
        try {
            const response = await fetch(
                `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${idioma}&dt=t&q=${encodeURIComponent(texto)}`
            );

            const data = await response.json();
            
            const traducaoCompleta = data[0].map(segmento => segmento[0]).join(" "); // Junta todos os segmentos de tradução em uma string única
            setTraducao(traducaoCompleta);
            
        } catch (error) {
            console.error("Erro ao traduzir", error);
        }
    }

    return (
        <div className="p-3">
            <blockquote className="blockquote">
                <p>{traducao ? traducao : texto}</p>
                <footer className="blockquote-footer">{autor}</footer>
            </blockquote>
            <button className="btn btn-secondary mr-1" onClick={() => traduzirCitacao("en")}>
                English
            </button>
            <button className="btn btn-secondary m-1" onClick={() => traduzirCitacao("es")}>
                Español
            </button>
        </div>
    );
};

export default Citacao;
