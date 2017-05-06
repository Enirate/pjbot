var chat = new Chat({
    greeting: [
        'Hello, I\'m projaro bot and i\'m here to tell you more about projaro, what will you like to know about projaro?',
        {
            type: 'choose',
            answers:[{
                'text': 'The people',
                'path':'people'
            },
            {
                'text':'The business',
                'path':'business'
            }
            ]
        }
    ],
    start: [
        'Thanks. What else will you like to know about projaro?',
        {
            type: 'choose',
            answers:[{
                'text': 'The people',
                'path':'people'
            },
            {
                'text':'The business',
                'path':'business'
            }
            ]
        }
    ],

    people: [
        'We have two sets of people, which one are you intrested in',
        {
            type: 'choose',
            answers:[{
                'text': 'The staffs',
                'path':'staffs'
            },
            {
                'text':'The fellows',
                'path':'fellows'
            }
            ]
        }
    ],

    business: [
        'Projaro trains people and build products, which will you like to know more about',
        {
            type: 'choose',
            answers:[{
                'text': 'Training',
                'path':'training'
            },
            {
                'text':'Product development',
                'path':'product'
            }
            ]
        }
    ],

    'staffs': [
        'Here\'s the staff list 1. Dimgba Kalu (co-founder) | 2. Emmanuel Enemaku (co-founder) | 3. Benjamin Idoko (UI/UX designer / graphics designer / Wordpress developer) | 4. Austin Okorogu (Backend developer) | 5. Habeeb Mc-civer (Javascript engineer) | 6. Al-amin Balogun (Full-stack developer)',
        {
            type:'choose',
            answers:[{
                'text':'Thank you',
                'path':'final'
            },
            {
                'text':'I\'d love to know more',
                'path':'start'
            }
            ]
        }
        
    ],

    'final': [
        'I\'m happy you could use my help. Have a nice day'
    ],

    'fellows': [
        'Here\'s a list of the fellows 1. Fakeye Eniola | 2. Emeka Nwachukwu | 3. Israel Obiagba | 4. Abudul-Qudus Yekeen | 5. Charles Amos | 6. Daniella Mato (Intern/Trainee)',
        {
            type:'choose',
            answers:[{
                'text':'Thank you',
                'path':'final'
            },
            {
                'text':'I\'d love to know more',
                'path':'start'
            }
            ]
        }
       
    ],
    'training': [
        'Basically, we train youths to become world class developers.',
        'Not only will this make them a hot commodity in the labour market',
        'They will poccess enough skill to become an employer or to put a dent (in a good way) on the world.',
        'The duration of the training is 12 Months.',
        '<iframe src="//giphy.com/embed/xT5LMWSdjpYGbaWV4Q" width="480" height="368" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/season-11-the-simpsons-11x9-xT5LMWSdjpYGbaWV4Q">via GIPHY</a></p>',
        {
            type:'choose',
            answers:[{
                'text':'Thank you',
                'path':'final'
            },
            {
                'text':'I\'d love to know more',
                'path':'start'
            }
            ]
        }
       
    ],
    'product': [
        'We build products (internet of things, web apps and mobile apps)  for businesses',
        'We also help startups to analyse their market in order to build products that customers want.',

        {
            type:'choose',
            answers:[{
                'text':'Thank you',
                'path':'final'
            },
            {
                'text':'I\'d love to know more about product development',
                'path':'more_prod'
            }
            ]
        }
        
    ],
    'more_prod': [
        'Here\'s some products we build recently 1. Jalo mobile app | 2. Meatboutique E-commerce site | 3. Federal Ministry of environment Website.',
        {
            type:'choose',
            answers:[{
                'text':'Thank you',
                'path':'final'
            },
            {
                'text':'I\'d like to contact you',
                'path':'contact'
            }
            ]
        }
        
    ],
    'contact': [
        'Go to our <a href="https://projaro.com.ng">website</a>',
        'Or shoot an email to emmanuel@projaro.ng',
    ]
},
{
    targetNode: '.chat-head'
});