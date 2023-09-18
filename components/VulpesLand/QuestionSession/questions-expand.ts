export type QuestionType = {
    TITLE: string,
    DESCRIPTION: string,
    menuExpanded: string,
}

export const QUESTION = {
    Q1: {
        TITLE: "Quanto tempo dura o contrato?",
        DESCRIPTION: "Nossos contratos possuem a duração de 6 meses, mas também temos o de 3 com algumas condições especiais."
    } as QuestionType,
    Q2: {
        TITLE: "Quais as formas de pagamento?",
        DESCRIPTION: "Pix, transferência bancária e boleto."
    } as QuestionType,
    Q3: {
        TITLE: "Em qual plataforma são realizadas as aulas?",
        DESCRIPTION: "As aulas acontecem ao vivo, através do Google Meet."
    } as QuestionType,
    Q4: {
        TITLE: "Quanto tempo dura uma aula?",
        DESCRIPTION: "Nossas aulas possuem a duração de 50 minutos."
    } as QuestionType,
    Q5: {
        TITLE: "A Vulpes utiliza material pronto?",
        DESCRIPTION: "Não! Nossas aulas são 100% personalizadas para você e o seu objetivo, portanto, o professor sempre utiliza o material necessário para sua aula."
    } as QuestionType,
    Q6: {
        TITLE: "A Vulpes fornece certificado?",
        DESCRIPTION: "Sim!"
    } as QuestionType,
    Q7: { 
        TITLE: "Quais os planos e modalidades?",
        DESCRIPTION: "Temos aulas individuais, em dupla e mistas, podendo ir de 1x a 3x na semana."
    } as QuestionType,
};
