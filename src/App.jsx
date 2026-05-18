export default function CochetConstructionPortfolio() {
  const projects = [
    {
      title: "Salle de bain moderne",
      image: "Avant.png",
      category: "Céramique & rénovation",
    },
    {
      title: "Rénovation de douche",
      image: "Avant (5).png",
      category: "Transformation intérieure",
    },
    {
      title: "Projet haut de gamme",
      image: "Avant (6).png",
      category: "Finition premium",
    },
    {
      title: "Rénovation de plancher",
      image: "Avant (8).png",
      category: "Plancher & rénovation",
    },
    {
      title: "Rénovation de douche 2",
      image: "Avant (9).png",
      category: "Transformation intérieure",
    },
    {
      title: "Construction de patio",
      image: "IMG_0018.jpeg",
      category: "Travaux extérieur",
    },
  ];

  const services = [
    "Pose de céramique",
    "Rénovation de salle de bain",
    "Construction de decks",
    "Revêtement de planchers",
    "Travaux résidentiels",
    "Finition intérieure",
  ];
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
            src="/Logo.8.1.svg"
            alt="Cochet Construction"
            className="h-20 w-auto"
            /> 
          
            <div>
              <h1 className="text-xl font-bold tracking-wide">
                Cochet Construction
              </h1>
              <p className="text-sm text-gray-400">
                Rénovation résidentielle haut de gamme
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-gray-300">
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#portfolio" className="hover:text-white transition">
              Portfolio
            </a>
            <a href="#about" className="hover:text-white transition">
              À propos
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="IMG_9198.jpeg"
          alt="Projet Cochet Construction"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#0f0f0f]" />

        <div className="relative z-10 max-w-5xl px-6 text-center">
          <div className="flex justify-center mb-8">
            <img
              src="/logo.8.3.svg"
              alt="Logo Cochet Construction"
              className="w-160 w md-40"
            />
          

            
          </div>

          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-wide leading-tight">
            Construction &
            <span className="block text-[#a30000]">Rénovation</span>
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Entrepreneur en rénovation résidentielle spécialisé en
            céramique, salles de bain, planchers et finition haut de
            gamme.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#portfolio"
              className="bg-[#a30000] hover:bg-[#870000] transition px-8 py-4 rounded-2xl font-semibold shadow-2xl"
            >
              Voir les projets
            </a>

            <a
              href="#contact"
              className="border border-white/20 hover:border-white transition px-8 py-4 rounded-2xl font-semibold"
            >
              Demander une soumission
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.3em] text-[#a30000] text-sm mb-4">
              Services
            </p>

            <h3 className="text-4xl md:text-5xl font-black mb-6">
              Expertise résidentielle
            </h3>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Des travaux propres, structurés et exécutés avec précision.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#a30000]/50 transition group"
              >
                <div className="w-8 h-8 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#a30000]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <div className="w-3 h-3 md:w-5 md:h-5 bg-[#a30000] rounded-full" />
                </div>

                <h4 className="text-[10px] md:text-2xl font-bold mb-1 md:mb-3">{service}</h4>

                <p className="hidden md:block text-gray-400 leading-relaxed">
                  Travail soigné, durable et adapté aux besoins de chaque
                  projet résidentiel.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-28 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.3em] text-[#a30000] text-sm mb-4">
              Portfolio
            </p>

            <h3 className="text-4xl md:text-5xl font-black mb-6">
              Projets récents
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-white/5 border border-white/10"
              >
                <div className="overflow-hidden h-[95 nb
                px] md:h-[250px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <p className="text-[#a30000] uppercase tracking-wider text-sm mb-3">
                    {project.category}
                  </p>

                  <h4 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h4>

                  <p className="text-gray-400 leading-relaxed">
                    Projet réalisé avec une attention particulière aux
                    détails, à la finition et à la durabilité.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#a30000] text-sm mb-4">
              À propos
            </p>

            <h3 className="text-4xl md:text-5xl font-black leading-tight mb-8">
              Une approche moderne de la rénovation
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Cochet Construction combine expérience terrain, précision
              technique et standards élevés de finition afin de livrer des
              projets résidentiels durables et esthétiques.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Chaque projet est exécuté avec une attention particulière aux
              détails, à la propreté du chantier et à la satisfaction du
              client.
            </p>
          </div>

          <div className="relative">
            <img
              src="IMG_1520.jpeg"
              alt="Travaux Cochet Construction"
              className="rounded-[2rem] shadow-2xl border border-white/10"
            />

            <div className="absolute -bottom-8 -left-8 bg-[#a30000] text-white p-8 rounded-3xl shadow-2xl">
              <p className="text-5xl font-black">100%</p>
              <p className="uppercase tracking-widest text-sm mt-2">
                Travail soigné
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-28 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src="IMG_0274.jpeg"
              alt="Projet rénovation"
              className="rounded-3xl h-[500px] object-contain w-full"
            />

            <img
              src="IMG_0018.jpeg"
              alt="Projet construction"
              className="rounded-3xl h-[500px] object-contain w-full"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-[#a30000] text-sm mb-4">
            Contact
          </p>

          <h3 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            Discutons de votre projet
          </h3>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Pour une rénovation résidentielle, un projet de céramique ou
            une transformation intérieure, contactez Cochet Construction.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="mailto:felix.cochet2005@gmail.com"
              className="bg-[#a30000] hover:bg-[#870000] transition px-10 py-5 rounded-2xl font-semibold text-lg"
            >
              Envoyer un courriel
            </a>

            <a
              href="https://www.instagram.com/co__construction/"
              className="border border-white/20 hover:border-white transition px-10 py-5 rounded-2xl font-semibold text-lg"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61577380441076"
              className="bg-[#a30000] hover:bg-[#870000] transition px-10 py-5 rounded-2xl font-semibold text-lg"
            >
              Facebook
            </a>

            <a
              href="tel:4388253987"
              className="bg-[#a30000] hover:bg-[#870000] transition px-10 py-5 rounded-2xl font-semibold text-lg"
            >
              Appel téléphonique
            </a>
            
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-gray-500 text-sm">
        © 2026 Cochet Construction — Tous droits réservés.
      </footer>
    </div>
  );
}
