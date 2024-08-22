import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce di moda sostenibile',
    description: 'Sviluppo di una piattaforma e-commerce completa per un brand di moda sostenibile, con integrazione di pagamenti e gestione dell\'inventario.',
    image: '/images/fashion-ecommerce.jpg',
  },
  {
    title: 'App di fitness per iOS e Android',
    description: 'Creazione di un\'app cross-platform per il tracciamento dell\'attività fisica, con sincronizzazione cloud e integrazione con dispositivi wearable.',
    image: '/images/fitness-app.jpg',
  },
  {
    title: 'Piattaforma di gestione progetti per startup',
    description: 'Sviluppo di una web app per la gestione di progetti e team, con funzionalità di collaborazione in tempo reale e analisi delle prestazioni.',
    image: '/images/project-management.jpg',
  },
  // Aggiungi altri progetti secondo necessità
];

export default function Portfolio() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Il nostro Portfolio</h1>
      <p className="mb-8">Ecco alcuni dei progetti più significativi che abbiamo realizzato per i nostri clienti:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}