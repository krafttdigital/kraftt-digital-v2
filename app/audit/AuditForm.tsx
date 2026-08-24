'use client';

import { useRef, useState, type FormEvent } from 'react';
import { services } from '../data/services';
import { whatsappUrl } from '../data/site';

const formspreeEndpoint = 'https://formspree.io/f/mgawjopk';

const messageFields = [
  ['name', 'Name'],
  ['business', 'Business'],
  ['email', 'Email'],
  ['whatsapp', 'WhatsApp number'],
  ['category', 'Business category'],
  ['primaryGap', 'Main gap'],
  ['links', 'Website / social link'],
  ['service', 'Service of interest'],
  ['timeline', 'Desired timeline'],
  ['context', 'Short context'],
] as const;

export function AuditForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function getValidForm() {
    const form = formRef.current;
    if (!form || !form.reportValidity()) return null;
    return form;
  }

  function handleWhatsApp() {
    const form = getValidForm();
    if (!form) return;

    const data = new FormData(form);
    const details = messageFields
      .map(([name, label]) => [label, String(data.get(name) ?? '').trim()] as const)
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`)
      .join('\n');

    const message = `Hi Kraftt, I would like to request the ₹999 Digital Presence Audit.\n\n${details}\n\nI consent to Kraftt using these details to review my business and contact me about the audit.`;
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
  }

  async function handleFormspree(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = getValidForm();
    if (!form) return;

    setSubmitState('sending');
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Form submission failed');
      form.reset();
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    }
  }

  return (
    <form ref={formRef} className="audit-form" action={formspreeEndpoint} method="POST" onSubmit={handleFormspree}>
      <input type="hidden" name="_subject" value="New ₹999 Digital Presence Audit request" />

      <fieldset className="audit-form-group">
        <legend><span>01</span><span><strong>You and the business</strong><small>Four quick details</small></span></legend>
        <div className="audit-field-grid">
          <label><span>Your name *</span><input name="name" autoComplete="name" placeholder="Your full name" required /></label>
          <label><span>Business name *</span><input name="business" autoComplete="organization" placeholder="Business or brand name" required /></label>
          <label><span>Email *</span><input name="email" type="email" autoComplete="email" placeholder="you@business.com" required /></label>
          <label><span>WhatsApp number *</span><input name="whatsapp" type="tel" autoComplete="tel" inputMode="tel" placeholder="Number with country code" required /></label>
        </div>
      </fieldset>

      <fieldset className="audit-form-group">
        <legend><span>02</span><span><strong>What feels blocked?</strong><small>Choose the closest answer</small></span></legend>
        <div className="audit-field-grid">
          <label><span>Business category *</span><select name="category" defaultValue="" required><option value="" disabled>Select a category</option><option>Consumer brand / E-commerce</option><option>Professional services</option><option>Manufacturing / B2B</option><option>Personal brand</option><option>Other</option></select></label>
          <label><span>Main gap *</span><select name="primaryGap" defaultValue="" required><option value="" disabled>What needs attention first?</option><option>People cannot find us online</option><option>Our presence does not build trust</option><option>Website is not generating enquiries</option><option>Brand and content feel inconsistent</option><option>We need better internal systems</option><option>Starting from scratch</option><option>Not sure yet</option></select></label>
          <label><span>Website or social link</span><input name="links" type="url" inputMode="url" placeholder="https:// — optional" /></label>
          <label><span>Service of interest</span><select name="service" defaultValue=""><option value="">Not sure yet</option>{services.map((service) => <option key={service.slug} value={service.name}>{service.name}</option>)}</select></label>
        </div>
      </fieldset>

      <fieldset className="audit-form-group">
        <legend><span>03</span><span><strong>One short note</strong><small>Two or three lines are enough</small></span></legend>
        <div className="audit-field-grid">
          <label><span>Desired timeline</span><select name="timeline" defaultValue=""><option value="">Still exploring</option><option>Within 30 days</option><option>1–3 months</option><option>3–6 months</option></select></label>
          <label className="audit-field-span"><span>Anything we should know?</span><textarea name="context" rows={3} maxLength={500} placeholder="Example: We have a website, but people still call to ask basic questions. Optional." /></label>
        </div>
      </fieldset>

      <label className="audit-consent"><input type="checkbox" name="consent" value="Yes" required /><span>I consent to Kraftt using these details to review my business and contact me about the audit.</span></label>

      <div className="audit-submit-options">
        <div><span>Choose how to send</span><p>Both options include every detail entered above.</p></div>
        <button className="button button-accent" type="button" onClick={handleWhatsApp}>Send on WhatsApp <span aria-hidden="true">↗</span></button>
        <button className="button button-outline-dark" type="submit" disabled={submitState === 'sending'}>{submitState === 'sending' ? 'Sending…' : 'Submit securely'} <span aria-hidden="true">→</span></button>
      </div>

      {submitState === 'success' && <p className="audit-form-status success" role="status"><strong>Request received.</strong> Kraftt will review the details and contact you with the next step.</p>}
      {submitState === 'error' && <p className="audit-form-status error" role="alert"><strong>The secure form could not be sent.</strong> Please try again or use the WhatsApp option.</p>}
    </form>
  );
}
