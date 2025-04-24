<template>
  <div class="home p-4">
    <div class="text-center max-w-3xl mx-auto">
      <img
          src="../assets/foto_ik.jpg"
          alt="Lennert Linsen"
          class="rounded-full mx-auto mb-4"
      />
      <p
          class="text-lg leading-relaxed observe fade-in-left"
      >
        Ik ben Lennert Linsen, 21 jaar en student Toegepaste Informatica met afstudeerrichting applicatieontwikkeling. Mijn interesse ligt vooral bij het bouwen van applicaties, websites en webapplicaties. Daarnaast ben ik ook bezig met gamedevelopment. In mijn vrije tijd hou ik me dan ook bezig met in source code van complexere games te duiken om te snappen hoe alles werkt.
      </p>
      <p
          class="text-lg leading-relaxed mt-4 observe fade-in-right"
      >
        Wat mij typeert, is mijn vermogen om snel complexe zaken te doorgronden en ze vervolgens op een eenvoudige en heldere manier uit te leggen. Ik ben leergierig, praat graag en hou ervan om allerlei weetjes en informatie op te pikken. Die nieuwsgierigheid zorgt er soms voor dat ik me helemaal kan vastbijten in een onderwerp dat me interesseert.
      </p>
      <p
          class="text-lg leading-relaxed mt-4 observe fade-in-left"
      >
        Qua toekomst weet ik het nog niet helemaal. Ik ben niet iemand die alles tot in de puntjes plant naar de toekomst toe. Of ik later in België blijf, zelfstandige word of misschien naar het buitenland ga heb ik nog geen keuze over gemaakt.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
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
.home {
  background-color: #1e1e1e;
  color: #f0f0f0;
  padding-top: 50px;
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
