define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Questionnaire',
        decline: false,
        declineText: isTouch ? 'Refuser' : 'Refuser de répondre', 
        autoFocus:true, 
        progressBar:  'Page <%= pagesMeta.number %> sur 12'
    });


    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Veuillez sélectionner une réponse ou cliquer sur \'Refuser\'' 
                : 'Veuillez sélectionner une réponse ou cliquer sur \'Refuser de répondre\''
        },
        autoSubmit:'false',
        numericValues:'true'
	});
    API.addQuestionsSet('basicSelect',{ //Sélection unique 
        inherit :'basicQ',
        type: 'selectOne'
    });
	
    API.addQuestionsSet('basicDropdown',{ //Menu déroulant 
        inherit :'basicQ',
        type : 'dropdown',
        autoSubmit:false
    });

	API.addQuestionsSet('basicText',{
		inherit : 'basicQ',
		type : 'text',
	});

	API.addQuestionsSet('basicMulti',{ //Sélection unique 
        inherit :'basicQ',
        type: 'selectMulti'
    });
	
    API.addQuestionsSet('likert5',{ //Likert
        inherit: 'basicSelect',
        answers: [
            {text:'Tout à fait d\'accord', value:4},
			{text:'Plutôt d\'accord', value:3},
			{text:'Plutôt pas d\'accord', value:2},
			{text:'Pas du tout d\'accord', value:1}
        ]
    });

	API.addQuestionsSet('basicGrid',{
		inherit: 'basicQ',
		type: 'grid',
		rowStemHide: true,
		checkboxType : 'colorMark',
		helpText: false,
		columns: [
			{stem: '1 - Pas du tout d\'accord', css: {width: '10%'}},
			{stem: '2 - Plutôt d\'accord', css: {width: '10%'}},
			{stem: '3 - Plutôt pas d\'accord', css: {width: '10%'}},
			{stem: '4 - Tout à fait d\'accord', css: {width: '10%'}}
		]
	}),

	API.addQuestionsSet('9',{
		inherit : 'basicSelect',
		stem : 'Enseignez-vous cette matière ailleurs que dans l\'Université Gustave Eiffel ?',
		answers : [
			{text: 'Oui', value: 1},
			{text: 'Non', value: 2}
			]
	});

	API.addQuestionsSet('10',{
		inherit : 'basicSelect',
		stem : 'Depuis combien de temps enseignez-vous cette matière, que ce soit à l\'Université Gustave Eiffel ou ailleurs ?',
		answers : [
			{text: 'Moins d\'un an', value: 1},
			{text: 'Deux ans', value: 2},
			{text: 'Depuis 3 à 5 ans', value: 3},
			{text: 'Depuis 6 à 10 ans', value: 4},
			{text: 'Depuis plus de 10 ans', value: 5}
			]
	});
			
	API.addQuestionsSet('11',{
		inherit : 'basicSelect',
		stem : 'Depuis combien de temps enseignez-vous cette matière à l\'Université Gustave Eiffel ?',
		answers : [
			{text: 'Moins d\'un an', value: 1},
			{text: 'Deux ans', value: 2},
			{text: 'Depuis 3 à 5 ans', value: 3},
			{text: 'Depuis 6 à 10 ans', value: 4},
			{text: 'Depuis plus de 10 ans', value: 5}
			]
	});	


	//

	API.addQuestionsSet('6',{
		inherit : 'basicDropdown',
		name : 'prof_annees', 
		stem : 'Depuis combien d\'années enseignez-vous, quelle que soit la matière et quel que soit le niveau ?', 
		answers : [
			{text:'Moins d\'un an', value:1},
	        {text:'2 ans', value:2},
	        {text:'Depuis 3 à 5 ans', value:3},
	        {text:'Depuis 6 à 10 ans', value:4},
	        {text:'Depuis plus de 10 ans', value:5},
			]
	});

	API.addQuestionsSet('7-1',{
		inherit: 'basicSelect', 
		name : 'L1', 
		stem : 'Enseignez-vous en licence 1 (L1) à l\'Université Gustave Eiffel ?',
		answers : [
			{text: 'Oui', value: 1},
			{text: 'Non', value: 2}
			]
	});

	API.addQuestionsSet('7-1-2',{
		inherit: 'basicSelect', 
		name : 'L1-2', 
		stem : 'Enseignez-vous une autre matière en licence 1 (L1) à l\'Université Gustave Eiffel ?',
		answers : [
			{text: 'Oui', value: 1},
			{text: 'Non', value: 2}
			]
	});

	API.addQuestionsSet('7-1-3',{
		inherit: 'basicSelect', 
		name : 'L1-3', 
		stem : 'Enseignez-vous une autre matière en licence 1 (L1) à l\'Université Gustave Eiffel ?',
		answers : [
			{text: 'Oui', value: 1},
			{text: 'Non', value: 2}
			]
	});

	API.addQuestionsSet('7-1-4',{
		inherit: 'basicSelect', 
		name : 'L1-4', 
		stem : 'Enseignez-vous une autre matière en licence 1 (L1) à l\'Université Gustave Eiffel ?',
		answers : [
			{text: 'Oui', value: 1},
			{text: 'Non', value: 2}
			]
	});

	API.addQuestionsSet('7-2',{
		inherit: 'basicSelect', 
		name : 'L2', 
		stem : 'Enseignez-vous en licence 2 (L2) à l\'Université Gustave Eiffel ?',
		answers : [
			{text: 'Oui', value: 1},
			{text: 'Non', value: 2}
			]
	});

	API.addQuestionsSet('7-2-2',{
		inherit: 'basicSelect', 
		name : 'L2-2', 
		stem : 'Enseignez-vous une autre matière en licence 2 (L2) à l\'Université Gustave Eiffel ?',
		answers : [
			{text: 'Oui', value: 1},
			{text: 'Non', value: 2}
			]
	});

	API.addQuestionsSet('7-2-3',{
		inherit: 'basicSelect', 
		name : 'L2-3', 
		stem : 'Enseignez-vous une autre matière en licence 2 (L2) à l\'Université Gustave Eiffel ?',
		answers : [
			{text: 'Oui', value: 1},
			{text: 'Non', value: 2}
			]
	});

	API.addQuestionsSet('7-2-4',{
		inherit: 'basicSelect', 
		name : 'L2-4', 
		stem : 'Enseignez-vous une autre matière en licence 2 (L2) à l\'Université Gustave Eiffel ?',
		answers : [
			{text: 'Oui', value: 1},
			{text: 'Non', value: 2}
			]
	});

	API.addQuestionsSet('7-3',{
		inherit: 'basicSelect', 
		name : 'L3', 
		stem : 'Enseignez-vous en licence 3 (L3) Gestion à l\'Université Gustave Eiffel ?',
		answers : [
			{text: 'Oui', value: 1},
			{text: 'Non', value: 2}
			]
	});

	API.addQuestionsSet('7-3-2',{
		inherit: 'basicSelect', 
		name : 'L3-2', 
		stem : 'Enseignez-vous une autre matière en licence 3 (L3) Gestion à l\'Université Gustave Eiffel ?',
		answers : [
			{text: 'Oui', value: 1},
			{text: 'Non', value: 2}
			]
	});

	API.addQuestionsSet('7-3-3',{
		inherit: 'basicSelect', 
		name : 'L3-3', 
		stem : 'Enseignez-vous une autre matière en licence 3 (L3) Gestion à l\'Université Gustave Eiffel ?',
		answers : [
			{text: 'Oui', value: 1},
			{text: 'Non', value: 2}
			]
	});

	API.addQuestionsSet('7-3-4',{
		inherit: 'basicSelect', 
		name : 'L3-4', 
		stem : 'Enseignez-vous une autre matière en licence 3 (L3) Gestion à l\'Université Gustave Eiffel ?',
		answers : [
			{text: 'Oui', value: 1},
			{text: 'Non', value: 2}
			]
	});

	API.addQuestionsSet('8L1',{
		inherit: 'basicMulti',
		name: 'matieresL1', 
		stem: 'Quelle(s) matière(s) enseignez-vous en TD cette à l\'Université Gustave Eiffel en licence ? <i>Plusieurs réponses possibles</i>',
		answers: [
			{text: 'Anglais 1', value: 1},
			{text: 'Mathématiques 1', value: 2},
			{text: 'Statistiques descriptives 1', value: 3},
			{text: 'Introduction à l\'économie', value: 4},
			{text: 'Introduction à la gestion et au management', value: 5}, 
			{text: 'Langue vivante 2', value: 6}, 
			{text: 'Microéconomie 1', value: 7}, 
			{text: 'Macroéconomie 1', value: 8}, 
			{text: 'Enjeux du management des organisation', value: 9},
			{text: 'Comptabilité générale 1', value: 10},
			{text: 'Méthode de travail et projet professionnel', value: 11},
			{text: 'Mathématiques 2', value: 12},
			{text: 'Statistiques descriptives 2', value: 13}
			]
	});

	API.addQuestionsSet('8L2',{
		inherit: 'basicDropdown',
		name: 'matièresL2', 
		stem: 'Quelle(s) matière(s) enseignez-vous en TD cette à l\'Université Gustave Eiffel en licence ? <i>Plusieurs réponses possibles</i>',
		answers: [
			{text: 'Microéconomie 2', value: 1},
			{text: 'Macroéconomie 2', value: 2},
			{text: 'Comptabilité générale 2', value: 3},
			{text: 'Introduction aux ressources humaines', value: 4},
			{text: 'Etudes marketing', value: 5}, 
			{text: 'Mathématiques', value: 6}, 
			{text: 'Probabilités', value: 7}, 
			{text: 'Anglais (S1)', value: 8}, 
			{text: 'Macroéconomie 3', value: 9},
			{text: 'Politiques économiques et sociales', value: 10},
			{text: 'Monnaie et finance', value: 11},
			{text: 'Analyse financière', value: 12},
			{text: 'Gestion de production', value: 13},
			{text: 'Analyse des données', value: 14}, 
			{text: 'Anglais (S2)', value: 15}
			]
	});

	API.addQuestionsSet('8L3',{
		inherit: 'basicDropdown',
		name: 'matièresL3', 
		stem: 'Quelle(s) matière(s) enseignez-vous en TD cette à l\'Université Gustave Eiffel en licence ? <i>Plusieurs réponses possibles</i>',
		answers: [
			{text: 'Marketing durable (S5)', value: 1},
			{text: 'Anglais (S5)', value: 2},
			{text: 'Fondamentaux de la stratégie (S5)', value: 3},
			{text: 'Anglais (S6)', value: 4},
			{text: 'Statistiques descriptives (S6)', value: 5}
			]
	});

	//L1
	
	API.addQuestionsSet('l1anglais1_1',{
		inherit: '9', 
		name: 'l1anglais1_prof1',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l1anglais1_2',{
		inherit: '10', 
		name: 'l1anglais1_prof2',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l1anglais1_3',{
		inherit: '11', 
		name: 'l1anglais1_prof3',
		header: 'Anglais (S1)'
	});


	API.addQuestionsSet('l1renfo_maths1',{
		inherit: '9', 
		name: 'l1renfo_maths_prof1',
		header: 'Renforcement en mathématiques (S1)'
	});

	API.addQuestionsSet('l1renfo_maths2',{
		inherit: '10', 
		name: 'l1renfo_maths_prof2',
		header: 'Renforcement en mathématiques (S1)'
	});

	API.addQuestionsSet('l1renfo_maths3',{
		inherit: '11', 
		name: 'l1renfo_maths_prof3',
		header: 'Renforcement en mathématiques (S1)'
	});


	API.addQuestionsSet('l1maths1_1',{
		inherit: '9', 
		name: 'l1maths1_prof1',
		header: 'Mathématiques 1 (S1)'
	});

	API.addQuestionsSet('l1maths1_2',{
		inherit: '10', 
		name: 'l1maths1_prof2',
		header: 'Mathématiques 1 (S1)'
	});

	API.addQuestionsSet('l1maths1_3',{
		inherit: '11', 
		name: 'l1maths1_prof3',
		header: 'Mathématiques 1 (S1)'
	});

	API.addQuestionsSet('l1stats1_1',{
		inherit: '9', 
		name: 'l1stats1_prof1',
		header: 'Statistiques 1 (S1)'
	});

	API.addQuestionsSet('l1stats1_2',{
		inherit: '10', 
		name: 'l1stats1_prof2',
		header: 'Statistiques 1 (S1)'
	});

	API.addQuestionsSet('l1stats1_3',{
		inherit: '11', 
		name: 'l1stats1_prof3',
		header: 'Statistiques 1 (S1)'
	});

	API.addQuestionsSet('l1intro_eco1',{
		inherit: '9', 
		name: 'l1intro_eco_prof1',
		header: 'Introduction à l\'éonomie (S1)'
	});

	API.addQuestionsSet('l1intro_eco2',{
		inherit: '10', 
		name: 'l1intro_eco_prof2',
		header: 'Introduction à l\'éonomie 1 (S1)'
	});

	API.addQuestionsSet('l1intro_eco3',{
		inherit: '11', 
		name: 'l1intro_eco_prof3',
		header: 'Introduction à l\'éonomie (S1)'
	});

	API.addQuestionsSet('l1intro_gest1',{
		inherit: '9', 
		name: 'l1intro_gest_prof1',
		header: 'Introduction à la gestion et au management (S1)'
	});

	API.addQuestionsSet('l1intro_gest2',{
		inherit: '10', 
		name: 'l1intro_gest_prof2',
		header: 'Introduction à la gestion et au management (S1)'
	});

	API.addQuestionsSet('l1intro_gest3',{
		inherit: '11', 
		name: 'l1intro_gest_prof3',
		header: 'Introduction à la gestion et au management (S1)'
	});

	API.addQuestionsSet('l1micro1_1',{
		inherit: '9', 
		name: 'l1micro1_prof1',
		header: 'Microéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1micro1_2',{
		inherit: '10', 
		name: 'l1micro1_prof2',
		header: 'Microéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1micro1_3',{
		inherit: '11', 
		name: 'l1micro1_prof3',
		header: 'Microéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1macro1_1',{
		inherit: '9', 
		name: 'l1macro1_prof1',
		header: 'Macroéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1macro1_2',{
		inherit: '10', 
		name: 'l1macro1_prof2',
		header: 'Macroéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1macro1_3',{
		inherit: '11', 
		name: 'l1macro1_prof3',
		header: 'Macroéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1enjeux_manag1',{
		inherit: '9', 
		name: 'l1enjeux_manag_prof1',
		header: 'Enjeux du management des organisations (S2)'
	});

	API.addQuestionsSet('l1enjeux_manag2',{
		inherit: '10', 
		name: 'l1enjeux_manag_prof2',
		header: 'Enjeux du management des organisations (S2)'
	});

	API.addQuestionsSet('l1enjeux_manag3',{
		inherit: '11', 
		name: 'l1enjeux_manag_prof3',
		header: 'Enjeux du management des organisations (S2)'
	});

	API.addQuestionsSet('l1compta1_1',{
		inherit: '9', 
		name: 'l1compta1_prof1',
		header: 'Comptabilité générale (S2)'
	});

	API.addQuestionsSet('l1compta1_2',{
		inherit: '10', 
		name: 'l1compta1_prof2',
		header: 'Comptabilité générale (S2)'
	});

	API.addQuestionsSet('l1compta1_3',{
		inherit: '11', 
		name: 'l1compta1_prof3',
		header: 'Comptabilité générale (S2)'
	});

	API.addQuestionsSet('l1anglais2_1',{
		inherit: '9', 
		name: 'l1anglais2_prof1',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l1anglais2_2',{
		inherit: '10', 
		name: 'l1anglais2_prof2',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l1anglais2_3',{
		inherit: '11', 
		name: 'l1anglais2_prof3',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l1maths2_1',{
		inherit: '9', 
		name: 'l1maths2_prof1',
		header: 'Mathématiques 2 (S2)'
	});

	API.addQuestionsSet('l1maths2_2',{
		inherit: '10', 
		name: 'l1maths2_prof2',
		header: 'Mathématiques 2 (S2)'
	});

	API.addQuestionsSet('l1maths2_3',{
		inherit: '11', 
		name: 'l1maths2_prof3',
		header: 'Mathématiques 2 (S2)'
	});

	API.addQuestionsSet('l1stats2_1',{
		inherit: '9', 
		name: 'l1stats2_prof1',
		header: 'Statistiques 2 (S2)'
	});

	API.addQuestionsSet('l1stats2_2',{
		inherit: '10', 
		name: 'l1stats2_prof2',
		header: 'Statistiques 2 (S2)'
	});

	API.addQuestionsSet('l1stats2_3',{
		inherit: '11', 
		name: 'l1stats2_prof3',
		header: 'Statistiques 2 (S2)'
	});


	//L2

	API.addQuestionsSet('l2micro2_1',{
		inherit: '9', 
		name: 'l2micro2_prof1',
		header: 'Microéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2micro2_2',{
		inherit: '10', 
		name: 'l2micro2_prof2',
		header: 'Microéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2micro2_3',{
		inherit: '11', 
		name: 'l2micro2_prof3',
		header: 'Microéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2macro2_1',{
		inherit: '9', 
		name: 'l2macro2_prof1',
		header: 'Macroéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2macro2_2',{
		inherit: '10', 
		name: 'l2macro2_prof2',
		header: 'Macroéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2macro2_3',{
		inherit: '11', 
		name: 'l2macro2_prof3',
		header: 'Macroéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2compta2_1',{
		inherit: '9', 
		name: 'l2compta2_prof1',
		header: 'Comptabilité générale (S1)'
	});

	API.addQuestionsSet('l2compta2_2',{
		inherit: '10', 
		name: 'l2compta2_prof2',
		header: 'Comptabilité générale (S1)'
	});

	API.addQuestionsSet('l2compta2_3',{
		inherit: '11', 
		name: 'l2compta2_prof3',
		header: 'Comptabilité générale (S1)'
	});

	API.addQuestionsSet('l2intro_rh1',{
		inherit: '9', 
		name: 'l2intro_rh_prof1',
		header: 'Introduction aux ressources humaines (S1)'
	});

	API.addQuestionsSet('l2intro_rh2',{
		inherit: '10', 
		name: 'l2intro_rh_prof2',
		header: 'Introduction aux ressources humaines (S1)'
	});

	API.addQuestionsSet('l2intro_rh3',{
		inherit: '11', 
		name: 'l2intro_rh_prof3',
		header: 'Introduction aux ressources humaines (S1)'
	});


	API.addQuestionsSet('l2etudes_mark1',{
		inherit: '9', 
		name: 'l2etudes_mark_prof1',
		header: 'Etudes marketing (S1)'
	});

	API.addQuestionsSet('l2etudes_mark2',{
		inherit: '10', 
		name: 'l2etudes_mark_prof2',
		header: 'Etudes marketing (S1)'
	});

	API.addQuestionsSet('l2etudes_mark3',{
		inherit: '11', 
		name: 'l2etudes_mark_prof3',
		header: 'Etudes marketing (S1)'
	});

	API.addQuestionsSet('l2maths3_1',{
		inherit: '9', 
		name: 'l2maths3_prof1',
		header: 'Mathématiques 3 (S1)'
	});

	API.addQuestionsSet('l2maths3_2',{
		inherit: '10', 
		name: 'l2maths3_prof2',
		header: 'Mathématiques 3 (S1)'
	});

	API.addQuestionsSet('l2maths3_3',{
		inherit: '11', 
		name: 'l2maths3_prof3',
		header: 'Mathématiques 3 (S1)'
	});

	API.addQuestionsSet('l2proba1_1',{
		inherit: '9', 
		name: 'l2proba1_prof1',
		header: 'Probabilités (S1)'
	});

	API.addQuestionsSet('l2proba1_2',{
		inherit: '10', 
		name: 'l2proba1_prof2',
		header: 'Probabilités (S1)'
	});

	API.addQuestionsSet('l2proba1_3',{
		inherit: '11', 
		name: 'l2proba1_prof3',
		header: 'Probabilités (S1)'
	});

	API.addQuestionsSet('l2anglais3_1',{
		inherit: '9', 
		name: 'l2anglais3_prof1',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l2anglais3_2',{
		inherit: '10', 
		name: 'l2anglais3_prof2',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l2anglais3_3',{
		inherit: '11', 
		name: 'l2anglais3_prof3',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l2macro3_1',{
		inherit: '9', 
		name: 'l2macro3_prof1',
		header: 'Macroéconomie 3 (S2)'
	});

	API.addQuestionsSet('l2macro3_2',{
		inherit: '10', 
		name: 'l2macro3_prof2',
		header: 'Macroéconomie 2 (S2)'
	});

	API.addQuestionsSet('l2macro3_3',{
		inherit: '11', 
		name: 'l2macro3_prof3',
		header: 'Macroéconomie 3 (S2)'
	});

	API.addQuestionsSet('l2pol_eco_soc1',{
		inherit: '9', 
		name: 'l2pol_eco_soc_prof1',
		header: 'Politiques économiques et sociales (S2)'
	});

	API.addQuestionsSet('l2pol_eco_soc2',{
		inherit: '10', 
		name: 'l2pol_eco_soc_prof2',
		header: 'Politiques économiques et sociales (S2)'
	});

	API.addQuestionsSet('l2pol_eco_soc3',{
		inherit: '11', 
		name: 'l2pol_eco_soc_prof3',
		header: 'Politiques économiques et sociales (S2)'
	});

	API.addQuestionsSet('l2mon_fi1',{
		inherit: '9', 
		name: 'l2mon_fi_prof1',
		header: 'Monnaie et finance (S2)'
	});

	API.addQuestionsSet('l2mon_fi2',{
		inherit: '10', 
		name: 'l2mon_fi_prof2',
		header: 'Monnaie et finance (S2)'
	});

	API.addQuestionsSet('l2mon_fi3',{
		inherit: '11', 
		name: 'l2mon_fi_prof3',
		header: 'Monnaie et finance (S2)'
	});

	API.addQuestionsSet('l2analyse_fi1',{
		inherit: '9', 
		name: 'l2analyse_fi_prof1',
		header: 'Analyse financière (S2)'
	});

	API.addQuestionsSet('l2analyse_fi2',{
		inherit: '10', 
		name: 'l2analyse_fi_prof2',
		header: 'Analyse financière (S2)'
	});

	API.addQuestionsSet('l2analyse_fi3',{
		inherit: '11', 
		name: 'l2analyse_fi_prof3',
		header: 'Analyse financière (S2)'
	});

	API.addQuestionsSet('l2gest_prod1',{
		inherit: '9', 
		name: 'l2gest_prod_prof1',
		header: 'Gestion de production (S2)'
	});

	API.addQuestionsSet('l2gest_prod2',{
		inherit: '10', 
		name: 'l2gest_prod_prof2',
		header: 'Gestion de production (S2)'
	});

	API.addQuestionsSet('l2gest_prod3',{
		inherit: '11', 
		name: 'l2gest_prod_prof3',
		header: 'Gestion de production (S2)'
	});

	API.addQuestionsSet('l2analyse_don1',{
		inherit: '9', 
		name: 'l2analyse_don_prof1',
		header: 'Analyse des données (S2)'
	});

	API.addQuestionsSet('l2analyse_don2',{
		inherit: '10', 
		name: 'l2analyse_don_prof2',
		header: 'Analyse des données (S2)'
	});

	API.addQuestionsSet('l2analyse_don3',{
		inherit: '11', 
		name: 'l2analyse_don_prof3',
		header: 'Analyse des données (S2)'
	});

	API.addQuestionsSet('l2anglais4_1',{
		inherit: '9', 
		name: 'l2anglais4_prof1',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l2anglais4_2',{
		inherit: '10', 
		name: 'l2anglais4_prof2',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l2anglais4_3',{
		inherit: '11', 
		name: 'l2anglais4_prof3',
		header: 'Anglais (S2)'
	});

	//L3 gestion

	API.addQuestionsSet('l3marketing1',{
		inherit: '9',
		name: 'l3marketing_prof1',
		header: 'Marketing durable (S5)'
	});

    API.addQuestionsSet('l3marketing2',{
		inherit: '10',
		name: 'l3marketing_prof2',
		header: 'Marketing durable (S5)'
	});

	API.addQuestionsSet('l3marketing3',{
		inherit: '11',
		name: 'l3marketing_prof3',
		header: 'Marketing durable (S5)'
	});

    API.addQuestionsSet('l3anglais5_1',{
		inherit: '9',
		name: 'l3anglais5_prof1',
		header: 'Anglais (S5)'
	});

    API.addQuestionsSet('l3anglais5_2',{
		inherit: '10',
		name: 'l3anglais5_prof2',
		header: 'Anglais (S5)'
	});

	API.addQuestionsSet('l3anglais5_3',{
		inherit: '11',
		name: 'l3anglais5_prof3',
		header: 'Anglais (S5)'
	});

	API.addQuestionsSet('l3strat1',{
		inherit: '9',
		name: 'l3strat_prof1',
		header: 'Fondamentaux de la stratégie (S6)'
	});

    API.addQuestionsSet('l3strat2',{
		inherit: '10',
		name: 'l3strat_prof2',
		header: 'Fondamentaux de la stratégie (S6)'
	});

	API.addQuestionsSet('l3strat3',{
		inherit: '11',
		name: 'l3strat_prof3',
		header: 'Fondamentaux de la stratégie (S6)'
	});
	
    API.addQuestionsSet('l3anglais6_1',{
		inherit: '9',
		name: 'l3anglais6_prof1',
		header: 'Anglais (S6)'
	});

    API.addQuestionsSet('l3anglais6_2',{
		inherit: '10',
		name: 'l3anglais6_prof2',
		header: 'Anglais (S6)'
	});

	API.addQuestionsSet('l3anglais6_3',{
		inherit: '11',
		name: 'l3anglais6_prof3',
		header: 'Anglais (S6)'
	});

    API.addQuestionsSet('l3stats1',{
		inherit: '9',
		name: 'l3stats_prof1',
		header: 'Statistiques descriptives (S6)'
	});

    API.addQuestionsSet('l3stats2',{
		inherit: '10',
		name: 'l3stats_prof2',
		header: 'Statistiques descriptives (S6)'
	});

	API.addQuestionsSet('l3stats3',{
		inherit: '11',
		name: 'l3stats_prof3',
		header: 'Statistiques descriptives (S6)'
	});
	

	API.addQuestionsSet('12',{
		inherit : 'basicSelect',
		name : 'contrat',
		stem : 'Sous quel type de contrat enseignez-vous à l\'Université Gustave Eiffel ?', 
		answers : [
			{text : 'Professeur des universités', value:1},
			{text : 'Maître de conférences', value : 2},
			{text : 'PRAG ou PRCE', value : 3},
			{text : 'ATER', value : 4},
			{text : 'Doctorant sous contrat', value : 5},
			{text : 'Vacataire', value : 6},
			{text : 'Autre', value : 8}
			]
	});

	API.addQuestionsSet('13',{
		inherit : 'likert5',
		name : 'satisfaction',
		stem : 'Dans quelle mesure êtes-vous satisfait(e)s du métier d\'enseignant ?',
		answers : [
			{text : 'Pas du tout satisfait(e)', value:1},
			{text : 'Plutôt pas satisfait(e)', value:2},
			{text : 'Plutôt satisfait(e)', value:3},
			{text : 'Tout à fait satisfait(e)', value:4}
			]
	});
	

	API.addQuestionsSet('20',{
		inherit : 'likert5',
		name : 'biais',
		stem : 'Je pense avoir un biais envers les étudiants d\'origine mahrébine et africaine.'
	});

	
	
	API.addSequence([
		//{inherit: 'basicPage', questions: 
			//{type : 'info',
				//description: 'Nous allons maintenant vous poser des questions sur votre expérience en tant qu\'enseignant.'
			//}
		//},
		//{inherit: 'basicPage', questions: {inherit: '6'}},
		//{inherit: 'basicPage', questions: 
			//{type: 'info',
				//description: 'Les questions suivantes portent sur les matières que vous enseignez actuellement à l\'Université Gustave Eiffel.'
			//}
		//},
		{inherit: 'basicPage', questions: [
			{inherit: '7-1'},
			{remix: true, 
				mixer: 'branch',
				conditions: [
					{compare: 1, to: 'current.questions.L1.response'}
				],
				data: [
					{inherit: '8L1'},
					{mixer: 'multiBranch',
						branches: [								
							{
								conditions: [
									{compare: 'current.questions.matieresL1.response', to:1}
								],
								data: [
									{inherit:'l1anglais1_1'},
									{remix: true,
										mixer: 'multiBranch',
										branches: [
											{
												conditions: [
													{compare: 1, to:'current.questions.l1anglais_prof1.response'}
												],
												data: [
													{inherit:'l1anglais1_2'},
													{inherit:'l1anglais1_3'}
												],
											},
											{
												conditions: [
													{compare: 2, to:'current.questions.l1anglais_prof1.response'}						
												],
												data: [
													{inherit:'l1anglais1_3'}
												],
											}
										]
									}
								]
							},
							{
								conditions: [
											{compare: 'current.questions.matièresL1.response', to:2}
								],
								data: [
									{inherit:'l1maths1_1'},
									{remix: true,
										mixer: 'multiBranch',
										branches: [
											{
												conditions: [
													{compare: 1, to:'current.questions.l1maths1_prof1.response'}
												],
												data: [
													{inherit:'l1maths1_2'},
													{inherit:'l1maths1_3'}
												],
											},
											{
												conditions: [
													{compare: 2, to:'current.questions.l1maths1_prof1.response'}						
												],
												data: [
													{inherit:'l1maths1_3'}
												],
											}
										]
									}
								]
							},
							{
								conditions: [
									{compare: 'current.questions.matièresL1.response', to:3}
								],
								data: [
									{inherit:'l1stats1_1'},
									{remix: true,
										mixer: 'multiBranch',
										branches: [
											{
												conditions: [
													{compare: 1, to:'current.questions.l1stats1_prof1.response'}
												],
												data: [
													{inherit:'l1stats1_2'},
													{inherit:'l1stats1_3'}
												],
											},
											{
												conditions: [
													{compare: 2, to:'current.questions.l1stats1_prof1.response'}						
												],
												data: [
													{inherit:'l1stats1_3'}
												],
											}
										]
									}
								]
							},
							{
								conditions: [
									{compare: 'current.questions.matièresL1.response', to:4}
								],
								data: [
									{inherit:'l1intro_eco1'},
									{remix: true,
										mixer: 'multiBranch',
										branches: [
											{
												conditions: [
													{compare: 1, to:'current.questions.l1intro_eco_prof1.response'}
												],
												data: [
													{inherit:'l1intro_eco2'},
													{inherit:'l1intro_eco3'}
												],
											},
											{
												conditions: [
													{compare: 2, to:'current.questions.l1intro_eco_prof1.response'}						
												],
												data: [
													{inherit:'l1intro_eco3'}
												],
											}
										]
									}
								]
							},
							{		
								conditions: [
									{compare: 'current.questions.matièresL1.response', to:5}
								],
								data: [
									{inherit:'l1intro_gest1'},
									{remix: true,
										mixer: 'multiBranch',
										branches: [
											{
												conditions: [
													{compare: 1, to:'current.questions.l1intro_gest_prof1.response'}
												],
												data: [
													{inherit:'l1intro_gest2'},
													{inherit:'l1intro_gest3'}
												],
											},
											{
												conditions: [
													{compare: 2, to:'current.questions.l1intro_gest_prof1.response'}						
												],
												data: [
													{inherit:'l1intro_gest3'}
												],
											}
										]
									}
								]
							},
							{
								conditions: [
									{compare: 'current.questions.matièresL1.response', to:6}
								],
								data: [
									{inherit:'l1micro1_1'},
									{remix: true,
										mixer: 'multiBranch',
										branches: [
											{
												conditions: [
													{compare: 1, to:'current.questions.l1micro1_prof1.response'}
												],
												data: [
													{inherit:'l1micro1_2'},
													{inherit:'l1micro1_3'}
												],
											},
											{
												conditions: [
													{compare: 2, to:'current.questions.l1micro1_prof1.response'}						
												],
												data: [
													{inherit:'l1micro1_3'}
												],
											}
										]
									}
								]
							},
							{
								conditions: [
									{compare: 'current.questions.matièresL1.response', to:7}
								],
								data: [
									{inherit:'l1macro1_1'},
									{remix: true,
										mixer: 'multiBranch',
										branches: [
											{
												conditions: [
													{compare: 1, to:'current.questions.l1macro1_prof1.response'}
												],
												data: [
													{inherit:'l1macro1_2'},
													{inherit:'l1macro1_3'}
												],
											},
											{
												conditions: [
													{compare: 2, to:'current.questions.l1macro1_prof1.response'}						
												],
												data: [{inherit:'l1macro1_3'}
												],
											}
										]
									}
								]
							},
							{
								conditions: [
									{compare: 'current.questions.matièresL1.response', to:8}
								],
								data: [
									{inherit:'l1enjeux_manag1'},
									{remix: true,
										mixer: 'multiBranch',
										branches: [
											{
												conditions: [
													{compare: 1, to:'current.questions.l1enjeux_manag_prof1.response'}
												],
												data: [
													{inherit:'l1enjeux_manag2'},
													{inherit:'l1enjeux_manag3'}
												],
											},
											{
												conditions: [
													{compare: 2, to:'current.questions.l1enjeux_manag_prof1.response'}						
												],
												data: [
													{inherit:'l1enjeux_manag3'}
												],
											}
										]
									}
								]
									},
							{
								conditions: [
									{compare: 'current.questions.matièresL1.response', to:9}
								],
								data: [
									{inherit:'l1compta1_1'},
									{remix: true,
										mixer: 'multiBranch',
												branches: [
													{
												conditions: [
													{compare: 1, to:'current.questions.l1compta1_prof1.response'}
												],
												data: [
													{inherit:'l1compta1_2'},
													{inherit:'l1compta1_3'}
												],
											},
											{
												conditions: [
													{compare: 2, to:'current.questions.l1compta1_prof1.response'}						
												],
												data: [
													{inherit:'l1compta1_3'}
												],
											}
										]
									}
								]
							},
							{
								conditions: [
									{compare: 'current.questions.matièresL1.response', to:10}
								],
								data: [
									{inherit:'l1anglais2_1'},
											{remix: true,
										mixer: 'multiBranch',
										branches: [
											{
												conditions: [
													{compare: 1, to:'current.questions.l1anglais2_prof1.response'}
												],
												data: [
													{inherit:'l1anglais2_2'},
													{inherit:'l1anglais2_3'}
												],
											},
											{
												conditions: [
													{compare: 2, to:'current.questions.l1anglais2_prof1.response'}						
												],
												data: [
													{inherit:'l1anglais2_3'}
												],
											}
										]
									}
								]
							},
							{
								conditions: [
									{compare: 'current.questions.matièresL1.response', to:11}
								],
								data: [
									{inherit:'l1maths2_1'},
									{remix: true,
										mixer: 'multiBranch',
										branches: [
											{
												conditions: [
													{compare: 1, to:'current.questions.l1maths2_prof1.response'}
												],
												data: [
													{inherit:'l1maths2_2'},
													{inherit:'l1maths2_3'}
												],
											},
											{
												conditions: [
													{compare: 2, to:'current.questions.l1maths2_prof1.response'}						
												],
												data: [
													{inherit:'l1maths2_3'}
												],
											}
										]
									}
								]
							},
							{
								conditions: [
									{compare: 'current.questions.matièresL1.response', to:12}
								],
								data: [
									{inherit:'l1stats2_1'},
									{remix: true,
										mixer: 'multiBranch',
										branches: [
											{
												conditions: [
													{compare: 1, to:'current.questions.l1stats2_prof1.response'}
												],
												data: [
													{inherit:'l1stats2_2'},
													{inherit:'l1stats2_3'}
												],
											},
											{
												conditions: [
													{compare: 2, to:'current.questions.l1stats2_prof1.response'}						
												],
												data: [
													{inherit:'l1stats2_3'}
												],
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]},

		{mixer: 'branch',
			conditions: [
				{compare: 1, to: 'current.questions.L1.response'}
			],
			data: [
				{inherit: 'basicPage', questions: [
					{inherit: '7-1-2'},
					{remix: true, 
						mixer: 'branch',
						conditions: [
							{compare: 1, to: 'current.questions.L1-2.response'}
						],
						data: [
							{inherit: '8L1'},
							{mixer: 'multiBranch',
								branches: [
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:1}
										],
										data: [
											{inherit:'l1anglais1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1anglais_prof1.response'}
														],
														data: [
															{inherit:'l1anglais1_2'},
															{inherit:'l1anglais1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1anglais_prof1.response'}						
														],
														data: [
															{inherit:'l1anglais1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:2}
										],
										data: [
											{inherit:'l1maths1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1maths1_prof1.response'}
														],
														data: [
															{inherit:'l1maths1_2'},
															{inherit:'l1maths1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1maths1_prof1.response'}						
														],
														data: [
															{inherit:'l1maths1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:3}
										],
										data: [
											{inherit:'l1stats1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1stats1_prof1.response'}
														],
														data: [
															{inherit:'l1stats1_2'},
															{inherit:'l1stats1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1stats1_prof1.response'}						
														],
														data: [
															{inherit:'l1stats1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:4}
										],
										data: [
											{inherit:'l1intro_eco1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1intro_eco_prof1.response'}
														],
														data: [
															{inherit:'l1intro_eco2'},
															{inherit:'l1intro_eco3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1intro_eco_prof1.response'}						
														],
														data: [
															{inherit:'l1intro_eco3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:5}
										],
										data: [
											{inherit:'l1intro_gest1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1intro_gest_prof1.response'}
														],
														data: [
															{inherit:'l1intro_gest2'},
															{inherit:'l1intro_gest3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1intro_gest_prof1.response'}						
														],
														data: [
															{inherit:'l1intro_gest3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:6}
										],
										data: [
											{inherit:'l1micro1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1micro1_prof1.response'}
														],
														data: [
															{inherit:'l1micro1_2'},
															{inherit:'l1micro1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1micro1_prof1.response'}						
														],
														data: [
															{inherit:'l1micro1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:7}
										],
										data: [
											{inherit:'l1macro1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1macro1_prof1.response'}
														],
														data: [
															{inherit:'l1macro1_2'},
															{inherit:'l1macro1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1macro1_prof1.response'}						
														],
														data: [{inherit:'l1macro1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:8}
										],
										data: [
											{inherit:'l1enjeux_manag1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1enjeux_manag_prof1.response'}
														],
														data: [
															{inherit:'l1enjeux_manag2'},
															{inherit:'l1enjeux_manag3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1enjeux_manag_prof1.response'}						
														],
														data: [
															{inherit:'l1enjeux_manag3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:9}
										],
										data: [
											{inherit:'l1compta1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1compta1_prof1.response'}
														],
														data: [
															{inherit:'l1compta1_2'},
															{inherit:'l1compta1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1compta1_prof1.response'}						
														],
														data: [
															{inherit:'l1compta1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:10}
										],
										data: [
											{inherit:'l1anglais2_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1anglais2_prof1.response'}
														],
														data: [
															{inherit:'l1anglais2_2'},
															{inherit:'l1anglais2_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1anglais2_prof1.response'}						
														],
														data: [
															{inherit:'l1anglais2_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:11}
										],
										data: [
											{inherit:'l1maths2_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1maths2_prof1.response'}
														],
														data: [
															{inherit:'l1maths2_2'},
															{inherit:'l1maths2_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1maths2_prof1.response'}						
														],
														data: [
															{inherit:'l1maths2_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:12}
										],
										data: [
											{inherit:'l1stats2_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1stats2_prof1.response'}
														],
														data: [
															{inherit:'l1stats2_2'},
															{inherit:'l1stats2_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1stats2_prof1.response'}						
														],
														data: [
															{inherit:'l1stats2_3'}
														],
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]}
			]
		},

		{mixer: 'branch',
			conditions: [
				{compare: 'current.questions.L1-2.response', to: 1}
			],
			data: [
				{inherit: 'basicPage', questions: [
					{inherit: '7-1-3'},
					{remix: true, 
						mixer: 'branch',
						conditions: [
							{compare: 1, to: 'current.questions.L1-2.response'}
						],
						data: [
							{inherit: '8L1'},
							{mixer: 'multiBranch',
								branches: [
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:1}
										],
										data: [
											{inherit:'l1anglais1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1anglais_prof1.response'}
														],
														data: [
															{inherit:'l1anglais1_2'},
															{inherit:'l1anglais1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1anglais_prof1.response'}						
														],
														data: [
															{inherit:'l1anglais1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:2}
										],
										data: [
											{inherit:'l1maths1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1maths1_prof1.response'}
														],
														data: [
															{inherit:'l1maths1_2'},
															{inherit:'l1maths1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1maths1_prof1.response'}						
														],
														data: [
															{inherit:'l1maths1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:3}
										],
										data: [
											{inherit:'l1stats1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1stats1_prof1.response'}
														],
														data: [
															{inherit:'l1stats1_2'},
															{inherit:'l1stats1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1stats1_prof1.response'}						
														],
														data: [
															{inherit:'l1stats1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:4}
										],
										data: [
											{inherit:'l1intro_eco1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1intro_eco_prof1.response'}
														],
														data: [
															{inherit:'l1intro_eco2'},
															{inherit:'l1intro_eco3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1intro_eco_prof1.response'}						
														],
														data: [
															{inherit:'l1intro_eco3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:5}
										],
										data: [
											{inherit:'l1intro_gest1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1intro_gest_prof1.response'}
														],
														data: [
															{inherit:'l1intro_gest2'},
															{inherit:'l1intro_gest3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1intro_gest_prof1.response'}						
														],
														data: [
															{inherit:'l1intro_gest3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:6}
										],
										data: [
											{inherit:'l1micro1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1micro1_prof1.response'}
														],
														data: [
															{inherit:'l1micro1_2'},
															{inherit:'l1micro1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1micro1_prof1.response'}						
														],
														data: [
															{inherit:'l1micro1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:7}
										],
										data: [
											{inherit:'l1macro1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1macro1_prof1.response'}
														],
														data: [
															{inherit:'l1macro1_2'},
															{inherit:'l1macro1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1macro1_prof1.response'}						
														],
														data: [{inherit:'l1macro1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:8}
										],
										data: [
											{inherit:'l1enjeux_manag1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1enjeux_manag_prof1.response'}
														],
														data: [
															{inherit:'l1enjeux_manag2'},
															{inherit:'l1enjeux_manag3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1enjeux_manag_prof1.response'}						
														],
														data: [
															{inherit:'l1enjeux_manag3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:9}
										],
										data: [
											{inherit:'l1compta1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1compta1_prof1.response'}
														],
														data: [
															{inherit:'l1compta1_2'},
															{inherit:'l1compta1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1compta1_prof1.response'}						
														],
														data: [
															{inherit:'l1compta1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:10}
										],
										data: [
											{inherit:'l1anglais2_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1anglais2_prof1.response'}
														],
														data: [
															{inherit:'l1anglais2_2'},
															{inherit:'l1anglais2_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1anglais2_prof1.response'}						
														],
														data: [
															{inherit:'l1anglais2_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:11}
										],
										data: [
											{inherit:'l1maths2_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1maths2_prof1.response'}
														],
														data: [
															{inherit:'l1maths2_2'},
															{inherit:'l1maths2_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1maths2_prof1.response'}						
														],
														data: [
															{inherit:'l1maths2_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:12}
										],
										data: [
											{inherit:'l1stats2_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1stats2_prof1.response'}
														],
														data: [
															{inherit:'l1stats2_2'},
															{inherit:'l1stats2_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1stats2_prof1.response'}						
														],
														data: [
															{inherit:'l1stats2_3'}
														],
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]}
			]
		},

		{mixer: 'branch',
			conditions: [
				{compare: 'current.questions.L1-3.response', to: 1}
			],
			data: [
				{inherit: 'basicPage', questions: [
					{inherit: '7-1-4'},
					{remix: true, 
						mixer: 'branch',
						conditions: [
							{compare: 1, to: 'current.questions.L1-2.response'}
						],
						data: [
							{inherit: '8L1'},
							{mixer: 'multiBranch',
								branches: [
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:1}
										],
										data: [
											{inherit:'l1anglais1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1anglais_prof1.response'}
														],
														data: [
															{inherit:'l1anglais1_2'},
															{inherit:'l1anglais1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1anglais_prof1.response'}						
														],
														data: [
															{inherit:'l1anglais1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:2}
										],
										data: [
											{inherit:'l1maths1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1maths1_prof1.response'}
														],
														data: [
															{inherit:'l1maths1_2'},
															{inherit:'l1maths1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1maths1_prof1.response'}						
														],
														data: [
															{inherit:'l1maths1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:3}
										],
										data: [
											{inherit:'l1stats1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1stats1_prof1.response'}
														],
														data: [
															{inherit:'l1stats1_2'},
															{inherit:'l1stats1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1stats1_prof1.response'}						
														],
														data: [
															{inherit:'l1stats1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:4}
										],
										data: [
											{inherit:'l1intro_eco1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1intro_eco_prof1.response'}
														],
														data: [
															{inherit:'l1intro_eco2'},
															{inherit:'l1intro_eco3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1intro_eco_prof1.response'}						
														],
														data: [
															{inherit:'l1intro_eco3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:5}
										],
										data: [
											{inherit:'l1intro_gest1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1intro_gest_prof1.response'}
														],
														data: [
															{inherit:'l1intro_gest2'},
															{inherit:'l1intro_gest3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1intro_gest_prof1.response'}						
														],
														data: [
															{inherit:'l1intro_gest3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:6}
										],
										data: [
											{inherit:'l1micro1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1micro1_prof1.response'}
														],
														data: [
															{inherit:'l1micro1_2'},
															{inherit:'l1micro1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1micro1_prof1.response'}						
														],
														data: [
															{inherit:'l1micro1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:7}
										],
										data: [
											{inherit:'l1macro1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1macro1_prof1.response'}
														],
														data: [
															{inherit:'l1macro1_2'},
															{inherit:'l1macro1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1macro1_prof1.response'}						
														],
														data: [{inherit:'l1macro1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:8}
										],
										data: [
											{inherit:'l1enjeux_manag1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1enjeux_manag_prof1.response'}
														],
														data: [
															{inherit:'l1enjeux_manag2'},
															{inherit:'l1enjeux_manag3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1enjeux_manag_prof1.response'}						
														],
														data: [
															{inherit:'l1enjeux_manag3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:9}
										],
										data: [
											{inherit:'l1compta1_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1compta1_prof1.response'}
														],
														data: [
															{inherit:'l1compta1_2'},
															{inherit:'l1compta1_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1compta1_prof1.response'}						
														],
														data: [
															{inherit:'l1compta1_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:10}
										],
										data: [
											{inherit:'l1anglais2_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1anglais2_prof1.response'}
														],
														data: [
															{inherit:'l1anglais2_2'},
															{inherit:'l1anglais2_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1anglais2_prof1.response'}						
														],
														data: [
															{inherit:'l1anglais2_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:11}
										],
										data: [
											{inherit:'l1maths2_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1maths2_prof1.response'}
														],
														data: [
															{inherit:'l1maths2_2'},
															{inherit:'l1maths2_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1maths2_prof1.response'}						
														],
														data: [
															{inherit:'l1maths2_3'}
														],
													}
												]
											}
										]
									},
									{
										conditions: [
											{compare: 'current.questions.matièresL1.response', to:12}
										],
										data: [
											{inherit:'l1stats2_1'},
											{remix: true,
												mixer: 'multiBranch',
												branches: [
													{
														conditions: [
															{compare: 1, to:'current.questions.l1stats2_prof1.response'}
														],
														data: [
															{inherit:'l1stats2_2'},
															{inherit:'l1stats2_3'}
														],
													},
													{
														conditions: [
															{compare: 2, to:'current.questions.l1stats2_prof1.response'}						
														],
														data: [
															{inherit:'l1stats2_3'}
														],
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]}
			]
		},



		{inherit: 'basicPage', questions: [
			{inherit: '7-2'},
			{remix: true, 
				mixer: 'branch',
				conditions: [
					{compare: 1, to: 'current.questions.L2.response'}
				],
				data: [
					{inherit: '8L2'},
					{inherit: '9'},
					{remix: true,
						mixer: 'multiBranch',
						branches: [
							{
								conditions: [
									{compare: 1, to:'current.questions.uge.response'}
								],
								data: [
									{inherit:'10'},
									{inherit:'11'}
								],
							},
							{
								conditions: [
									{compare: 2, to:'current.questions.uge.response'}						
								],
								data: [
									{inherit:'11'}
								],
							}
						]
					}
				]
			}
		]},

		{inherit: 'basicPage', questions: [
			{inherit: '7-3'},
			{remix: true, 
				mixer: 'branch',
				conditions: [
					{compare: 1, to: 'current.questions.L3.response'}
				],
				data: [
					{inherit: '8L3'},
					{inherit: '9'},
					{remix: true,
						mixer: 'multiBranch',
						branches: [
							{
								conditions: [
									{compare: 1, to:'current.questions.uge.response'}
								],
								data: [
									{inherit:'10'},
									{inherit:'11'}
								],
							},
							{
								conditions: [
									{compare: 2, to:'current.questions.uge.response'}						
								],
								data: [
									{inherit:'11'}
								],
							}
						]
					}
				]
			}
		]},
			

		{inherit: 'basicPage', questions: {inherit: '12'}},
		{inherit: 'basicPage', questions: {inherit: '13'}},
		{inherit: 'basicPage', questions: [
			{
				type: 'grid',
				checkboxType: 'colorMark',
				stem: 'Dans quelle mesure êtes-vous d\'accord avec les propositions suivantes ?',
				columns: [
					{stem: 'Pas du tout d\'accord', css: {width: '15%'}},
					{stem: 'Plutôt d\'accord',  css: {width: '15%'}},
					{stem: 'Plutôt pas d\'accord',  css: {width: '15%'}},
					{stem: 'Tout à fait d\'accord', css: {width: '15%'}}
				],
				rows: [
					{stem: 'C\'est mieux pour une classe s\'il y a une diversité de coutumes, de cultures et d\'origines.', name: 'diff_culture'},
					{stem: 'Les étudiants d\'origine mahrébine et africaine ont en moyenne plus de difficultés dans certaines matières, au-delà des problèmes de langue potentielle.', name: 'difficulte_afro'}
				]
			}
		]},
		{inherit: 'basicPage', questions: [
			{
				type: 'grid',
				checkboxType: 'colorMark',
				stem: 'Dans quelle mesure êtes-vous d\'accord avec les propositions suivantes ?',
				columns: [
					{stem: 'Pas du tout d\'accord', css: {width: '15%'}},
					{stem: 'Plutôt d\'accord',  css: {width: '15%'}},
					{stem: 'Plutôt pas d\'accord',  css: {width: '15%'}},
					{stem: 'Tout à fait d\'accord', css: {width: '15%'}}
				],
				rows: [
					{name : 'prof_reponse_eleve',
						stem : 'Dans votre enseignement, vous laissez les étudiants chercher les réponses, au risque qu\'ils se trompent, avant de leur expliquer et leur donner les solutions.'},
					{name : 'prof_participation_eleve',
						stem : 'Dans votre enseignement, vous invitez les étudiants à participer, à avoir un regard critique et à poser des questions.'},
					{name : 'prof_travail_eleve',
						stem : 'Si un étudiant travaille suffisamment, il peut devenir le meilleur de sa classe (quelles que soient ses capacités innées).'},
					{name : 'prof_autorite',
						stem : 'Les enseignants doivent garder une certaine distance et incarner l\'autorité dans leur relation avec les étudiants.'}
				]
			}
		]},
		{inherit: 'basicPage', questions: {inherit: '20'}}

	])


	return API.script;
});
