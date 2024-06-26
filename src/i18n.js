import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          homepage: {
            ansatt: "Video from Summercamp 2022",
            quote:
              "Curious about what it's like to participate at EY Summercamp? Have a look at this video from last years camp below ",
            welcomeTitle: "Welcome to summer camp!",
            welcomeText1:
              "In the summer of 2024 we will arrange a 5 day summer holiday, from Monday to Friday, for children and youngsters from Ukraine who are new to Norway.",
            welcomeText2:
              "Are you between the ages of 9 and 13, born in 2013, 2012, 2011 or 2010?? Would you like to participate in various activities, such as football, fishing, cooking, drawing, swimming and much more – and maybe make some new friends? ",
            welcomeText3:
              "The camp is free and is carried out 3 times at Jakthytta on Malmøya outside Stavern. Each camp week lasts from Monday to Friday, with 20-25 children and youngsters along with instructors from both Ukraine and Norway. We hope that the summer camp can provide a place to relax and create good memories for the participants.",
            accomodation: "Accommodation",
            accomodationText:
              "The summer camp and accommodation will be held at Jakthytta on Malmøya, with its own sleeping cabin with beds for everyone. Here we have different types of rooms, including rooms for 2, 4, 6 and 10 people. Please note that we will have separate rooms for boys and girls. ",
            accomodationLink: "Read more here.",
            meals: "Meals",
            mealsText:
              "Several meals will be served every day to suit everyone. We also want to include the children in the cooking activities if this is something they wish to do. There will be cooking both in the common kitchen and outdoors on the barbecue. Remember to notify us about allergies, intolerances, or other considerations in the registration form.",
            aboutus: "About Us",
            aboutusText: "TBD",
            aboutButton: "Read more about us here",
          },
          pamelding: {
            title: "How do I sign up?",
            text1:
              "Are you between 9 and 13 years old, born in 2013, 2012, 2011 or 2010?. We review the applications as quickly as possible and separate the applicants into different groups. There will be about 20-25 spots each week for 3 weeks (weeks 25, 26 and 27) with 10-12 instructors each week.",
            text2: "Participation at EY Summer Camp is free of charge.  ",
            text3: "To register, you can use the form ",
            responsible:
              "It is the participant's responsibility to be able to meet on time at the agreed meeting point. ",
            meetLarvik:
              "Participants can also meet directly at camp location in Larvik",
            reglink: "linked here ",
            text5:
              "or the button below. Please sign up as soon as possible, the registration form will be available until all spots are filled.",
            text4:
              "We follow the Privacy Act and do not store information for which permission has not been granted.  ",
            bullet1:
              "EY Summer Camp covers food, transport from Oslo, and accommodation. Allergy and food preferences will be taken care of to best of our ability",
            bullet2: "Exciting holiday activities are arranged every day",
            button: "Register here",
            expYou:
              "What do we expect from you who register someone to join the camp?",
            bullet3:
              "Ensure that the child who is enrolled has the opportunity to participate in the stay",
            bullet4:
              "Consider that the child behaves well with others, without the need for professional and/or medical follow-up",
            bullet5:
              "Please be available to us in the time before, during and after your stay if further information about your child is needed. We ask you to enter a mobile phone number where you or others who know your child can be reached",
            expUs: "What can you expect from us?",
            bullet6:
              "We want to focus on the participants getting to know each other and us well, so that everyone feels safe. We facilitate some activities to make it easier",
            bullet7:
              "EY Summer Camp instructors are present to be fellow human beings and good adults, and they are not professionals. They will have access to guidance from a psychologist if needed",
            bullet8:
              "EY Summer Camp instructors are available to children throughout their stay, both day and night",
            fullybooked:
              "The camp registration form has not been opened yet.",
          },
          practical: {
            accomodationTitle: "Accomodation",
            accomText1:
              "Malmøya is an idyllic island just outside Stavern with many opportunities to go swimming, a perfect place to collect summer memories! On Malmøya you will find everything from beautiful coastline to exciting oak forests. Not far from the sea is Jakthytta, a large cabin with 32 beds, a large kitchen, and several living areas with plenty of space. Outside the cabin there are also several interesting areas to explore, as well as its own football field.",
            accomText2: "Malmøya",
            transportTitle: "Transportation",
            transportText:
              "We wish to travel as a group all the way to Malmøya. Meeting point and attendance will be in the Oslo area on Monday the week you are going to the camp. We will take a bus to Larvik and then a boat ride to the island, where we finally go together to the cabin. More information about time and place will be provided.",
            departure:
              "Meeting place and time: Monday approximately at 09:00 central Oslo. ",
            arrival:
              "Return place and time: Friday approximately at 15:00 central Oslo. ",
            other:
              "It is also possible for the participants to meet directly at camp location in Larvik. All participant are responsible for being at the specified meeting point at the set time. ",
            securityTitle: "Safety",
            securityText:
              "The instructors at the summer camp have recently completed first aid and lifesaving lessons. It will be mandatory with a life jacket when we are on a boat and there will always be a lifeguard present when the children swim in the sea. We take the safety of all participants at the camp very seriously and will have strict procedures in place to ensure this safety. It is not a requirement for the participants to swim. More information is coming.",
            communicationTitle: "Communication and homesickness",
            communicationText1:
              "We want the participants to use their mobile phone as little as possible during the summer camp. This makes it easier for them to get to know others and be present in what is happening. An hour is set aside every day, where the participants can have contact with you if they or you wish to do so. It will always be possible to contact us if something arises.",
            communicationText2:
              "It is natural that someone will experience homesickness or missing and wanting to be with family or others close to them. We are many adults who want to be there for the child and assist them with what is difficult. We want to have an open dialogue with you about this, and hope you get in touch if your child has said something that might be nice for us to know about. It can be nice to talk to the child/youngster about this in advance – that homesickness and longing is natural, and that they can talk to the adults at the camp about this.",
            pakkelisteTitle: "What to bring",
            pakktext1:
              "We understand that clothing and equipment can be challenging, and therefore we hope you will get in touch if needed. Then we'll see if we can help with anything.",
            pakktext2:
              "It's nice to bring some summer clothes and some warm clothes, toiletries and swimwear. We recommend clothes that can be used in play and activity, both inside and outside. It's nice to have a bag and a water bottle.",
            pakktext3:
              "All participants are given a sleeping bag and life jacket at the camp that will be theirs to take home. ",
            pakktext4:
              "You may want to bring some reading material, stuffed animals, caps or other headgear and sunglasses.",
            pakktext5:
              "We will provide a proposal to the packing list after registration.",
          },
          about: {
            aboutTitle: "About Us",
            aboutText1:
              "We at EY want to contribute with something more than the consulting services in technology we provide as a company. Since the war broke out in Ukraine, we have a strong desire to contribute. That is why we, the employees at EY Skye, arrange this summer camp together. We do it as volunteers and use our spare time. At the same time, we are convinced that this experience will be just as valuable to us as to the children who join the camp. We look forward to campfires, good conversations, meals together that we have made ourselves and giggling in the sleeping bag before the night comes.",
            aboutText2:
              "For many of us, memories of summer holidays are something we will never forget. Lazy days on the beach, crab fishing and boat trips. Evening swims in the rain and laughs that create comfort and warmth throughout the rest of the week. A sense of belonging, unity and security that we bring with us further in life. We all come from different environments, families and places, and have a lot to learn from each other. Through Skye Summer Camp, we want to give children and youngsters who have had to flee their home country a place to relax, the opportunity to play and participate in activities together with others in a similar situation.",
            aboutText3:
              "All EY Summercamp instructors undergo a training program, focusing on safety and first aid. Translators and instructors with Ukrainian background will join the camp. We want each participant to have good experiences, experience safety, community and good relations with other children and us adults. ",
            embassy:
              "EY Summercamp is recognized by the Ukrainian Embassy in Norway ",
            embassyText:
              "Approval letter from Ukranian Embassy in Norway. Click on the image to view.",
            instructorsTitle:
              " Julia Faviritova will be participating as an instructor during all 3 weeks of camp. She speaks both Norwegian, English and Ukrainian. ",
            instructorsText:
              "Julia was also an instructor/assistant at EY Summercamp in 2022 & 2023. She is 43 years old, and a mother of two young boys. They are from Kyiv and have stayed in Norway for a little longer than one year. Julia works with culture and is an art instructor. Amongst other things, she teaches traditional Ukrainian craft work and is experienced in working with children and teens.",
            julia: "Julia Favoritova"
          },
          captions: {
            activitiesTitle: "Activities",
            activitiesTitle2: "Activites and daily schedule",
            practicalInfo: "Practical Information",
            registrationTitle: "Registration",
            practical: "Practical",
          },
          activities: {
            activityTitle: "How will the days at EY Summercamp look?",
            acttext1:
              "Throughout the week it will be possible to participate in various activities. Ranging from football cup, swimming, boardgames and drawing during daytime and evening activities like disco and movie nights. For those who might feel extra adventurous, there will even be opportunities to camp outside.",
            acttext2:
              "We start off each day with breakfast together. Then we schedule one activity before lunch and one after. We hope to spend most of our time playing outside.",
            acttext3:
              "In the evenings we will prepare and eat dinner together. Afterwards we will have time to relax, watch movies and play boardgames etc.",
            acttext4:
              "We will always make sure to have some optional activities in bigger and smaller groups, should someone not wish to participate in something. We strive to adjust all activities to the group, the weather and what the participants prefer.",
          },
          footer: {
            footerTitle: "Contact information",
            footertext1:
              "E-mail: marcus.marmont.ramsey@no.ey.com",
            footertext2: "Phone: +47 903 61 149",
          },
        },
      },
      no: {
        translation: {
          homepage: {
            ansatt: "Video fra EY Sommercamp 2022",
            quote:
              "Nyskjerrig på hvordan det er å være deltaker på camp? Se videoen fra fjorårets Sommercamp under",
            welcomeTitle: "Velkommen til sommercamp!",
            welcomeText1:
              "Sommeren 2024 vil vi igjen gjennomføre 5 dagers sommerferie, fra mandag til fredag, for barn og unge fra Ukraina som er nye i Norge.",
            welcomeText2:
              "Er du mellom 9 og 13 år, født i 2013, 2012, 2011 eller 2010? Har du lyst til å være med på ulike aktiviteter, som fotball, fisking, matlaging, tegning, bading og mye annet – og kanskje få noen nye venner? ",
            welcomeText3:
              "Campen er gratis og gjennomføres 3 ganger på Jakthytta på Malmøya utenfor Stavern. Hver camp varer fra mandag til fredag, med 20-25 barn og unge og ledere fra både Ukraina og Norge. Vi håper at sommercampen kan gi et pusterom og skape gode minner for deltagerne. ",
            accomodation: "Overnatting",
            accomodationText:
              "Sommercampen og overnattingen blir i Jakthytta på Malmøya, med egen sovehytte med senger til alle. Her har vi ulike typer rom, blant annet 2-mannsrom, 4-mannsrom, 6-mannsrom og 10-mannsrom. Det vil være separate rom for gutter og jenter. ",
            accomodationLink: "Les mer her.",
            meals: "Måltider",
            mealsText:
              "Det vil bli servert flere måltider hver dag som passer for alle. Vi ønsker også å inkludere barna i matlagingen hvis det er noe de har lyst til. Det blir matlaging både inne på felleskjøkkenet og utendørs på bål eller grill. Husk å gi beskjed om allergier, intoleranser eller andre hensyn i påmeldingsskjemaet.",
            aboutus: "Om Oss",
            aboutusText: "TBD",
            aboutButton: "Les mer om oss her",
          },
          pamelding: {
            title: "Hvordan melder jeg meg på?",
            text1:
              "Er du mellom 9 og 13 år, født i 2013, 2012, 2011 eller 2010? Da kan du melde deg på sommercamp. Vi går gjennom søknadene så raskt som mulig, og fordeler søkerne i ulike grupper. Det vil bli ca. 20-25 plasser hver uke i 3 uker (uke 25, 26 og 27) med 10-12 ledere hver uke.  ",
            text2: "Deltagelse på EY sommercamp er gratis. ",
            text3: "For påmelding kan du bruke skjemaet ",
            responsible:
              "Deltaker er selv ansvarlig for å komme seg til oppmøtested til avtalt tid. ",
            meetLarvik: "Eventuelt kan deltaker møte rett på camp i Larvik.",
            reglink: "her",
            text5:
              " eller knappen under. Skjemaet vil være tilgjengelig inntill alle plassene er fyllt opp.",
            text4:
              "Vi følger personvernloven, og lagrer ikke informasjon som det ikke er gitt tillatelse til.",

            bullet1:
              "EY sommercamp dekker kost og losji (helpensjon). Det tas hensyn til allergier og de matpreferanser vi klarer å imøtekomme",
            bullet2: "Det blir arrangert spennende ferieaktiviteter hver dag",
            button: "Gå til påmeldingsskjema",
            expYou:
              "Forventninger til deg som melder på barn/unge til EY sommercamp",
            bullet3:
              "Sikre at barnet som meldes på har mulighet til å delta på ferieoppholdet",
            bullet4:
              "Vurder at barnet fungerer fint sammen med andre, uten behov for faglig og/eller medisinsk oppfølging",
            bullet5:
              "Vær tilgjengelig for oss i tiden før, under og etter oppholdet dersom det er behov for ytterligere informasjon om barnet. Vi ber deg føre opp et mobilnummer der du eller andre som kjenner barnet kan nås",
            expUs: "Forventinger du kan ha til oss",
            bullet6:
              "Vi vil ha fokus på at deltagerne blir godt kjent med hverandre og med oss, så alle blir trygge. Vi hjelper til med noen aktiviteter slik at det blir lettere",
            bullet7:
              "EY Sommercamp instruktørene er til stede for å være medmennesker og gode voksne, og de er ikke fagpersoner. De vil ha tilgang til veiledning fra psykolog ved behov",
            bullet8:
              "EY sommercamp instruktører er tilgjengelig for barna under hele oppholdet, dag og natt",
            fullybooked:
              "Påmelding til Sommercampen har ikke åpnet enda",
          },
          practical: {
            accomodationTitle: "Overnatting",
            accomText1:
              "Malmøya er en idyllisk øy utenfor Stavern med mange bademuligheter, et perfekt sted å samle sommerminner! På Malmøya finner du alt fra nydelige svaberg til frodige eikeskoger. Ikke langt fra sjøen ligger Jakthytta, en stor hytte med hele 32 sengeplasser, stort kjøkken og flere oppholdsrom med god plass. Utenfor hytta er det også flere spennende områder man kan utforske, samt egen fotballbane.",
            accomText2: "Malmøya",
            transportTitle: "Transport",
            transportText:
              "Vi ønsker å reise sammen med felles transport hele veien til Malmøya. Oppmøte vil være i Oslo-området mandagen den uken du skal på tur. Vi tar buss til Larvik og deretter båt til øya, hvor vi til slutt går sammen opp til hytta. Nærmere informasjon om tid og sted vil komme.",
            departure: "Oppmøtested og tid: mandag kl 0900 sentralt i Oslo. ",
            arrival: "Retursted og tid: fredag ca kl 1500 sentralt i Oslo. ",
            other:
              "Eventuelt kan deltaker møte rett på camp i Larvik. Deltaker er selv ansvarlig for å komme seg til oppmøte sted til avtalt tid. ",
            securityTitle: "Sikkerhet",
            securityText:
              "Lederne på sommercampen har nylig gjennomført førstehjelp- og livredningskurs. Det vil være påbudt med flytevest når vi kjører båt og det vil alltid være badevakt til stede når barna bader i sjøen. Vi tar sikkerheten til alle deltakerne på campen veldig alvorlig og vil ha strenge rutiner for å ivareta denne sikkerheten. Det er ikke et krav at deltagerne kan svømme. Mer informasjon kommer.",
            communicationTitle: "Kommunikasjon og hjemlengsel",
            communicationText1:
              "Vi ønsker at barna og de unge skal bruke minst mulig mobiltelefon på sommercampen. Da blir det lettere for dem å bli kjent med andre og være til stede i det som skjer. Det settes av en time hver dag, der deltagerne kan ha kontakt med dere dersom de eller dere ønsker det. Det vil alltid være mulig å ta kontakt med oss dersom noe oppstår.",
            communicationText2:
              "Det er naturlig at noen vil oppleve hjemlengsel eller savne og ønske å være sammen med familie eller andre nære. Vi er mange voksne som vil være der for barnet/den unge, og møte dem i det som er vanskelig. Vi ønsker å ha en åpen dialog med deg om dette, og håper du tar kontakt dersom ditt barn har sagt noe det er kan være fint for oss å vite om. Det kan være fint å snakke med barnet/den unge om dette i forkant – at hjemlengsel og savn er naturlig, og at de kan snakke med de voksne på campen om dette.",
            pakkelisteTitle: "Pakkeliste",
            pakktext1:
              "Vi har forståelse for at det kan være utfordrende med klær og utstyr, og håper derfor dere tar kontakt ved behov. Så ser vi om vi kan hjelpe til med noe.",
            pakktext2:
              "Det er fint å ha med seg litt sommerklær og litt varme klær, toalettsaker og badetøy. Det er ikke nødvendig med pentøy, men klær som kan brukes i lek og aktivitet, både inne og ute. Det er fint med en liten sekk og en drikkeflaske.",
            pakktext3:
              "Alle deltakere får sovepose og flytevest på camp som blir deres til å ta med seg hjem.",
            pakktext4:
              "Det kan være greit å ha med noe lesestoff, kosedyr, caps eller annet hodeplagg og solbriller.",
            pakktext5: "Vi sender et forslag til pakkeliste etter påmelding",
          },
          about: {
            aboutTitle: "Om Oss",
            aboutText1:
              "Vi som jobber i EY har lyst til å bidra med noe mer enn de konsulent-tjenestene innen teknologi vi leverer som selskap. Etter at krigen brøt ut i Ukraina har vi et sterkt ønske om å bidra. Derfor er det vi ansatte som driver Skye sommercamp sammen. Vi gjør det som frivillige, og gir av vår tid. Samtidig er vi overbevist om at det vil være like bra for oss som for barna som blir med på campen. Vi gleder oss til leirbål, gode samtaler, måltider sammen som vi selv har laget og fnising i soveposen før natten kommer.",
            aboutText2:
              "For mange av oss er minner fra sommerferier noe vi aldri vil glemme. Late dager på stranden, krabbefiske og båtturer. Kveldsbad i regnet og latterkramper som skaper varme og nærhet for resten av uka. En følelse av tilhørighet, samhold og trygghet som vi har med oss videre i livet. Vi kommer alle fra ulike miljøer, familier og steder, og har mye å lære av hverandre. Gjennom Skye sommercamp ønsker vi å gi barn og unge som har måttet flykte fra landet sitt og fra tryggheten, et pusterom, mulighet til å leke og delta i aktiviteter sammen med andre i en lignenede situasjon.",
            aboutText3:
              "Alle lederne i EY sommercamp gjennomgår et opplæringsprogram, med fokus på sikkerhet og førstehjelp. Det vil være med tolk og ledere med Ukrainsk bakgrunn. Vi ønsker at hver enkelt deltager skal få gode opplevelser, oppleve trygghet, felleskap og gode relasjoner til andre barn og oss voksne.",
            embassy:
              "EY sommercamp er anerkjent av den Ukrainske Ambassaden i Norge. ",
            embassyText:
              "Bekreftelse fra den Ukrainske Ambassade. Klikk på bildet for å forstørre",
            instructorsTitle:
              "Julia Favoritova vil være med som instruktør på camp alle 3 ukene. Hun snakker både norsk, engelsk og ukrainsk. ",
            instructorsText:
              "Julia var også med som instruktør/assistent på EY Sommercamp i 2022 og 2023. Hun er 43 år og mor til to sønner. De kommer fra Kyiv og har bodd i Norge litt over et år. Julia jobber som kulturleder og kursholder i kunst. Hun driver blant annet med tradisjonelt ukrainsk håndtverk og har lang erfaring med arbeid med barn og unge. ",
            julia: "Julia Favoritova"
          },
          captions: {
            activitiesTitle: "Aktiviteter",
            activitiesTitle2: "Aktiviterer og dagsplan for campen",
            practicalInfo: "Praktisk Informasjon",
            registrationTitle: "Påmelding",
            practical: "Praktisk",
          },
          activities: {
            activityTitle: "Hvordan vil dagene på EY Sommercamp se ut?",
            acttext1:
              "Uken vil bestå av flere spennende aktiviteter, alt fra fotballcup, bading, brettspill og tegning på dagen til kveldsaktiviteter som diskotek og filmkveld. ",
            acttext2:
              "Vi starter hver dag med felles frokost. Deretter legges det opp til en runde med aktiviteter før lunsj, og en etter. Vi satser på at de fleste av lekene og aktivitetene kan foregå utendørs.",
            acttext3:
              "På kveldstid tilbereder og spiser vi et middagsmåltid sammen. På kveldene blir mulighet for avslapping eller filmtitting og annen hygge.",
            acttext4:
              "Det vil alltid være mulig å velge mellom litt ulike aktiviteter både i større og mindre grupper, dersom det er noe man ikke har lyst til å være med på. Vil forsøker å tilpasse aktivitetene til gruppa, været og hva deltakerne har lyst til.",
          },
          footer: {
            footerTitle: "Kontaktinformasjon",
            footertext1:
              "E-post: marcus.marmont.ramsey@no.ey.com",
            footertext2: "Telefon: +47 903 61 149 ",
          },
        },
      },
    },
  });

export default i18n;
