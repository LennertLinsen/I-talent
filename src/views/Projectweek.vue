<template>
  <div class="reflection-container">
    <div class="reflection-content">
      <h1 class="reflection-title">Projectweek 2de jaar</h1>

      <p class="reflection-text observe fade-in-left">
        In het tweede semester van het tweede jaar voor we aan het researchproject beginnen is er een projectweek. Deze week is het begin van het tweede semester, maar vooral de start van het project. Dit is dan ook de eerste keer dat je je groepsgenoten ziet voor het komende semester. Doorheen de week zijn er verschillend activiteiten gepland. Zo begon de week met een algemene toespraak over het researchproject en over wat er nog allemaal moet komen doorheen het tweede semester en het derde jaar. De week zijn we geëindigd met een dag waar we ons volledig konden focussen op het project. Het grote doel van deze week was om ons klaar te stomen voor het project en onze groep beter te leren kennen.
      </p>

      <p class="reflection-text observe fade-in-right">
        Ik ga beginnen met te zeggen dat ik deze week twee keer heb moeten doen, aangezien ik mijn researchproject ook twee keer heb uitgevoerd. In dit portfolio zal ik het hebben over mijn tweede ervaring van de projectweek. Deze ervaring was namelijk een stuk beter voor mij.
      </p>

      <p class="reflection-text observe fade-in-left">
        De week was verdeeld in allerlei activiteiten, zowel in grotere groepen als in onze kleinere groepjes. De eerste dag was vooral bedoeld om elkaar beter te leren kennen en te praten over onze competenties en kernkwadranten. Dit was voor mij persoonlijk geen enkel probleem, aangezien ik een heel sociaal persoon ben en een enorm open boek. Door deze sessie kwamen we achter elkaars sterke en zwakke punten. Niet iedereen in mijn groep was even sociaal, waardoor de begeleiding van een coach zeer aangenaam was. Ook omdat ik weet dat ik vrij intimiderend kan overkomen op minder sociale mensen door mijn extraverte aard. Maar uiteindelijk hebben we toch veel van elkaar geleerd, meteen een goede toon gezet in de groep, en wisten we wat we van elkaar konden verwachten.
      </p>

      <p class="reflection-text observe fade-in-right">
        Op de tweede dag kregen we dan het effectieve project gepitcht door een klant. In dit geval was het een paardenfokker die wilde bijhouden wanneer haar merries veulens kregen en het verloop van de zwangerschap makkelijk wilde volgen via een webapplicatie. We kregen weinig vrijheid in de keuze van technologie, wat begrijpelijk was aangezien het ons eerste project was, maar dat maakte in dit geval niet veel uit omdat ik al goed vertrouwd was met de technologieën die we moesten gebruiken.
      </p>

      <p class="reflection-text observe fade-in-left">
        De sessie die mij persoonlijk het meeste is bijgebleven tijdens de week, is de sessie over netwerken. Ondanks dat ik er in het begin een beetje sceptisch over was, is deze sessie heel goed meegevallen. Ik dacht oorspronkelijk dat we gewoon weer een LinkedIn-profiel zouden aanmaken, maar dat bleek niet het geval. De spreekster heeft ons meer inzicht gegeven in hoe we LinkedIn écht kunnen gebruiken en ook in het algemeen hoe we professionele contacten kunnen leggen en onderhouden. Ik heb dus veel meer geleerd van deze sessie dan ik had verwacht.
      </p>

      <p class="reflection-text observe fade-in-right">
        De activiteit die mij vanaf het begin het meeste aansprak, was natuurlijk het jobevent. Voor mij en vele anderen was dit de eerste echte interactie met bedrijven. Jammer genoeg stonden sommige bedrijven er vooral met de insteek om nog een stagiair uit het derde jaar te vinden, maar de bedrijven waarmee ik persoonlijk heb gesproken, waren allemaal geïnteresseerd in wat mij zo aantrekt in IT. Het heeft me ook extra bewust gemaakt van hoe breed de markt eigenlijk is voor applicatieontwikkeling. Het was voor mij een goede eerste ervaring met bedrijven.
      </p>

      <p class="reflection-text observe fade-in-left">
        En natuurlijk is de projectweek, het startschot van het researchproject, geëindigd met een dag waarop we ons volledig konden focussen op het project. Dit was de eerste echte dag waarop we aan het project konden werken. We hebben ons vooral beziggehouden met onderzoek doen naar wat er allemaal van ons verwacht werd binnen de webapp, en we hebben de genoteerde eisen van de klant die we hadden opgevangen eens samengelegd.
      </p>

      <h2 class="reflection-title">Reflectie</h2>

      <p class="reflection-text observe fade-in-right">
        Wanneer ik terugkijk op mijn tweede deelname aan de projectweek, merk ik dat deze ervaring mij op meerdere vlakken heeft doen groeien. De eerste keer dat ik deze week meemaakte, voelde ik me overweldigd en wist ik niet goed wat er van mij werd verwacht. Dit keer wist ik beter wat me te wachten stond en kon ik daardoor met meer zelfvertrouwen en rust aan de week beginnen. Dit heeft mijn hele ervaring positief beïnvloed.
      </p>

      <p class="reflection-text observe fade-in-left">
        Wat ik vooral geleerd heb, is het belang van samenwerken met verschillende persoonlijkheden. Doordat ik een extravert persoon ben, neem ik vaak snel het voortouw, maar deze week heb ik ingezien dat het soms beter is om wat gas terug te nemen en ook ruimte te laten aan groepsleden die minder op de voorgrond treden. De coaching die we kregen was hierin zeer waardevol. Ik heb geleerd om mijn sociale sterkte in te zetten op een verbindende manier, zodat iedereen zich comfortabel voelde in de groep.
      </p>

      <p class="reflection-text observe fade-in-right">
        Daarnaast heeft de sessie over netwerken me echt verrast. Voorheen zag ik netwerken als iets oppervlakkigs, maar ik begrijp nu dat het een cruciale vaardigheid is in onze sector. Het heeft me doen inzien dat professioneel contact leggen niet enkel draait om een visitekaartje geven of een LinkedIn-connectie maken, maar vooral om oprechte interesse tonen en relaties onderhouden.
      </p>

      <p class="reflection-text observe fade-in-left">
        Tot slot besef ik dat deze week veel meer was dan alleen een voorbereiding op het researchproject. Het was een week waarin ik niet alleen mijn groepsleden, maar ook mezelf beter heb leren kennen. Deze inzichten zal ik ook meenemen naar mijn toekomstige professionele leven.
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
.reflection-container {
  background-color: #1e1e1e;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2rem 1rem 4rem;
  box-sizing: border-box;
}

.reflection-content {
  max-width: 800px;
  width: 100%;
}

.reflection-title {
  font-size: 2rem;
  font-weight: bold;
  color: #f0f0f0;
  margin-bottom: 2rem;
  text-align: center;
}

.reflection-text {
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
</style>
