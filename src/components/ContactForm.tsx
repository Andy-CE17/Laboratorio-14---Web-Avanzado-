"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

export default function ContactForm({ recipient }: { recipient?: string }) {
  const [notice, setNotice] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (name.length < 2 || subject.length < 3 || message.length < 10) {
      setNotice("Revisa los campos: escribe tu nombre, un asunto y un mensaje de al menos 10 caracteres.");
      return;
    }
    if (!recipient) {
      setNotice("El envío de mensajes todavía no está habilitado. Por ahora puedes contactarme desde mi perfil de GitHub.");
      return;
    }
    const body = `Nombre: ${name}\nCorreo: ${email}\n\n${message}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNotice("Tu mensaje está preparado. Confirma el envío en tu aplicación de correo.");
  }

  return (
    <form className="contact-form" onSubmit={submit} aria-labelledby="contact-form-title">
      <h2 id="contact-form-title">Escríbeme</h2>
      <div className="contact-form-row">
        <div className="form-field"><label htmlFor="contact-name">Nombre</label><input id="contact-name" name="name" placeholder="Tu nombre" autoComplete="name" minLength={2} maxLength={120} required /></div>
        <div className="form-field"><label htmlFor="contact-email">Correo electrónico</label><input id="contact-email" name="email" type="email" placeholder="tu@correo.com" autoComplete="email" maxLength={254} required /></div>
      </div>
      <div className="form-field"><label htmlFor="contact-subject">Asunto</label><input id="contact-subject" name="subject" placeholder="Motivo de tu mensaje" minLength={3} maxLength={160} required /></div>
      <div className="form-field"><label htmlFor="contact-message">Mensaje</label><textarea id="contact-message" name="message" placeholder="Cuéntame un poco sobre tu idea..." rows={4} minLength={10} maxLength={5000} required /></div>
      <button type="submit" className="button button-primary">Enviar mensaje <Send size={21} aria-hidden="true" /></button>
      {recipient && <p className="form-help">Se abrirá tu aplicación de correo para confirmar el envío.</p>}
      {notice && <p className="form-notice" role="status">{notice}</p>}
    </form>
  );
}
