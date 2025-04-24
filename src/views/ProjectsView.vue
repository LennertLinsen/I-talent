<template>
  <div class="projects-container">
    <h2 class="section-title text-center">Overzicht Activiteiten</h2>

    <!-- Seminars -->
    <div class="seminars mb-10">
      <h4 class="sub-category-title">Seminaries</h4>
      <div class="seminar-cards">
        <div v-for="(seminar, index) in seminars" :key="index" class="seminar-card">
          <div class="seminar-card-content">
            <h5 class="seminar-title">{{ seminar.title }}</h5>
            <p class="seminar-description">{{ seminar.description }}</p>
            <div class="seminar-meta">{{ seminar.organizer }} | {{ seminar.date }} - {{ seminar.duration }} uur</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Innovatie -->
    <div class="innovation mb-10">
      <h4 class="sub-category-title">Innovatie</h4>
      <div class="innovation-cards">
        <div v-for="(innovation, index) in innovations" :key="index" class="innovation-card">
          <div class="innovation-card-content">
            <h5 class="innovation-title">{{ innovation.title }}</h5>
            <p class="innovation-description">{{ innovation.description }}</p>
            <div class="innovation-meta">{{ innovation.organizer }} | {{ innovation.date }} - {{ innovation.duration }} uur</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Persoonlijke Ontwikkeling -->
    <div class="personal-development">
      <h4 class="sub-category-title">Persoonlijke Ontwikkeling</h4>
      <div class="personal-development-cards">
        <div v-for="(session, index) in personalDevelopmentSessions" :key="index" class="session-card">
          <div class="session-card-content">
            <h5 class="session-title">{{ session.title }}</h5>
            <p class="session-description">{{ session.description }}</p>
            <div class="session-meta">{{ session.organizer }} | {{ session.date }} - {{ session.duration }} uur</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      seminars: [
        {
          title: 'Accenture: Prototyping van een full-stack applicatie',
          description: 'Seminarie over wat er allemaal komt kijken bij een full-stack applicatie en klein praktijk gedeelte om eens kort te proberen.',
          organizer: 'Accenture, Hogeschool PXL',
          date: '28 februari 2023',
          duration: 3
        },
        {
          title: 'Cegeka: The Challenge of Open Source',
          description: 'Seminarie ging over de handigheid van Open Source, maar ook over hoe het voor problemen kan zorgen.',
          organizer: 'Cegeka, Hogeschool PXL',
          date: '28 maart 2023',
          duration: 3
        },
        {
          title: 'BIQ: Het nut van clean code, pull requests en code review in een product development lifecycle',
          description: 'Seminarie over het proces van de ontwikkeling van een applicatie en bijkomend over hoe de basis principes van GitHub beter gebruikt kunnen worden.',
          organizer: 'BIQ, Hogeschool PXL',
          date: '25 april 2023',
          duration: 3
        },
        {
          title: "Kabisa: Flutter",
          description: "Seminarie over het opzetten en ontwikkelen van een simpele Flutter-applicatie.",
          organizer: 'Kabisa, Hogeschool PXL',
          date: '2 mei 2023',
          duration: 3
        },
        {
          title: "Cegeka: Digital Twins",
          description: "Digital Twins is een project van Cegeka dat een AI-model traint om verkeerssituaties in te schatten en eventuele oplossingen te zoeken.",
          organizer: "Cegeka, Corda Campus",
          date: '23 oktober 2024',
          duration: 3
        },
        {
          title: "Cegeka: Enterprise Architecture",
          description: "Bekijken over hoe verandering in technologie invloed kan hebben op de architectuur van een oplossing.",
          organizer: "Cegeka, Corda Campus",
          date: '20 november 2024',
          duration: 3
        },
        {
          title: "The Value Hub: How to facilitate a workshop",
          description: "Seminarie over de design-methode. De methode wordt gebruikt om problemen sneller op te lossen en een minimal viable product af te leveren.",
          organizer: "The Value Hub, Corda Campus",
          date: '4 december 2024',
          duration: 3
        },
        {
          title: "AE: State Management for Angular",
          description: "Seminarie over de verandering van zone.js naar signals in Angular en hoe ermee te werk gaan.",
          organizer: "AE, Corda Campus",
          date: '11 december 2024',
          duration: 3
        }
      ],
      innovations: [
        {
          title: 'Innovatieroute UI/UX',
          description: 'De innovatieroute was 2 dagen en bevatte zowel een technische als praktische uitleg over hoe belangrijk een goede UX en UI zijn voor een applicatie.',
          organizer: 'Wisemen en App Foundry, Corda Campus',
          date: '24 september 2024 en 8 oktober 2024',
          duration: 25
        },
        {
          title: 'Hacktopia',
          description: 'De Hackathon ging over hoe we een andere planeet hebben ontdekt en verhuizen naar daar, en een applicatie bedenken voor deze nieuwe wereld.',
          organizer: 'AE, Interleuvenlaan 74 Leuven',
          date: '1 maart 2025',
          duration: 13
        }
      ],
      personalDevelopmentSessions: [
        {
          title: 'Projectweek 2TIN',
          description: 'De projectweek was een voorbereiding op ons eerste grote project binnen de afstudeerrichting en bevatte activiteiten om onze groep beter te leren kennen.',
          organizer: 'Hogeschool PXL',
          date: '12 februari 2024 – 16 februari 2024',
          duration: 27
        },
        {
          title: 'POP-sessie 2TIN: Brein aan het werk! Niet storen!',
          description: 'Sessie over de impact van lange online uren en tools om efficiënter te werken.',
          organizer: 'Hogeschool PXL',
          date: '20 februari 2024',
          duration: 2
        },
        {
          title: 'POP-sessie 2TIN: Titel POPping',
          description: 'Sessie rond zelfkennis en het bespreken van eigen vaardigheden en die van teamgenoten.',
          organizer: 'Hogeschool PXL',
          date: '7 maart 2024',
          duration: 2
        },
        {
          title: 'POP-sessie 3TIN: My Team and I',
          description: 'Gebruik van de piramide van Lencioni om te ontdekken wat nodig is voor een goed functionerend team.',
          organizer: 'Hogeschool PXL, Corda Campus',
          date: '16 oktober 2024',
          duration: 2
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects-container {
  background-color: #1e1e1e;
  color: #f1f1f1;
  padding: 2rem;
}

.section-title {
  font-size: 2rem;
  color: #f0f0f0;
  margin-bottom: 3rem;
  font-weight: 700;
}

.sub-category-title {
  font-size: 1.5rem;
  color: #eaeaea;
  margin-bottom: 1.5rem;
  font-weight: 600;
  border-bottom: 2px solid #4A90E2;
  padding-bottom: 0.5rem;
}

.seminar-cards,
.innovation-cards,
.personal-development-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.seminar-card,
.innovation-card,
.session-card {
  background-color: #1d1d1d;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.seminar-card:hover,
.innovation-card:hover,
.session-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

.seminar-title,
.innovation-title,
.session-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #4A90E2;
  margin-bottom: 1rem;
}

.seminar-description,
.innovation-description,
.session-description {
  font-size: 1rem;
  color: #ddd;
  margin-bottom: 1rem;
}

.seminar-meta,
.innovation-meta,
.session-meta {
  font-size: 0.875rem;
  color: #9CA3AF;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
  }
}
</style>
