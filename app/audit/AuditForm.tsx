'use client';

import { useState, type FormEvent } from 'react';
import { services } from '../data/services';
import { whatsappUrl } from '../data/site';

export function AuditForm() {
  const [ready, setReady] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReady(true);
  }

  if (ready) {
    return (
      <div className="audit-form-next-step" role="status">
        <p className="eyebrow eyebrow-dark">Ready for the next step</p>
        <h3>Your form details have not been sent or stored.</h3>
        <p>Open WhatsApp to start the audit conversation. Share only the business information you choose to send directly to Kraftt.</p>
        <div className="audit-form-actions">
          <a className="button button-accent" href={whatsappUrl('Hi Kraftt, I would like to request the ₹999 Digital Presence Audit.')}>Open WhatsApp</a>
          <button className="button button-outline-dark" type="button" onClick={() => setReady(false)}>Edit the form</button>
        </div>
      </div>
    );
  }

  return (
    <form className="audit-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Name<input name="name" autoComplete="name" required /></label>
        <label>Business name<input name="business" autoComplete="organization" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
        <label>WhatsApp number<input name="whatsapp" type="tel" autoComplete="tel" required /></label>
        <label>Industry<input name="industry" required /></label>
        <label>Website or social links<input name="links" type="url" placeholder="https://" /></label>
        <label className="form-span">Main challenge<textarea name="challenge" rows={5} required /></label>
        <label>Service of interest
          <select name="service" defaultValue="" required>
            <option value="" disabled>Choose a service</option>
            {services.map((service) => <option key={service.slug} value={service.slug}>{service.name}</option>)}
          </select>
        </label>
        <label>Desired timeline
          <select name="timeline" defaultValue="" required>
            <option value="" disabled>Choose a timeline</option>
            <option>Within 30 days</option><option>1–3 months</option><option>3–6 months</option><option>Exploring first</option>
          </select>
        </label>
      </div>
      <label className="consent"><input type="checkbox" name="consent" required /> I consent to Kraftt using these details to review my business and contact me about the audit.</label>
      <button className="button button-accent" type="submit">Review the Next Step</button>
    </form>
  );
}
