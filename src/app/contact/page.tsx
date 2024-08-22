'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Invio in corso...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Messaggio inviato con successo!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Si è verificato un errore. Riprova più tardi.');
      }
    } catch (error) {
      console.error('Errore:', error);
      setStatus('Si è verificato un errore. Riprova più tardi.');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-6">Contattaci</h1>
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
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-semibold">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2 font-semibold">Oggetto</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-semibold">Messaggio</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border rounded-md"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Invia messaggio
        </button>
        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </div>
  );
}