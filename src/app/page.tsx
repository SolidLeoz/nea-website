import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Benvenuti in Nea</h1>
      <p className="text-xl mb-8">Innovazione digitale per il tuo business</p>
      <div className="mb-12">
        <Link href="/services" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
          Scopri i nostri servizi
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Sviluppo Web</h2>
          <p>Creiamo siti web all'avanguardia che catturano l'essenza del tuo brand.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">App iOS</h2>
          <p>Sviluppiamo applicazioni iOS intuitive e performanti per il tuo pubblico Apple.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">App Android</h2>
          <p>Realizziamo app Android robuste e scalabili per raggiungere tutti i tuoi utenti.</p>
        </div>
      </div>
    </div>
  );
}