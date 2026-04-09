define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Questionnaire',
        decline: true,
        declineText: isTouch ? 'Refuser' : 'Refuser de répondre', 
        autoFocus:true, 
        submitText: 'Suivant',
        prev: true,
        prevText: 'Précédent',
        required: true,
        errorMsg: {
            required: isTouch 
                ? 'Veuillez sélectionner une réponse ou cliquer sur \'Refuser\'' 
                : 'Veuillez sélectionner une réponse ou cliquer sur \'Refuser de répondre\''
        }
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
        numericValues:'true',
        help: '<%= pagesMeta.number < 3 %>',
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
	
    API.addQuestionsSet('likert5',{ //Likert
        inherit: 'basicSelect',
        answers: [
            {text:'Tout à fait d\'accord', value:5},
			{text:'Plutôt d\'accord', value:4},
			{text:'Ni d\'accord ni pas d\'accord', value:3},
			{text:'Plutôt pas d\'accord', value:2},
			{text:'Pas du tout d\'accord', value:1}
        ]
    });

	


	//Profs

    API.addQuestionsSet('0',{
        inherit: 'basicText',
        name: 'id_prof',
        stem: 'Veuillez indiquer votre identifiant',
    })

    API.addQuestionsSet('1',{
		inherit : 'basicSelect',
		name : 'prof_genre', 
		stem : 'Quel est votre sexe à l\'état-civil ?',
        answers: [
            {text:'Homme', value:1},
            {text:'Femme', value:2}]
	});

    API.addQuestionsSet('2',{
		inherit : 'basicText', 
        type: 'textNumber',
		name : 'annee_naissance',
		stem : 'Quelle est votre année de naissance ?',
        min: 1900,
        max: 2015,
		errorMsg : {
            min: 'Veuillez indiquer une année de naissance valide.',
            max: 'Veuillez indiquer une année de naissance valide.',
            number: 'Veuillez indiquer une année de naissance valide.',
            required: isTouch 
                ? 'Veuillez sélectionner une réponse ou cliquer sur \'Refuser\'' 
                : 'Veuillez sélectionner une réponse ou cliquer sur \'Refuser de répondre\''
        },
        validator: {
            min: 1900,
            max: 2015
		}
	});

	API.addQuestionsSet('3',{
		inherit : 'basicSelect',
		name : 'lieu_naissance', 
		stem : 'Où êtes-vous né(e) ?',
		answers : [
			{text:'En France', value:1},
			{text:'A l\'étranger', value:2}]
	});

	API.addQuestionsSet('4',{
		inherit : 'basicSelect',
		name : 'francais_enfance', 
		stem : 'Est-ce que vous avez grandi en parlant français à la maison ?',
		answers : [
			{text:'Oui', value:1},
			{text:'Non', value:2}]
	});

	API.addQuestionsSet('5-1',{
		inherit : 'basicSelect',
		name : 'iat1',
		stem : 'Avez-vous déjà entendu parler des tests d\'association implicite (IAT) ?',
		answers : [
			{text:'Oui', value:1},
			{text:'Non', value:2}]
	});

    API.addQuestionsSet('5-2',{
        inherit: 'basicSelect',
        name: 'iat2',
        stem: 'Si oui, avez-vous déjà passé un test d\'association implicite (IAT) ?',
        answers: [
            {text:'Oui', value:1},
            {text:'Non', value:2}]
    });


    API.addSequence([
        {inherit: 'basicPage', 
            decline: false,
            questions: [{inherit: '0'}]
        },
        {inherit: 'basicPage', questions: {inherit: '1'}},
        {inherit: 'basicPage', questions: {inherit: '2'}},
        {inherit: 'basicPage', questions: {inherit: '3'}},
        {inherit: 'basicPage', questions: {inherit: '4'}},
        {inherit: 'basicPage', questions: [
            {inherit: '5-1'},
            {remix: true,
                mixer: 'branch', 
                conditions: [{compare: 1, to:'current.questions.iat1.response'}],
                data: [
                    {inherit: '5-2'}
                ]
            }
        ]}
    ]);

    return API.script;

});