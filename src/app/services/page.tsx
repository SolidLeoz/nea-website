import ServiceCard from '../../components/ServiceCard';

const services = [
  {
    title: 'Sviluppo Web',
    description: 'Creiamo siti web responsive, e-commerce e applicazioni web utilizzando le tecnologie più moderne come React, Next.js e Node.js.',
  },
  {
    title: 'Applicazioni iOS',
    description: `Sviluppiamo app iOS native e cross-platform per iPhone e iPad, garantendo un'esperienza utente fluida e intuitiva.`,
  },
  {
    title: 'Applicazioni Android',
    description: 'Realizziamo app Android native e cross-platform per smartphone e tablet, ottimizzate per prestazioni e usabilità.',
  },
  {
    title: 'UI/UX Design',
    description: `Progettiamo interfacce utente intuitive e accattivanti, garantendo un'esperienza utente ottimale su tutti i dispositivi.`,
  },
  {
    title: 'Consulenza IT',
    description: 'Offriamo servizi di consulenza IT per aiutare le aziende a definire la propria strategia digitale e implementare soluzioni tecnologiche efficaci.',
  },
  {
    title: 'Manutenzione e Supporto',
    description: 'Forniamo servizi di manutenzione continua e supporto tecnico per garantire che le vostre soluzioni digitali rimangano sempre aggiornate e performanti.',
  },
];

export default function Services() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">I nostri servizi</h1>
      <p className="mb-8">In Nea, offriamo una gamma completa di servizi digitali per soddisfare tutte le esigenze del vostro business:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
}