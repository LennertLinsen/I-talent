<template>
  <div class="reflection-container">
    <div class="reflection-content">
      <h1 class="reflection-title">Eindreflectie</h1>
      <!-- Image Section -->
      <div class="image-wrapper">
        <img src="../assets/x-factor_2022.jpg" alt="X Factor 2022" class="reflection-image">
      </div>
      <p class="reflection-text observe fade-in-left">
        Toen ik begon aan deze richting, wist ik al een hele tijd dat dit was wat ik wilde doen. Ik had mezelf leren programmeren toen ik 13 jaar oud was, en bij de start van de opleiding voelde het eerste jaar dan ook grotendeels vertrouwd aan. De meeste vakken gingen vanzelf, en er kwam weinig echt nieuws op me af. In het tweede en derde jaar veranderde dat volledig: de opdrachten kregen meer diepgang, groepswerken kwamen steeds vaker voor, en ik leerde mensen kennen die verbanden legden en inzichten hadden die ook mij verrasten, ondanks mijn eerdere ervaring.
      </p>
      <p class="reflection-text observe fade-in-right">
        Dat heeft toen iets in mij losgemaakt. Het zorgde ervoor dat ik me opnieuw volledig wilde storten op IT. Ik ben altijd een sociaal persoon geweest, maar in groepswerken had ik aanvankelijk het gevoel dat ik gebonden was aan anderen en mijn vrijheid verloor, een vrijheid die ik als autodidact altijd had gehad. Zeker bij mijn eerste researchproject voelde ik dat sterk. Daarom denk ik dat het achteraf goed is geweest dat ik het project een tweede keer moest doen. Natuurlijk had dat impact op mijn motivatie, maar met de start van het tweede researchproject vond ik die motivatie weer terug.
      </p>
      <p class="reflection-text observe fade-in-left">
        Ik besefte dat een groep mijn vrijheid niet hoefde te beperken, maar juist kansen kon bieden: om bij te leren van anderen en om nieuwe aspecten van een onderwerp te ontdekken dat me interesseert. Ik heb nooit getwijfeld over mijn keuze van afstudeerrichting, en die twijfel is ook nooit gekomen. Ik wist vanaf het begin wat ik wilde doen in mijn professionele leven, en ik ben er vandaag nog steeds van overtuigd dat ik de juiste keuze heb gemaakt. Mijn passie ligt bij fullstack development, iets waar ik al jaren tijd in steek en waarin ik mezelf in de toekomst ook verder zie ontwikkelen.
      </p>
      <p class="reflection-text observe fade-in-right">
        Toch is het belangrijkste wat ik heb geleerd in deze opleiding het belang van een team. Development is geen "one-man show". Natuurlijk is het fijn om soms zelfstandig te werken en geen rekening te hoeven houden met anderen, maar ik heb het meeste geleerd van mijn collega’s, van de gezamenlijke uitdaging en van het streven naar verbetering samen met anderen. De voldoening die je voelt wanneer je samen met een team een probleem oplost, is veel groter dan wanneer je dat alleen doet. Ik ben geëvolueerd van iemand die sociaal is buiten het werk, maar tijdens het werk liever zelfstandig blijft, naar iemand die samenwerking en groepsgevoel als essentiële aspecten beschouwt binnen IT.
      </p>
      <p class="reflection-text observe fade-in-left">
        Een andere belangrijke les die ik heb geleerd, is dat IT veel meer is dan alleen development. In het eerste jaar deden de andere aspecten van IT me niet zoveel, maar vanaf het tweede en derde jaar begon dat te veranderen. Vooral toen vrienden voor andere afstudeerrichtingen kozen en ik in het IT-project in aanraking kwam met systeem- en netwerkbeheer, merkte ik hoe boeiend die domeinen ook konden zijn. Ik realiseerde me dat ik zelfs van studenten met een andere focus enorm veel kon bijleren. Daardoor groeide mijn besef dat een brede kennis binnen IT van grote waarde is, niet alleen voor mezelf, maar ook om beter te kunnen samenwerken.
      </p>
      <p class="reflection-text observe fade-in-right">
        In de toekomst zie ik mezelf eerst nog ervaring opdoen in het werkveld om vervolgens op zelfstandige basis iets op te richten, maar niet in de traditionele zin. Ik wil liefst nog steeds in groepsverband werken. Ik heb de voorbije jaren mensen leren kennen met verschillende achtergronden, binnen en buiten de opleiding, en als ik ooit iets zou oprichten, dan zou ik dat doen met mensen van wie ik elke dag bijleer en met wie ik goed samenwerk. Deze opleiding heeft ervoor gezorgd dat ik ben geëvolueerd van een sociaal en zelfzeker persoon met een zelfstandige IT-achtergrond naar een volwaardige, sociale IT’er met een passie voor samenwerking en groepsprestaties.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReflectionPage',
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
