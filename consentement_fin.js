define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
		submitText: 'Fin',
        header: 'Fin du questionnaire',
        decline: false,
        declineText: isTouch ? 'Refuser' : 'Refuser de répondre', 
        autoFocus:true, 
		prev: true,
		prevText: 'Précédent'
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

    API.addSequence([
        {inherit: 'basicPage', 
            columnStemHide: false, 
            rowStemHide: false,
            questions: [
            {type: 'info',
            description: '<span style="font-size:1.2em">Nous vous remercions sincèrement d’avoir pris le temps de répondre à ce questionnaire. <br><br> 	La tâche informatisée que vous venez de réaliser est un <b>Test d’Association Implicite</b>. Cet outil, largement utilisé en psychologie sociale et en économie, permet d’étudier certaines associations automatiques entre des catégories sociales (ici des prénoms) et des attributs (qualificatifs relatifs aux compétences académiques). Le test repose sur les différences de temps de réaction lors d’exercices de catégorisation. Une catégorisation plus rapide dans certaines configurations peut refléter l’existence d’associations implicites plus fortes entre certaines catégories.<br/><br/>Ces associations sont dites implicites car elles peuvent opérer de manière automatique, sans intention consciente. Elles ne préjugent pas des convictions explicites d’une personne ni de ses comportements effectifs en situation professionnelle. Le score issu de ce test ne permet pas de conclure à l’existence d’un biais conscient ou intentionnel et doit être interprété avec prudence.<br/><br/>Conformément au protocole décrit dans le document d’information, vos données sont pseudonymisées après appariement des bases et les identifiants directs (notamment nom et prénom) sont supprimés.  Aucun résultat individuel ne fera l’objet d’une diffusion publique. Seuls les membres de l’équipe de recherche ont accès aux données dans le cadre strict du projet scientifique.<br/><br/>Si vous le souhaitez, vous pouvez demander la communication de votre score individuel. Pour cela, il vous suffit d’envoyer un mail à Mirana Ranerison (<u>mirana.ranerison@univ-eiffel.fr</u>) ou Marine de Talancé (<u>marine.de-talance@univ-eiffel.fr</u>) dans un délai d’<b>une semaine</b> en indiquant votre nom. Le score vous sera transmis par mail individuel à titre informatif.'
            },
            {inherit: 'basicSelect',
                name: 'consentement_fin',
                type: 'grid',
                cellLabels: false,
                checkboxType: 'colorMark',
                textalign: 'left',
                columns: [
                    {stem: ' ', css: {width: '7%'}},
                    {type: 'text', textProperty: 'right', css: {width: '93%'}}
                ],
                rows: [
                    {right: 'J\'ai compris les informations ci-dessus et j\'accepte que mes données soient utilisées dans le cadre de cette étude.', value :1}, 
                ] 
            },
            {type: 'info',
            description: '<span style="font-size:1.2em">Pour toute question relative à cette recherche, à vos droits RGPD ou à l\'interprétation du test, vous pouvez vous nous contacter aux adresses suivantes : <u>mirana.ranerison@univ-eiffel.fr</u> ou <u>marine.de-talance@univ-eiffel.fr</u>.'
            }
            ]   
        }

    ])




	return API.script;






});
