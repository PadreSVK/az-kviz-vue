import { createStore } from 'vuex'
export default createStore({
    state: { 
        players: {
            player1name: "",
            player2name: "",
            winner: null, 
            unused: true
        },
        currentQuestion: null,
        firstQuestions: [
            {
                id: 1000,
                question: "",
                hint: "",
                answer: "",
                winner: null, 
                
            },
            {
                id: 1001,
                question: "Ako sa volá postava zo seriálu IT Crowds s vtipným účesom ?",
                hint: "DT",
                answer: "display: table",
                winner: null, 
            },
            {
                id: 1002,
                question: "What does SASS stand for?",
                hint: "SCSS",
                answer: "Syntactically Awesome Style Sheets",
                winner: null, 
            },
            {
                id: 1003,
                question: "What does BEM stand for?",
                hint: "BEM",
                answer: "Block Element Modificator",
                winner: null, 
            },
            {
                id: 1004,
                question: "What is the current version of HTML",
                hint: "HTML",
                answer: "5",
                winner: null, 
            },
            {
                id: 1005,
                question: "What does HTML stand for?",
                hint: "HTML",
                answer: "Hyper Text Markup Language",
                winner: null,
            },
            {
                id: 1006,
                question: "What is the most popuplar and really old website about web development in ČR ?",
                hint: "JWB",
                answer: "jakpsatweb.cz",
                winner: null, 
            },
            {
                id: 1007,
                question: "What HTML attribute do I use to open a link in a new tab?",
                hint: "TB",
                answer: "target='_blank'",
                winner: null, 
            },
            {
                id: 1008,
                question: "How do I round a number up using javascript?",
                hint: "MR",
                answer: "Math.Round()",
                winner: null, 
            },
            {
                id: 1009,
                question: "What event do I capture the loss of focus from the input in javascript?",
                hint: "O",
                answer: "onfocusout",
                winner: null, 
            },
            {
                id: 10010,
                question: "What character is short for jQuery?",
                hint: "D",
                answer: "$",
                winner: null, 
            },
            {
                id: 10011,
                question: "What is the answer to the question of life, the universe and everything?",
                hint: "INT",
                answer: "42",
                winner: null, 
            },
            {
                id: 10012,
                question: "What's the name of a character from the IT Crowds series with a funny hairstyle?",
                hint: "MM",
                answer: "Maurice Moss",
                winner: null, 
            },
            {
                id: 10013,
                question: "What is the name of the image that appears in the browser tab next to the page title?",
                hint: "F",
                answer: "favicon",
                winner: null, 
            },
            {
                id: 10014,
                question: "What command does create a new git repository?",
                hint: "G",
                answer: "git init",
                winner: null, 
            },
            {
                id: 10015,
                question: "What is the name of a programming language that consists of only 8 commands",
                hint: "B",
                answer: "Brainfuck",
                winner: null, 
            },
            {
                id: 10016,
                question: "What code does the Internal Server Error have in the HTTP header?",
                hint: "INT",
                answer: "500",
                winner: null, 
            },
            {
                id: 10017,
                question: "What code does Unathorized have in the HTTP header?",
                hint: "INT",
                answer: "401",
                winner: null,
            },
            {
                id: 10018,
                question: "What's the emergency number in the IT Crowd?",
                hint: "0188 ...",
                answer: "0118 999 881 999 119 725 3",
                winner: null,
            },
            {
                id: 10019,
                question: "What does number 43 mean in the Big Bang series?",
                hint: "SR",
                answer: "Sheldons record in hackisack",
                winner: null, 
            },
            {
                id: 10020,
                question: "What does UTFG stand for?",
                hint: "UTFG",
                answer: "Use the fucking google",
                winner: null, 
            },
            {
                id: 10021,
                question: "What does WWW stand for?",
                hint: "WWW",
                answer: "world wide web",
                winner: null, 
            },
            {
                id: 1022,
                question: "Which one is the first web browser invented in 1990",
                hint: "N",
                answer: "Nexus",
                winner: null, 
            },
            {
                id: 1023,
                question: "Number of bit used by the IPv6 address",
                hint: "INT",
                answer: "128 bit",
                winner: null, 
            },
            {
                id: 1024,
                question: "Which one programming language is exclusively used for artificial intelligence",
                hint: "P",
                answer: "Prolog",
                winner: null, 
            },
            {
                id: 1025,
                question: "Which of the following programming language is used to create programs like applets?",
                hint: "J",
                answer: "Java",
                winner: null, 
            },
            {
                id: 1026,
                question: "First computer virus is known as",
                hint: "CV",
                answer: "Creeper Virus",
                winner: null, 
            },
            {
                id: 1027,
                question: "Who programmed the first computer game 'Spacewar!' in 1962",
                hint: "SR",
                answer: "Steave Russell",
                winner: null, 
            },
            {
                id: 1028,
                question: "Who created the C programming Language",
                hint: "DR",
                answer: "Dennis Ritchie",
                winner: null, 
            },
            {
                id: 1029,
                question: "Who is known as the father of internet",
                hint: "VC",
                answer: "Vint Cerf",
                winner: null, 
            },
            {
                id: 1030,
                question: "Which operating system is developed and used by Apple Inc",
                hint: "i",
                answer: "IOS",
                winner: null, 
            },
            {
                id: 1031,
                question: "Computer Hard Disk was first introduced in 1956 by",
                hint: "I",
                answer: "IBM",
                winner: null, 
            },
            {
                id: 1032,
                question: "What is a default 'text editor' for Microsoft Windows?",
                hint: "N",
                answer: "Notepad",
                winner: null, 
            },
            {
                id: 1033,
                question: "Which key combination is used to minimize all open windows and displays in the screen",
                hint: "Win+?",
                answer: "Win+D",
                winner: null, 
            },
            {
                id: 1034,
                question: "Which key combination is used to close a open application in Windows machine",
                hint: "?+?",
                answer: "Alt+F4",
                winner: null, 
            },
            {
                id: 1035,
                question: "Which function key needs to be press during reboot to enter in Safe Mode of a Windows machine",
                hint: "F?",
                answer: "F8",
                winner: null, 
            },
            {
                id: 1036,
                question: "Which key combination is used to permanently delete a file or folder",
                hint: "?+del",
                answer: "Shift+del",
                winner: null, 
            },
            {
                id: 1037,
                question: "Which web browser is developed by the Google",
                hint: "C",
                answer: "Chrome",
                winner: null, 
            },
            {
                id: 1038,
                question: "Mark Zuckerberg is the owner of",
                hint: "M",
                answer: "Meta (old Facebook)",
                winner: null, 
            },
            {
                id: 1039,
                question: "What is the full form of PDF",
                hint: "PDF",
                answer: "Portable document format",
                winner: null, 
            },
            {
                id: 1040,
                question: "Text connected to page is",
                hint: "HL",
                answer: "Hyperlink",
                winner: null, 
            },
            {
                id: 1041,
                question: "Saving a file from the Internet onto your desktop is called",
                hint: "D",
                answer: "Downloading",
                winner: null, 
            },
            {
                id: 1042,
                question: "Errors in computer programmes are called",
                hint: "Bugs",
                answer: "Bugs",
                winner: null, 
            },
            {
                id: 1043,
                question: "The exact meaning of the term VPN is?",
                hint: "VPN",
                answer: "Virtual Private Network",
                winner: null, 
            },
            {
                id: 1044,
                question: "What does the shortcut BSOD stands for?",
                hint: "BSOD",
                answer: "Blue screen of death",
                winner: null, 
            },

            // From Peter QA
            {
                id: 1045,
                question: "What is a pre-requisite if you want to fix 'jedinou picovinku'?",
                hint: "R C T",
                answer: "Rozdelat cely traktor",
                winner: null, 
            },
            {
                id: 1046,
                question: "Who is the author of fan's favorite Czech website http://milujipraci.cz/.",
                hint: "A",
                answer: "Arguit - Frantisek Zahora",
                winner: null, 
            },
            {
                id: 1047,
                question: "Who is presumably the only person from Chyron Brno office who has an existing wikipedia page about himself/herself.",
                hint: "MK",
                answer: "Marie Kurkova",
                winner: null, 
            },
            {
                id: 1048,
                question: "How long was the code freeze period before Axis release 2.0 (tolerance - 1hr).",
                hint: "INT",
                answer: "0",
                winner: null, 
            },
            {
                id: 1049,
                question: "How many unique official US releases (at least half of the modules deployed) Axis team had in the last 12 months?",
                hint: "INT",
                answer: "4 (1.0, 2.0, 2.1.0, 2.2.0)",
                winner: null, 
            },
            {
                id: 1050,
                question: "Name all 3 main brands (divisions) of Chyronhego?",
                hint: "CTH",
                answer: "Chyron Tracab Hego",
                winner: null, 
            },
            {
                id: 1051,
                question: "In which year was the Chyron Corporation (later Chyronhego Corporation) established?",
                hint: "19xx",
                answer: "1966",
                winner: null, 
            },
            {
                id: 1052,
                question: "Name all the members of Axis front-end team and sort them by seniority (start with the most junior one)",
                hint: "N/A",
                answer: "Maroš Janota",
                winner: null, 
            },
            {
                id: 1053,
                question: "Name the last 3 people who had a role of product manager of Axis in Chyronhego.",
                hint: "KK, JM, PM",
                answer: "Knut Karlsen, Jim Martinolich, Peter Matis",
                winner: null, 
            },
            {
                id: 1054,
                question: "Name at least 3 job positions which Patrik Svikruha had (or still has) in Chyronhego.",
                hint: "N/A",
                answer: "Tech led, Architect, Devops engineer, Product owner, Teamleader, HR agency - basically any answer is correct",
                winner: null, 
            },
            {
                id: 1055,
                question: "Name the 6 end user facing modules of Axis (Portal excluded, start with your personal favorite).",
                hint: "N/A",
                answer: "Charts, Maps, News, Order, Quotes, Track",
                winner: null, 
            },
            {
                id: 1056,
                question: "How many people were part of the HR department of Chyronhego in summer 2020.",
                hint: "INT",
                answer: "0",
                winner: null, 
            },
            {
                id: 1057,
                question: "What is the estimated time which Pavel needs, in order to completely rework the entire maps module?",
                hint: "INT",
                answer: "One weekend",
                winner: null, 
            },
            {
                id: 1058,
                question: "What is the most favorite work assignment of Frantisek Zahora? (His point of view on the correct answer may be slightly different).",
                hint: "N/A",
                answer: "DB",
                winner: null, 
            },
            {
                id: 1059,
                question: "Who is at the moment the oldest team member of Axis Brno team?",
                hint: "N/A",
                answer: "Celyn",
                winner: null, 
            },
            {
                id: 1060,
                question: "How many kids (combined) the Axis team members have? Official ones only, we don't count with 'What happened in Vegas - stays in Vegas' kind of kids.",
                hint: "INT",
                answer: "6",
                winner: null, 
            },
            {
                id: 1061,
                question: "What was the estimated duration of 'Axis migration to cloud' by the former CTO of Chyronhego? (tolerance one day).",
                hint: "INT",
                answer: "One day",
                winner: null, 
            },
            {
                id: 1062,
                question: "How many people with a name Ilona are currently employed in Chyronhego?",
                hint: "INT",
                answer: "2",
                winner: null, 
            },
            {
                id: 1063,
                question: "What is the country of origin of Chyronhego's CEO - Ariel Garcia?",
                hint: "A",
                answer: "Argentina",
                winner: null, 
            },
            {
                id: 1064,
                question: "Which sport equipment is Yomi using as a part of his morning routine?",
                hint: "T",
                answer: "Treadmill",
                winner: null, 
            },
            {
                id: 1064,
                question: "What are the first names of 2 past Axis developers M. Gioino and E. Harokopakis (no typo here)?",
                hint: "M&E",
                answer: "Michael & Emmanuel",
                winner: null, 
            },
            {
                id: 1065,
                question: "What is Mathieu's hobby?",
                hint: "C",
                answer: "Cars",
                winner: null, 
            },
            {
                id: 1066,
                question: "What is a typical Christmas gift in Chyronhego Czech?",
                hint: "N/A",
                answer: "Bottle of gin",
                winner: null, 
            },
            {
                id: 1067,
                question: "What is Mathieu's job title listed in his profile on slack?",
                hint: "COS",
                answer: "Chief of stuff",
                winner: null, 
            },
            {
                id: 1068,
                question: "What is AG's job title listed in his profile on slack?",
                hint: "CEO",
                answer: "Chief Escalation Officer",
                winner: null, 
            },
            {
                id: 1069,
                question: "What is Mike Truex's job title listed in his profile on slack?",
                hint: "CFO",
                answer: "Chief Fun Officer",
                winner: null, 
            },
            {
                id: 1070,
                question: "What was Patrik's job title listed in his profile on slack while he was a product owner?",
                hint: "ACC",
                answer: "Axis call center",
                winner: null, 
            },
            {
                id: 1071,
                question: "What is Peter's job title listed in his profile on slack?",
                hint: "PM",
                answer: "Pro duck manager",
                winner: null, 
            },
            {
                id: 1072,
                question: "What is the name of Frantisek's band?",
                hint: "E",
                answer: "Edain",
                winner: null, 
            },
            {
                id: 1073,
                question: "Which PC game is played the most by Axis team members (commonly)?",
                hint: "N/A",
                answer: "Battlefield V",
                winner: null, 
            },
            {
                id: 1074,
                question: "Which team/pair dominated the desktop game Activity during the Axis teambuilding?",
                hint: "N/A",
                answer: "Maros & Katka",
                winner: null, 
            },
            {
                id: 1075,
                question: "What was the cottage name where the first official Axis (CZE) teambuilding was conducted?",
                hint: "ChUF",
                answer: "Chalupa u Frysavky",
                winner: null, 
            },
            {
                id: 1076,
                question: "How many Slovaks are part of the Axis team (incl. Axis contributors)",
                hint: "INT",
                answer: "5 (Katka, Maros, Patrik, Peter, Samuel)",
                winner: null, 
            },
            {
                id: 1077,
                question: "Name the 2 brands of beer which were the main beverage on Axis (CZE) teambuilding:",
                hint: "🍻",
                answer: "Kozel, Nachmelena Opice",
                winner: null, 
            },
            {
                id: 1075,
                question: "Which company is a majority shareholder of Chyronhego?",
                hint: "AGM",
                answer: "Apollo Global Management",
                winner: null, 
            },
            {
                id: 1076,
                question: "Who are the 4 people depicted on the main screen of the Axis Matrix theme?",
                hint: "N/A",
                answer: "Ilona, Patrik, Pavel, Peter",
                winner: null, 
            },
            {
                id: 1077,
                question: "Which musical instrument is Jiri playing on?",
                hint: "N/A",
                answer: "Guitar",
                winner: null, 
            },
        ],
        secondQuestions: [
            {
                id: 2001,
                question: "Is Javascript case-sensitive ?",
                hint: "Y/N",
                answer: "A",
                winner: null, 
            },
            {
                id: 2002,
                question: "Is Javascript the same as is Java ?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
            },
            {
                id: 2003,
                question: "Is C# the same as is C++ ?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
            },
            {
                id: 2004,
                question: "Could a semicolon be used in brainfuck?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
            },
            {
                id: 2005,
                question: "Is it possible to create HelloWorld in javascript using only six characters? (not code length)",
                hint: "Y/N",
                answer: "Y - JsFuck",
                winner: null, 
            },
            {
                id: 2006,
                question: "Has a Holly supercomputer from IQ 8000 ? (Which is like 8,000 gym teachers)",
                hint: "Y/N",
                answer: "N - 6000",
                winner: null, 
            },
            {
                id: 2007,
                question: "Was google the first search engine in internet?",
                hint: "Y/N",
                answer: "N - Archie",
                winner: null, 
            },
            {
                id: 2008,
                question: "Is Firewall in computer used for Authentication?",
                hint: "Y/N",
                answer: "N - Security",
                winner: null, 
            },
            {
                id: 2009,
                question: "Is COBOL a database management software?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
            },
            {
                id: 2010,
                question: "Is .gif an extension for videos?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
            },
            {
                id: 2011,
                question: " Is WordStar the first word processor application?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            },
            {
                id: 2012,
                question: "Is RAM volatile memory in a computer system?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            },
            {
                id: 2013,
                question: "One Terabyte (1 TB) is equal to 1000GB",
                hint: "Y/N",
                answer: "N - 1024GB",
                winner: null, 
            },
            {
                id: 2014,
                question: "Was Windows the first fully supported 64-bit operating system?",
                hint: "Y/N",
                answer: "N - Linux",
                winner: null, 
            },
            {
                id: 2015,
                question: "Is MOSAIC a web browser ?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            },
            {
                id: 2016,
                question: "Is Trojan a computer virus ?",
                hint: "Y/N",
                answer: "N - Malware",
                winner: null, 
            }, 
            {
                id: 2017,
                question: "Is SMTP Protocol used to receive an e-mail?",
                hint: "Y/N",
                answer: "N - Pop3",
                winner: null, 
            }, 
            {
                id: 2018,
                question: "Is Pop3 Protocol used to receive an e-mail?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            }, 
            {
                id: 2019,
                question: "Was '@' sign first chosen for its use in e-mail address before 1975?",
                hint: "Y/N",
                answer: "Y - 1972",
                winner: null, 
            }, 
            {
                id: 2020,
                question: "Is monitor an Input device ?",
                hint: "Y/N",
                answer: "N - output",
                winner: null, 
            }, 
            {
                id: 2021,
                question: "Is Firefox used as an search engine?",
                hint: "Y/N",
                answer: "N - it's browser",
                winner: null, 
            }, 
            {
                id: 2022,
                question: "Are cookies stored on the server?",
                hint: "Y/N",
                answer: "N - on the client",
                winner: null, 
            }, 
            {
                id: 2023,
                question: "Antivirus protect systems from hackers",
                hint: "Y/N",
                answer: "N - Firewall",
                winner: null, 
            }, 
            {
                id: 2024,
                question: "USB Hard disk is a secondary type of storage device",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            }, 
            {
                id: 2025,
                question: "'IoT' refers to - Internet Organisation of Telecommunication",
                hint: "Y/N",
                answer: "N - Internet of Things",
                winner: null, 
            }, 
            {
                id: 2026,
                question: "Who is a shared resource for both Camio and Axis.",
                hint: "Y/N",
                answer: "Y ",
                winner: null, 
            }, 
            {
                id: 2027,
                question: "Does Jim Martinolich own a boat?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            }, 
            {
                id: 2028,
                question: "Is the September 11 attack (2001) the reason why the development of the first ever version of Maps module got postponed?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            }, 
            {
                id: 2029,
                question: "Is Jirka a singer?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            }, 
        ]
    },
    mutations: {
        SET_PLAYERS_NAMES(state, value) {
            state.players = value
        },
        SET_WINNER(state, value) {
            state.players.winner = value
        },
        SET_QUESTION(state, value) {
            state.currentQuestion = value
        }
    },
    actions: {
    },
    getters: {
        getFirstQeustionsList: state => {
            var qList = []
            var allQuestions = state.firstQuestions
            for (let q = 0; q < 21; q++) {
                var random = Math.floor(Math.random()*(allQuestions.length - 1)) + 1 
                qList.push(allQuestions[random])
                allQuestions.splice(random, 1)
            } 
            return qList
        },
        getSecondQeustionsList: state => {
            var qList = []
            var allQuestions = state.secondQuestions
            for (let q = 0; q < 21; q++) {
                var random = Math.floor(Math.random()*(allQuestions.length - 1)) + 1 
                qList.push(allQuestions[random])
                allQuestions.splice(random, 1)
            } 
            return qList
        }
    }
})