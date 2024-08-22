export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Chi siamo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Nea è un'azienda innovativa nel campo dello sviluppo web e mobile, fondata nel 2015 da un gruppo di appassionati tecnologi con una visione comune: rendere il digitale accessibile e potente per ogni business.
          </p>
          <p className="mb-4">
            La nostra missione è quella di fornire soluzioni digitali all'avanguardia che non solo soddisfano le esigenze attuali dei nostri clienti, ma anticipano anche le tendenze future del mercato.
          </p>
          <p>
            Con un team di oltre 50 professionisti altamente qualificati, tra cui sviluppatori, designer UX/UI, project manager e specialisti di marketing digitale, siamo in grado di gestire progetti di ogni dimensione e complessità.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">I nostri valori</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Innovazione continua</li>
            <li>Qualità senza compromessi</li>
            <li>Collaborazione e trasparenza</li>
            <li>Formazione e crescita professionale</li>
            <li>Responsabilità sociale e ambientale</li>
          </ul>
        </div>
      </div>
    </div>
  );
}