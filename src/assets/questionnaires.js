export default {
    questionnaires: [
        {
            idQuestionnaire: 1,
            label: "Situations dangereuses",
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
                    ],
                    solution: "Devons nous nous poser cette question ?"
                },
                {
                    idQuestion: 2,
                    type: "checkbox",
                    label: "Pour décharger le camion de l'entreprise je:",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Demande d'aide",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "m'en charge  💪🏻",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Je ne le decharge pas",
                            value: false
                        }
                    ],
                    trueAnswer: [// les réponses attendu
                        {
                            idChoice: 1,
                            label: "Demande d'aide",
                            value: true
                        },
                        {
                            idChoice: 2,
                            label: "m'en charge  💪🏻",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Je ne le decharge pas",
                            value: false
                        }
                    ],
                    solution: "Je ne prend pas de risques, pour ma santé et le bon fonctionnement de l'entreprise."
                },
                {
                    idQuestion: 3,
                    type: "checkbox",
                    label: "Je manipule un outil dangereux ",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Ce n'est pas grave je gère ",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "J'ai des protections adaptées",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Dieu me protège 🙏🏻",
                            value: false
                        }
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Ce n'est pas grave je gère ",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "J'ai des protections adaptées",
                            value: true
                        },
                        {
                            idChoice: 3,
                            label: "Dieu me protège 🙏🏻",
                            value: false
                        }
                    ],
                    solution: "Je suis compétant dans le domaine que je pratique et j'utilise donc avec intelligence les outils fournis"
                },
                {
                    idQuestion: 4,
                    type: "checkbox",
                    label: "Je travail a proximité des machines dans le datacenter je:",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "suis attentif à mes mouvements ",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "fait un Cache-cache avec le stagiaire !",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "demande les bonnes pratiques à mon collègue",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "suis attentif à mes mouvements ",
                            value: true
                        },
                        {
                            idChoice: 2,
                            label: "fait un Cache-cache avec le stagiaire !",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "demande les bonnes pratiques à mon collègue",
                            value: true
                        },
                    ],
                    solution: "Il est important lorsque l'on travail sur des points critiques de l'entreprise, d'être attentif à ce que l'on fait. De plus il est important de demander les bons usages et coutumes."
                },
                {
                    idQuestion: 5,
                    type: "checkbox",
                    label: "Les gants me protègent de tout dommages",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Bien sûr!",
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
                            label: "Bien sûr!",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Non",
                            value: true
                        },
                    ],
                    solution: "Bien qu'ils soient très utiles ils ne sont pas omnipotents"
                },
                {
                    idQuestion: 6,
                    type: "checkbox",
                    label: "Je suis le dernier employer je:",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "J'active l'alarme",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "ferme seulement mon bureau ",
                            value: false
                        },
                        {
                            idChoice: 1,
                            label: "m'assure que tout est bien fermé ",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "J'allume certaines lumières ",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "J'active l'alarme",
                            value: true
                        },
                        {
                            idChoice: 2,
                            label: "ferme seulement mon bureau",
                            value: false
                        },
                        {
                            idChoice: 1,
                            label: "m'assure que tout est bien fermé",
                            value: true
                        },
                        {
                            idChoice: 2,
                            label: "J'éteins toutes les lumière",
                            value: true
                        },
                    ],
                    solution: "Si je suis le dernier à quitter l'établissement il m'incombe de m'assurer que la sécurité du bâtiment est en bonne et due forme. L'alarme doit être activée, les portes fermées et certaines lumières allumées Pour simuler une présence."

                },
                {
                    idQuestion: 7,
                    type: "checkbox",
                    label: "Une araignée est au dessus de mon collège qui en a la phobie je:",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Je lance une claquette pour tenter de la tuer",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Je ne dit et fait rien ",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Je la tue avec la super raquette électrique",
                            value: false
                        },
                        {
                            idChoice: 4,
                            label: "Je tente de l'attraper pour ensuite la remettre dans la nature ",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Je lance une claquette pour tenter de la tuer",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Je ne dit et fait rien ",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Je la tue avec la super raquette électrique",
                            value: false
                        },
                        {
                            idChoice: 4,
                            label: "Je tente de l'attraper pour ensuite la remettre dans la nature ",
                            value: true
                        },
                    ],
                    solution: "Oui l'entreprise dispose d'une raquette électrique ultra-puissante pour tuer tout les moustiques et autres mais les araignées sont importantes au sein de la nature, arrêtons de les tuer et sauvons notre planète. 🌿"
                },
                {
                    idQuestion: 8,
                    type: "checkbox",
                    label: "De l'eau s'infiltre dans l'open space",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Je compte le nombre de gouttes d'eau ",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Je met un sceau avant tout",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Je préviens le patron",
                            value: false
                        },
                        {
                            idChoice: 4,
                            label: "Ça passera demain ils ont prévu moins de pluie",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Je compte le nombre de gouttes d'eau 🧐",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Je met un sceau avant tout",
                            value: true
                        },
                        {
                            idChoice: 3,
                            label: "Je préviens le patron 🧙‍",
                            value: true
                        },
                        {
                            idChoice: 4,
                            label: "Ça passera demain ils ont prévu moins de pluie 💦",
                            value: false
                        },
                    ],
                    solution: "Le matériel est important il faut donc le protéger avant tout puis prévenir mon supérieur."
                },
                {
                    idQuestion: 9,
                    type: "checkbox",
                    label: "Cette question est:",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Vraie 😈",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Fausse 👿",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Vraie",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Fausse",
                            value: false
                        },
                    ],
                    solution: "La vie n'est pas noir ou blanche, c'est un mélange de haut et de bas, il faut donc savoir tempérer.🤣✌"
                },
                {
                    idQuestion: 10,
                    type: "checkbox",
                    label: "Quel est le sens de la vie?",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "0",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "1",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "42",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "0",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "1",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "42",
                            value: true
                        },
                    ],
                    solution: "Auparavant lorsque nous recherchions cette question sur Google la réponse était : 42, du fait de ses nombreux liens mathématiques et physiques."
                },
            ]
        },
        {
            idQuestionnaire: 2,
            label: "Situations d'urgences",
            currentQuestion: 0,
            questions: [
                //Liste des question pour ce questionnaire
                {
                    idQuestion: 1,
                    type: "checkbox",
                    label: "Notre entreprise dispose d'un defrebrillateur, où se situe-t-il ?",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Toilettes 🚽",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Couloir principal",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Cafétéria ☕",
                            value: false
                        }
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Toilettes 🚽",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Couloir principal",
                            value: true
                        },
                        {
                            idChoice: 3,
                            label: "Cafétéria ☕",
                            value: false
                        }
                    ],
                    solution: "Il est important de savoir où ce situe ce genre de dispositifs médial car en cas d'arrêt cardiaque, sois une mort subite d'un individu, il faut agir le plus vite possible, en pratiquant les gestes qui sauvent ( massage, defébrillation ). Ainsi le cœur peut repartir évitant ainsi de lourdes séquelles, voire la mort."
                },
                {
                    idQuestion: 2,
                    type: "checkbox",
                    label: "Où se situe les sorties de secours ?",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Escalier",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Bureau de Jeff Bezos",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Open Space",
                            value: false
                        }
                    ],
                    trueAnswer: [// les réponses attendu
                        {
                            idChoice: 1,
                            label: "Escalier",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Bureau de Jeff Bezos",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Open Space",
                            value: true
                        }
                    ],
                    solution: "En cas d'incendie ou autre situation d'urgence il est important de connaître où se situe les sorties de secours pour la sécurité de tous."
                },
                {
                    idQuestion: 3,
                    type: "checkbox",
                    label: "J'ai eu un accident avec la voiture de service",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "J'appel mon supérieur",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "J'appel les secours",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "J'appel ma maman",
                            value: false
                        }
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "J'appel mon supérieur",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "J'appel les secours",
                            value: true
                        },
                        {
                            idChoice: 3,
                            label: "J'appel ma maman",
                            value: false
                        }
                    ],
                    solution: "En cas d'accident il est important de connaître les premiers geste pour la protection de tous"
                },
                {
                    idQuestion: 4,
                    type: "checkbox",
                    label: "Le détecteur de fumée présente un faux contact et fait que sonner",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Je l'enlève définitivement",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "J'appel un spécialiste",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Je change de bureau",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Je l'enlève définitivement",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "J'appel un spécialiste",
                            value: true
                        },
                        {
                            idChoice: 3,
                            label: "Je change de bureau",
                            value: true
                        },
                    ],
                    solution: "un détecteur de fumée est très important pour prévenir un feu ainsi, réduire au maximum les dégâts humains comme matériels"
                },
                {
                    idQuestion: 5,
                    type: "checkbox",
                    label: "Un collègue fait un malaise au seins de l'entreprise, que devez-vous faire?",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Appelez un collègue compétant",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Contacter les pompiers",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Le mettre en PLS",
                            value: false
                        },
                        {
                            idChoice: 4,
                            label: "Le bouger",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Appelez un collègue compétant",
                            value: true
                        },
                        {
                            idChoice: 2,
                            label: "Contacter les pompiers",
                            value: true
                        },
                        {
                            idChoice: 3,
                            label: "Le mettre en PLS",
                            value: true
                        },
                        {
                            idChoice: 4,
                            label: "Le bouger",
                            value: false
                        },
                    ],
                    solution: "Les premiers gestes de secours sont importants pour minimiser les séquelles."
                },
                {
                    idQuestion: 6,
                    type: "checkbox",
                    label: "Il n'y a plus internet sur mon ordinateur et ceux de mes collègues. Je:",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "rentre chez moi",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "contact le support",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "rentre chez moi",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "contact le support",
                            value: true
                        },
                    ],
                    solution: "De nos jours internet est très important dans les entreprises une solution doit être vite trouvé car le temps c'est de l'argent."

                },
                {
                    idQuestion: 7,
                    type: "checkbox",
                    label: "Une coupure de courant intervient:",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Je fais une petite sieste ",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Je le relais à mon supérieur ",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Je fais une petite sieste ",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Je le relais à mon supérieur ",
                            value: true
                        },
                    ],
                    solution: "Les résponsables doivent être au courant des situations problèmatique afin de les régler."
                },
                {
                    idQuestion: 8,
                    type: "checkbox",
                    label: "Une voiture bloque l'accès au parking de mon entreprise.",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "J'appelle la fourrière",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Je lui casse le pare-brise",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Je cherche le propriétaire",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "J'appelle la fourrière",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Je lui casse le pare-brise",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Je cherche le propriétaire",
                            value: false
                        },
                    ],
                    solution: "Le matériel est important il faut donc le protéger avant tout puis prévenir mon supérieur."
                },
                {
                    idQuestion: 9,
                    type: "checkbox",
                    label: "Cette question est:",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Vraie 😈",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Fausse 👿",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Vraie",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Fausse",
                            value: false
                        },
                    ],
                    solution: "La vie n'est pas noir ou blanche, c'est un mélange de haut et de bas, il faut donc savoir tempérer.🤣✌"
                },
                {
                    idQuestion: 10,
                    type: "checkbox",
                    label: "Quel est le sens de la vie?",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "0",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "1",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "42",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "0",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "1",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "42",
                            value: false
                        },
                    ],
                    solution: "Il y a quelques temps quand l'on tapais cette question dans google il nous répondait 42. Celà est du au fait que 42 est la réponse a beaucoup de choses en mathématique / physique."
                },
            ]
        },


    ]
}