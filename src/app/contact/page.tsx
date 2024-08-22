export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-6">Contattaci</h1>
        <p className="mb-4">Siamo sempre felici di discutere nuovi progetti e idee. Compila il modulo sottostante o utilizzai nostri contatti diretti per metterti in comunicazione con noi.</p>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Informazioni di contatto</h2>
          <p>Email: info@nea.com</p>
          <p>Telefono: +39 02 1234567</p>
          <p>Indirizzo: Via dell'Innovazione, 42 - 20121 Milano</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Orari di apertura</h2>
          <p>Lunedì - Venerdì: 9:00 - 18:00</p>
          <p>Sabato - Domenica: Chiuso</p>
        </div>
      </div>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-semibold">Nome</label>
          <input type="text" id="name" className="w-full px-3 py-2 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2 font-semibold">Oggetto</label>
          <input type="text" id="subject" className="w-full px-3 py-2 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-semibold">Messaggio</label>
          <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-md" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Invia messaggio
        </button>
      </form>
    </div>
  );
}