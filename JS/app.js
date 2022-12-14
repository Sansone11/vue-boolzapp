console.log('JS ok');

const contacts = [
    {
        name: 'Michele',
        avatar: 'avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent',
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
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
        avatar: 'avatar_2.jpg',
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
        avatar: 'avatar_3.jpg',
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
        avatar: 'avatar_4.jpg',
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
        avatar: 'avatar_5.jpg',
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
        avatar: 'avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novit???',
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
        avatar: 'avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
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
        avatar: 'avatar_8.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    },
]

const userText = []

const app = new Vue({
    el: '#root',
    data: {
        contacts,
        active: 0,
        text: '',
        name: '',
        date: '',
    },

    methods: {
        send() {
            const cleanerText = this.text.trim()

            if (cleanerText === '') return
            console.log(this.text)
            const messages = this.contacts[this.active].messages

            const message = {
                date: '',
                message: cleanerText,
                status: 'sent',
            }
            console.log(message)

            this.contacts[this.active].messages.push(message)
            this.text = '',

                setTimeout(() => {
                    // console.log(this.contacts)
                    const message = {
                        date: '',
                        message: 'ok',
                        status: 'received',
                    }
                    messages.push(message)
                }, 1000)

        },
        lastMessageOf(chat){
            const {messages} = chat
            const lastIndex = messages.length-1
            if(lastIndex >=0){
                return messages[lastIndex]
            }
            return null
        },
        
        // this.contacts[i].messages.push({
        //     message: this.newSent,
        //     status: 'sent',
        //     date: stabilireOra(),
        // })
    // function stabilireOra() {
    
    //     let currentdate = new Date();
    //     let datetime = currentdate.getDate() + "/"
    //     + (currentdate.getMonth() + 1) + "/"
    //     + currentdate.getFullYear() + "  "
    //     + currentdate.getHours() + ":"
    //     + currentdate.getMinutes() + ":"
    //     + currentdate.getSeconds();
    
    //     console.log(datetime)
    // return datetime
    // }

    },
   
    computed: {
        filterContacts() {
            return contacts.filter((contact) => {
             return contact.name.toLowerCase().includes(this.name.toLowerCase());
             });
         }
    }

});

// lo stesso concetto del computed
// const newArray = []


// contacts.forEach(element=>{
//     if(element.name.toLowerCase().includes(this.name.toLowerCase()))
//     newArray.push(element)

// })

// // questo ?? un filtro

// const newArray2 = contacts.filter((contact) => {
//           return contact.name.toLowerCase().includes(this.name.toLowerCase());
//             });