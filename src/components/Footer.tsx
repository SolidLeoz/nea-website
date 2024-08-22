import Link from 'next/link';

const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Nea</h3>
          <p className="text-gray-400">Innovazione digitale per il tuo business</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Servizi</h4>
          <ul className="text-gray-400">
            <li><Link href="/services#web" className="hover:text-white">Sviluppo Web</Link></li>
            <li><Link href="/services#ios" className="hover:text-white">Applicazioni iOS</Link></li>
            <li><Link href="/services#android" className="hover:text-white">Applicazioni Android</Link></li>
            <li><Link href="/services#design" className="hover:text-white">UI/UX Design</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Azienda</h4>
          <ul className="text-gray-400">
            <li><Link href="/about" className="hover:text-white">Chi siamo</Link></li>
            <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link href="/careers" className="hover:text-white">Lavora con noi</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contatti</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Contattaci</h4>
          <p className="text-gray-400">Email: info@nea.com</p>
          <p className="text-gray-400">Tel: +39 02 1234567</p>
          <p className="text-gray-400">Via dell'Innovazione, 42</p>
          <p className="text-gray-400">20121 Milano, Italia</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Nea. Tutti i diritti riservati.</p>
        <div className="flex mt-4 md:mt-0">
          <Link href="/privacy" className="text-gray-400 hover:text-white text-sm mx-2">Privacy Policy</Link>
          <Link href="/terms" className="text-gray-400 hover:text-white text-sm mx-2">Termini di Servizio</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;