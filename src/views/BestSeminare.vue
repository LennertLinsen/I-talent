<template>
  <div class="bestSeminare-container">
    <div class="bestSeminare-content">
      <h1 class="bestSeminare-title">The Value Hub Seminarie</h1>

      <p class="bestSeminare-text observe fade-in-left">
        De afgelopen 2 jaar heb ik ook seminaries moeten doen, 4 per jaar. Deze seminaries gingen over diverse onderwerpen, maar een onderwerp dat me het beste is bijgebleven en ik het meeste aan heb gehad tijdens mijn stage en buitenschoolse projecten was het seminarie over de design-methode.
      </p>

      <p class="bestSeminare-text observe fade-in-right">
        Tijdens mijn opleiding heb ik deelgenomen aan een seminarie over de design sprint methode, een intensief maar leerrijk traject dat me nieuwe inzichten gaf over productontwikkeling in korte tijd. De design sprint is een methodologie ontwikkeld door Google Ventures, waarbij in vijf dagen een idee wordt gevalideerd door middel van prototyping en gebruikerstests. Hoewel het seminarie theoretisch van aard was, lag de nadruk sterk op praktische toepasbaarheid. We kregen concrete voorbeelden en stap-voor-stap begeleiding over hoe we zo’n sprint kunnen organiseren en uitvoeren, zelfs binnen de beperkingen van een school- of stageproject.
      </p>

      <p class="bestSeminare-text observe fade-in-left">
        Het seminarie was opgedeeld in vijf fases, net zoals de sprint zelf: begrijpen, definiëren, ideeën genereren, prototype bouwen en testen. In de eerste fase leerden we hoe belangrijk het is om het probleem echt te begrijpen en alle betrokken partijen op één lijn te krijgen. Tijdens deze fase wordt veel gewerkt met interviews, user journeys en het benoemen van de “long-term goal”. In de tweede fase definieer je het probleem nauwkeuriger en kies je waar je je op gaat focussen. Daarna volgt het creatieve luik waarin ideeën gegenereerd worden, vaak via technieken zoals crazy 8’s of storyboarding.
      </p>

      <div class="image-wrapper">
        <img src="../assets/Design-Thinking.webp" alt="Design methodology" class="reflection-image">
      </div>

      <p class="bestSeminare-text observe fade-in-right">
        Wat ik erg waardeerde, was hoe het seminarie telkens ook aandacht schonk aan het betrekken van de klant/gebruiker bij het proces. In de laatste fasen wordt immers een prototype gebouwd en meteen getest bij echte gebruikers, zodat je snel feedback krijgt. Dit voorkomt dat er maanden aan een oplossing wordt gewerkt die uiteindelijk niet werkt voor de eindgebruiker – iets wat in schoolprojecten vaak fout loopt.
      </p>

      <p class="bestSeminare-text observe fade-in-left">
        Tijdens mijn stage heb ik deze methode kunnen toepassen bij het opleveren van een Minimal Viable Product (MVP). In onze voorbereidende sprint liep het allemaal een beetje stroef. Het was niet meteen duidelijk wat er allemaal van ons verwacht werd, en we merkten dat communicatie met de klant niet altijd even vlot verliep doordat onze technische coach ziek viel in onze voorbereidende sprint. Daarom hebben we in de eerste echte sprint beslist dat we snel iets bruikbaars aan de klant wilden tonen, zodat we niet op aannames zouden blijven bouwen, maar meteen feedback konden vragen en vragen wat eventueel beter uitgewerkt moest worden. Dankzij de design sprint methode hadden we binnen die sprint een werkend prototype dat de kernfunctionaliteiten bevatte, en konden we via feedback het product meteen bijsturen. Deze aanpak hielp enorm om het vertrouwen van de klant te winnen en om intern het team op één lijn te krijgen.
      </p>

      <div class="image-wrapper">
        <img src="../assets/BrightRaider.png" alt="BrightRaider" class="reflection-image">
      </div>

      <p class="bestSeminare-text observe fade-in-right">
        Ook in mijn buitenschoolse projecten, zoals het ontwikkelen van een kleine applicatie met vrienden, heb ik veel aan deze aanpak gehad. In plaats van eindeloos te brainstormen of plannen te maken, gingen we meteen over naar actie: eerst begrijpen, dan bouwen, dan testen. Dit zorgde ervoor dat we snel tot de essentie kwamen en niet verstrikt raakten in onnodige details of meningsverschillen.
      </p>

      <p class="bestSeminare-text observe fade-in-left">
        Het seminarie heeft mij niet enkel de tools gegeven om effectief een project te starten, maar ook een mindset: testen is belangrijker dan perfectie. Dat was iets waar mijn stagebedrijf enorm op focuste, want hun hoofdzaak is testing. Deze principes neem ik zeker mee in mijn verdere professionele ontwikkeling.
      </p>

      <h2 class="bestSeminare-title">Reflectie</h2>

      <p class="bestSeminare-text observe fade-in-right">
        Ik wou eerst geen seminarie kiezen als activiteitbespreking, omdat dit voor mij aanvoelde als een te korte activiteit om er een duidelijke, inhoudelijke tekst over te schrijven. Maar toen ik nadacht over waar ik nu écht iets van heb bijgeleerd bij Italent, sprong dit seminarie er toch echt bovenuit.
      </p>

      <p class="bestSeminare-text observe fade-in-left">
        Het eerste echte project dat ik voor school deed, was mijn eerste keer researchproject in het tweede jaar. Ondanks dat dit hele project erg stroef verliep door groepsproblemen en andere obstakels, waardoor het allemaal niet zo leerzaam was als gehoopt, heb ik er toch één ding echt uit meegenomen: de klant was toen helemaal niet blij dat we in de eerste sprint vooral aan de backend hadden gewerkt, waardoor we eigenlijk nog niet veel konden tonen. Op dat moment vond ik die opmerking raar, want ik dacht: je wil toch gewoon dat je product op het einde goed werkt?
      </p>

      <p class="bestSeminare-text observe fade-in-right">
        Achteraf gezien, en vooral door mijn tweede keer researchproject, het IT-project én dit seminarie, heb ik het belang ingezien van een eerste sprintoplevering. Een klant heeft het vaak moeilijk om een beeld te vormen van wat hij of zij echt wil en hoe het eruit moet zien. De design sprint-methode helpt daar enorm bij. Het idee om al snel iets tastbaars te kunnen tonen, een prototype waarmee de klant kan spelen, maakt het makkelijker om richting te geven aan het project.
      </p>

      <p class="bestSeminare-text observe fade-in-left">
        Daarom wou ik deze activiteit toch bespreken. Ondanks dat het seminarie maar drie uurtjes duurde, heb ik er enorm veel uit geleerd. Het heeft me geholpen om efficiënter te werken, met in mijn achterhoofd het idee dat een klant iets visueels nodig heeft om erachter te komen wat ze echt willen en hoe ze dat willen.
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectweekReflectie',
  mounted() {
    const elements = document.querySelectorAll('.observe')
    const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
        }
    )

    elements.forEach(el => observer.observe(el))
  },
}
</script>

<style scoped>
.bestSeminare-container {
  background-color: #1e1e1e;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2rem 1rem 4rem;
  box-sizing: border-box;
}

.bestSeminare-content {
  max-width: 800px;
  width: 100%;
}

.bestSeminare-title {
  font-size: 2rem;
  font-weight: bold;
  color: #f0f0f0;
  margin-bottom: 2rem;
  text-align: center;
}

.bestSeminare-text {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #ddd;
  margin-bottom: 2rem;
  opacity: 0;
  animation: slideIn 1s forwards;
  transition: transform 0.3s ease-in-out;
}

.fade-in-left,
.fade-in-right {
  opacity: 0;
  transform: translateX(0);
  transition: all 0.8s ease;
}

.fade-in-left {
  transform: translateX(-40px);
}

.fade-in-right {
  transform: translateX(40px);
}

.visible {
  opacity: 1 !important;
  transform: translateX(0) !important;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.reflection-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
</style>
