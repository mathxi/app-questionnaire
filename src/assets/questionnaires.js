export default {
    questionnaires: [
        {
            idQuestionnaire: 1,
            label: "Tests de sécurité",
            currentQuestion: 0,
            questions: [
                //Liste des question pour ce questionnaire
                {
                    idQuestion: 1,
                    type: "checkbox",
                    label: "VERMONDEN Daniel est le plus beau ?",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "oui",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "non",
                            value: false
                        }
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "oui",
                            value: true
                        },
                        {
                            idChoice: 2,
                            label: "non",
                            value: false
                        }
                    ]
                },
                {
                    idQuestion: 2,
                    type: "checkbox",
                    label: "Tu m'aimes?",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "oui",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "non",
                            value: false
                        }
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "oui",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "non",
                            value: true
                        }
                    ]
                },
                {
                    idQuestion: 3,
                    type: "checkbox",
                    label: "Comestible?",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Pâtes",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Pneux",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Epinards",
                            value: false
                        }
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Pâtes",
                            value: true
                        },
                        {
                            idChoice: 2,
                            label: "Pneux",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Epinards",
                            value: false
                        }
                    ]
                },
                {
                    idQuestion: 4,
                    type: "checkbox",
                    label: "Quel âge à Mathieu Janio?",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "18",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "19",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "20",
                            value: false
                        },
                        {
                            idChoice: 4,
                            label: "21",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "18",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "19",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "20",
                            value: false
                        },
                        {
                            idChoice: 4,
                            label: "21",
                            value: true
                        },
                    ]
                },
                {
                    idQuestion: 5,
                    type: "checkbox",
                    label: "Le casque est-il utile?",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Oui ! tu veux mourir ?",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Non",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Oui ! tu veux mourir ?",
                            value: true
                        },
                        {
                            idChoice: 2,
                            label: "Non",
                            value: false
                        },
                    ]
                },
                {
                    idQuestion: 6,
                    type: "checkbox",
                    label: "Les gants nous protègent de tous dégats aux mains?",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Oui",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Non",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Oui",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Non",
                            value: true
                        },
                    ]
                },
            ]
        }
    ]
}