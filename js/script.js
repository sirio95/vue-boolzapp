
const {createApp} = Vue;

createApp({
    data(){
        return{

            activeContact: 0,
            dropdown: -1,
            nuovaChat: 1,
            nuovoUtente: 0,

            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/avatar_5.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/avatar_6.webp',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            
            
        }
    },
    methods: {
        activateChat(index){
            this.activeContact = index;
        },
        addingMessage(message){
            let newMessage= {
                date: new Date().toLocaleString(),
                message: this.text,
                status: 'sent',
            };
            message.push(newMessage);
            this.text= "";

            message[message.length -1].date= "sta scrivendo...";
            
            const risposte=[
                'va bene', 'sono contento', 'ti aspetto', 'ottimo lavoro', 'Birraaa', 'Andiamo', 'Mi annoio', 'Che palle!', 'Ricordati di comprare le uova', 'Non bere troppo', 'Sono contento per te', 'ti chiamo così mi racconti'
            ];

            let rispostaRandom= risposte[randomNum(risposte.length -1, 0)];
            console.log(rispostaRandom);

            setTimeout(function(){

                setTimeout(function(){
                    message[message.length -1].date = new Date().toLocaleTimeString(); 
                }
                ,1000);

                let risposta = {
                    date: 'online',
                    message: rispostaRandom,
                    status: 'received',
                };
                message.push(risposta);
                console.log(message);
            }
                
            ,3000);

            

        },
        trovaUtenti(){ 
            this.contacts.forEach(element => {
                if(element.name.toLowerCase().includes(this.user_letter)){
                    element.visible= true;
                }else{
                    element.visible= false;
                }
            });

        },
        messageOptions(index){
            if(this.dropdown === index){
                this.dropdown = -1;
            }else{
                this.dropdown=index;
            }
            
        },
        deleteMess(index, message){
            message.splice(index, 1);

        },
        menu_messaggi(){
            if(this.nuovaChat !== 1){
                this.nuovaChat = 1;
            }else{
                this.nuovaChat = 0;
            };
        },
        nuovoContatto(){
            if(this.nuovoUtente === 0){
                this.nuovoUtente = 1;
            }
        },
        newChat(){
            let newContact= {
                name: this.new_name,
                avatar: 'https://static.wikia.nocookie.net/dragonballhero/images/e/ef/Cartoon-bunny-8.gif/revision/latest?cb=20111120232815',
                visible: true,
                messages: [
                    {
                        date: '',
                        message: this.new_message,
                        status: "sent",
                    }
                    
                ]
            };
            newContact.messages.date= new Date().toLocaleTimeString();

            this.contacts.unshift(newContact);

            this.nuovoUtente = 0;
            this.nuovaChat = 1;
        }
        
        
        
    }

}).mount('#app');


