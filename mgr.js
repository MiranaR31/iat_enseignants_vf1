define(['managerAPI',
		'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], function(Manager){


	//You can use the commented-out code to get parameters from the URL.
	//const queryString = window.location.search;
    //const urlParams = new URLSearchParams(queryString);
    //const pt = urlParams.get('pt');

	var API    = new Manager();
	//const subid = Date.now().toString(16)+Math.floor(Math.random()*10000).toString(16);
	init_data_pipe(API, '4mlbP4UaqvIv',  {file_type:'csv'});	

    API.setName('mgr');
    API.addSettings('skip',true);
	

    API.addTasksSet({
        instructions: [{
            type: 'message',
            buttonText: 'Continue'
        }],

        intro: [{
            inherit: 'instructions',
            name: 'intro',
            templateUrl: 'intro.jst',
            title: 'Intro',
            header: 'Welcome'
        }],

        raceiat_instructions_m: [{
            inherit: 'instructions',
            name: 'raceiat_instructions_m',
            templateUrl: 'raceiat_instructions_m.jst',
            title: 'Instructions Test D\'Association Implicite',
            header: 'Test D\'Association Implicite'
        }],

         raceiat_instructions_f: [{
            inherit: 'instructions',
            name: 'raceiat_instructions_f',
            templateUrl: 'raceiat_instructions_f.jst',
            title: 'Instructions Test D\'Association Implicite',
            header: 'Test D\'Association Implicite'
        }],

		demographics: [{
            type: 'quest',
            name: 'demographics',
            scriptUrl: 'demographics.js'
        }],

        explicits: [{
            type: 'quest',
            name: 'explicits',
            scriptUrl: 'explicits.js'
        }],

        raceiat_m: [{
            type: 'time',
            name: 'raceiat',
            scriptUrl: 'raceiat_m.js'
        }],

        raceiat_f: [{
            type: 'time',
            name: 'raceiatf',
            scriptUrl: 'raceiat_f.js'
        }],

        lastpage: [{
            type: 'message',
            name: 'lastpage',
            templateUrl: 'lastpage.jst',
            title: 'End',
            //Uncomment the following if you want to end the study here.
            //last:true, 
            header: 'You have completed the study'
        }], 
        
        consentement_fin : [{
            type: 'quest',
            name: 'consentement_fin',
            scriptUrl: 'consentement_fin.js'
        }],
		
		//This task waits until the data are sent to the server.
        uploading: uploading_task({header: 'Veuillez patienter', body:'Veuillez patienter pendant que vos réponses sont envoyées au serveur.'}),
    });

    API.addSequence([
        { type: 'isTouch' }, //Use Minno's internal touch detection mechanism. 
        
        { type: 'post', path: ['$isTouch', 'raceSet', 'Immigrant', 'Native'] },

        // apply touch only styles
        {
            mixer:'branch',
            conditions: {compare:'global.$isTouch', to: true},
            data: [
                {
                    type: 'injectStyle',
                    css: [
                        '* {color:red}',
                        '[piq-page] {background-color: #fff; border: 1px solid transparent; border-radius: 4px; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); margin-bottom: 20px; border-color: #bce8f1;}',
                        '[piq-page] > ol {margin: 15px;}',
                        '[piq-page] > .btn-group {margin: 0px 15px 15px 15px;}',
                        '.container {padding:5px;}',
                        '[pi-quest]::before, [pi-quest]::after {content: " ";display: table;}',
                        '[pi-quest]::after {clear: both;}',
                        '[pi-quest] h3 { border-bottom: 1px solid transparent; border-top-left-radius: 3px; border-top-right-radius: 3px; padding: 10px 15px; color: inherit; font-size: 2em; margin-bottom: 20px; margin-top: 0;background-color: #d9edf7;border-color: #bce8f1;color: #31708f;}',
                        '[pi-quest] .form-group > label {font-size:1.2em; font-weight:normal;}',

                        '[pi-quest] .btn-toolbar {margin:15px;float:none !important; text-align:center;position:relative;}',
                        '[pi-quest] [ng-click="decline($event)"] {position:absolute;right:0;bottom:0}',
                        '[pi-quest] [ng-click="suivant()"] {width:30%;line-height: 1.3333333;border-radius: 6px;}',
                        // larger screens
                        '@media (min-width: 480px) {',
                        ' [pi-quest] [ng-click="suivant()"] {width:30%;padding: 10px 16px;font-size: 1.6em;}',
                        '}',
                        // phones and smaller screens
                        '@media (max-width: 480px) {',
                        ' [pi-quest] [ng-click="suivant()"] {padding: 8px 13px;font-size: 1.2em;}',
                        ' [pi-quest] [ng-click="decline($event)"] {font-size: 0.9em;padding:3px 6px;}',
                        '}'
                    ]
                }
            ]
        },
        
        {inherit: 'intro'},
        {inherit: 'demographics'},
        {mixer: 'random',
            data: [
                {mixer: 'wrapper',
                    data: [
                        {inherit: 'raceiat_instructions_m'},
                        {inherit: 'raceiat_m'}
                    ]
                },
                {
                    mixer: 'wrapper',
                    data: [
                        {inherit: 'raceiat_instructions_f'},
                        {inherit: 'raceiat_f'}
                    ]
                }
            ]
        },
        {inherit: 'explicits'},

		{inherit: 'uploading'},
        {inherit: 'lastpage'},
        {inherit: 'redirect'}
    ]);

    return API.script;
});
