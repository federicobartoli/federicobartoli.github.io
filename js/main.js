

$(document).ready(function(){





     var source = $('#template-utente').html();              // clono il template messaggio
     var template = Handlebars.compile(source);

     var utenti = [
         {
             nome: 'Arianna',
             avatar: 'avataaars (4)',
             chat: '😀🐶🐱🐰',
             notifiche: generaRandomMinMax(1, 9),
         },
         {
              nome: 'Federico',
             avatar: 'avataaars (1)',
             chat: 'ehylà!',
             notifiche: generaRandomMinMax(1, 9),

         },
         {
              nome: 'Alessandro',
            avatar: 'avataaars (5)',
            chat: 'divertiti ciccio',
            notifiche: generaRandomMinMax(1, 9),
            activeNoActive: 'active',
         }



     ];
     console.log(utenti[0].nome);

     var source = $('#template-chat-archivio').html();              // clono il template messaggio
     var templateChatArchivio = Handlebars.compile(source);
     var data = new Date();
     var ora = addZero(data.getHours());
     var minuti= addZero(data.getMinutes())
     var ampm = ora >= 12 ? 'PM' : 'AM';
     var messaggi = [
          {
               nomeUtente: utenti[0].nome,
               messaggiUtente: [
                    utenti[0].chat,

               ],
               oraPerfetta: ora + ':' + minuti + ampm,

          },
          {
               nomeUtente: utenti[1].nome,
               messaggiUtente: [
                    utenti[1].chat,

               ],
               oraPerfetta: ora + ':' + minuti + ampm,

          },
          {
               nomeUtente: utenti[2].nome,
               messaggiUtente: [
                    utenti[2].chat,

               ],
               oraPerfetta: ora + ':' + minuti + ampm,

          },
     ];
     for (var i = 0; i < messaggi.length; i++) {
          var templatePopolato2 = templateChatArchivio(messaggi[i]);         // Popolo il templateUtente con i dati presi dall'oggetto UTENTE
          $('.sfondo-chat').append(templatePopolato2);
                        // Aggiungo il template così popolato al div #risultato.
     };
     for (var i = 0; i < utenti.length; i++) {
          var templatePopolato = template(utenti[i]);         // Popolo il templateUtente con i dati presi dall'oggetto UTENTE
          $('.chat').append(templatePopolato);                 // Aggiungo il template così popolato al div #risultato.
     }






          var source= $('#template-chat-you').html();
          var templateChatYou = Handlebars.compile(source);

          function creaMsg(testoMsg, sentReceived , direzioneDiv, comparsaNumber) {

             var datiMessaggio = {
                 testoMessaggio: testoMsg,
                 direzione: sentReceived,
                 oraPerfetta: ora + ':' + minuti + ampm,
                 dirDiv:  direzioneDiv,
                 number: comparsaNumber,
                 nomeChiave : $('.active').attr('nome-utente'),
             };

             var templateMessaggio = templateChatYou(datiMessaggio);
             $('.sfondo-chat').append(templateMessaggio);
         }


     ciao = []
     $('.search-bar-input-messaggio').keydown(function(event){
          switch (event.key) {
               case 'Enter':
               invioMessaggio();



                    break;

               default:




          }
     });
     //DATA
     var data = new Date();
     var ora = addZero(data.getHours());
     var minuti= addZero(data.getMinutes())
     var ampm = ora >= 12 ? 'PM' : 'AM';
     $(".chat-object").click(chat);

     $(".chat-object").click(function(){
          $('.main').addClass('visibile-750')
          $('.aside-general').addClass('non-visibile-750')
     });
     $(".fa-undo-alt").click(function(){
          $('.main').removeClass('visibile-750')
          $('.aside-general').removeClass('non-visibile-750')
     });
     //EVOCO FUNZIONI
     $(document).on('click', '.chat-object', chat);
     $(document).on('click', '.chat-you', function() {
          $(this).children('.menu-a-comparsa').toggle();
     });
     $(document).on('click', '.chat-amico', function() {
          $(this).children('.menu-a-comparsa2').toggle();
     });
     $(document).on('click', '.elimina', function(){
          console.log('elemento cliccato', $(this))
          $(this).parents(".chat-you").remove();
          $(this).parents(".chat-amico").remove();

     });

     // $(document).on('click' , function() {
     //      //$(".chat-object").click(chat);
     //      $('.chat-you').click(function() {
     //           $(this).children('.menu-a-comparsa').toggle();
     //
     //
     //
     //
     //      })
     //
     //      $('.chat-amico').click(function() {
     //           $(this).children('.menu-a-comparsa2').toggle();
     //
     //
     //
     //
     //      })
     //      $('.elimina').click(function(){
     //           console.log('elemento cliccato', $(this))
     //           $(this).click(eliminaMsg);
     //      })
     //
     //
     //
     //
     //
     //
     // })



     function eliminaMsg() {
          $(this).parents(".chat-you").remove();
          $(this).parents(".chat-amico").remove()
     }
     function eliminaMsg2() {
          $(".main-chat .menu-a-comparsa").toggle();
          $(this).parents(".chat-amico").remove();
          $(".main-chat .menu-a-comparsa").toggle();
     }



     $('.fa-plus-circle').click(function() {
          $('.inserisci-nome').toggle();
          $('.fa-file-import').click(function() {
               var nome = $('.in-search-bar-input').val();
               if(nome.trim().length > 0) {
                                   // Prendo il valore dell'input NOME
                    var contattoNuovo = {

                    };
                    for (var i = 0; i < utenti.length; i++) {
                         console.log(utenti[i].nome);
                         if (utenti[i].nome == nome) {
                         var nome = nome + ('1');
                         }
                    }
                    contattoNuovo.nome= nome;
                    contattoNuovo.avatar= 'avataaars';
                    contattoNuovo.chat= '';
                    contattoNuovo.style = 'no-opacity';
                    contattoNuovo.chat = 'inizia una chat';
                    utenti.push(contattoNuovo);
                    var templatePopolatoNuovo = template(contattoNuovo);    // Popolo il templateUtente con i dati presi dall'oggetto UTENTE
                    $('.chat').append(templatePopolatoNuovo);                 // Aggiungo il template così popolato al div #risultato.
                    $('.inserisci-nome').hide();
                    var nome = $('.in-search-bar-input').val('');
                    scroll2();
               }
          })
     })



     //EVOCO FUNZIONI

     $('.mic').click(invioMessaggio);

     $('.search-bar-input-messaggio').focus(function() {
        // console.log('focus');
        $('.mic i').toggleClass('fa fa-microphone fas fa-paper-plane');
    }).blur(function () {
        // console.log('uscito dal focus');
        $('.mic i').toggleClass('fa fa-microphone fas fa-paper-plane');
    });



     $('.search-bar-input-messaggio').keydown(function(event){
          var ciaos = ciao.push($(this).val());
          // console.log(ciaos);
          if (ciao.length > 0) {
               $('.fa-paper-plane').removeClass('nascosto');
               $('.fa-microphone').addClass('nascosto');
          } else {

          }
     })
//
// console.log(ciao);

     $('.search-bar-input').keyup(function(event){
          var ricercaContatto = $(this).val().toLowerCase();
          // console.log(ricercaContatto);
          $('.chat-text-utente p').each(function(){
               // console.log($(this).text());
               if($(this).text().toLowerCase().includes(ricercaContatto)){
                    $(this).parentsUntil('.chat').show();
               }else {
                    $(this).parentsUntil('.chat').hide();
               }
          })
     })



     function invioMessaggio() {
          // console.log('ciaobababa');
          $('.fa-paper-plane').addClass('nascosto');
          $('.fa-microphone').removeClass('nascosto');
          ciao.length = 0;
          var messaggioUtente = $('.search-bar-input-messaggio').val();
          if(messaggioUtente.trim().length > 0) {

               $('.search-bar-input-messaggio').val('');
               creaMsg(messaggioUtente, 'sxs' , 'chat-you')
               console.log('chiamata scroll1');
               scroll()
               setTimeout(creaMsg('ok', 'dxs' , 'chat-amico' , '2'), 1000);
               console.log('chiamata scroll2');
               scroll()



          }

     };

     function scroll() {
          var pixelScroll = $('.sfondo-chat').prop('scrollHeight')
          $('.sfondo-chat').scrollTop(pixelScroll);
          console.log('ho fatto lo scroll');
     }

     function scroll2() {
          var pixelScroll2 = $('.aside').prop('scrollHeight')
          $('.aside').scrollTop(pixelScroll2);
     }


     // function messaggioAutomatico() {
     //      var messaggioAutomatico = $('.Arianna.main-chat.dxs .chat-amico').clone();
     //      messaggioAutomatico.children('p').text('ok');
     //      // console.log(messaggioAutomatico);
     //      messaggioAutomatico.children('.ok-send').text(ora + ':' + minuti + ampm);
     //      $('.main-chat2').append(messaggioAutomatico)
     // }



     // Funzione per selezionare la chat
       function chat() {
           // Tolgo la classe active a tutti ..
           $(".chat-object").removeClass("active");
           $(this).addClass("active");
           $(this).children('.ora-e-notifica').children('span').addClass('nascosto');
           $(this).children('.chat-text-utente').removeClass('notifiche-attive');
           var attributo = $(this).attr('nome-utente');
           // console.log(attributo);
           $("#nome-utente").text(attributo);
           for (var i = 0; i < attributo; i++) {
                console.log(attributo[i]);
           }
           // $(".main-chat").removeClass("offline-chat");
           if($(".main-chat").hasClass(attributo)){
               $('.main-chat').addClass("offline-chat");
               $('.main-chat' + '.' + attributo + '').removeClass("offline-chat");


          }else if(!$(".main-chat").hasClass(attributo)){
               $('.main-chat').addClass("offline-chat");
          }

           if($(".avatar").hasClass(attributo)){
               $('.avatar').addClass("offline-chat");
               $('.avatar2').addClass("offline-chat");
               $('.avatar' + '.' + attributo + '').removeClass("offline-chat");


          }else if(!$(".main-chat").hasClass(attributo)){
               $('.avatar').addClass("offline-chat");
               $('.avatar2').addClass("offline-chat");
               $('.utente').removeClass("offline-chat");
          }

           $(".main-chat2").empty();
           var immagine = $(this).attr('avatar');
           $("#avatar").text(immagine);

       }
     //Funzione che aggiunge lo 0 alla data
     function addZero(i) {
          if (i < 10) {
               i = "0" + i;
          }
          return i;
     }


     console.log(these);

     function generaRandomMinMax(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
         var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
         return numeroRandom;
     }

})
