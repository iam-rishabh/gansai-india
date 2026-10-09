import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

// Replace with the /exec URL of your NEW deployment (Workspace account)
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxBONBWA0saFq1MniYNzHwg8LkqGmhYkaUA22EIHHjom82aTQQr4o-0jq7jz2QRp9OTCg/exec";

const WHATSAPP_NUMBER = "919677464967"; // country code + number, no "+" or spaces
const BUSINESS_EMAIL = "business@gansaindia.com";

const inquiryTypes = [
  "Wholesale Inquiry",
  "DIY Kit Order",
  "Custom Manufacturing",
  "Request Catalog / Samples",
];

const initialFormData = {
  inquiryType: inquiryTypes[0],
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  website: "", // honeypot: real users never see or fill this
};

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const sendingRef = useRef(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sendingRef.current) return; // block double submits
    sendingRef.current = true;
    setLoading(true);
    setError("");

    try {
      // Bots fill the hidden field. Pretend success, send nothing.
      if (!formData.website) {
        const payload = new URLSearchParams({
          inquiryType: formData.inquiryType,
          name: formData.name.trim(),
          company: formData.company.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        });

        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 15000);
        try {
          // no-cors: the response is opaque, so we can only detect network failures
          await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            body: payload,
            signal: controller.signal,
          });
        } finally {
          clearTimeout(timer);
        }
      }

      setSubmitted(true);
      setFormData(initialFormData);
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error(err);
      setError(
        `Something went wrong. Please try again or email us at ${BUSINESS_EMAIL}.`
      );
    } finally {
      setLoading(false);
      sendingRef.current = false;
    }
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Gansai India, I'd like to know more about your products."
  )}`;

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute -z-10 inset-0 gradient-warm" />
      <div className="absolute -z-10 top-20 right-10 h-96 w-96 glow-ember flame-flicker rounded-full blur-3xl opacity-50" />

      <div className="container-page grid lg:grid-cols-2 gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Let's build together</p>
          <h2 className="mt-4 text-4xl sm:text-5xl text-balance">
            Ready to partner with India's rising candle manufacturer?
          </h2>
          <p className="mt-5 text-foreground/75 text-lg max-w-lg">
            Tell us a little about your needs. Our team responds within one
            business day with pricing, samples or a tailored proposal.
          </p>

          <div className="mt-10 space-y-5">
            <Detail icon={<MapPin className="h-5 w-5" />} label="Factory">
              Plot 280, Ward 10/A, Gurukul Area, Gandhidham, Gujarat (370201)
            </Detail>
            <Detail icon={<Phone className="h-5 w-5" />} label="Call">
              <a href="tel:+919677464967" className="hover:text-primary">+91 9677464967</a>
            </Detail>
            <Detail icon={<Mail className="h-5 w-5" />} label="Email">
              <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-primary">
                {BUSINESS_EMAIL}
              </a>
            </Detail>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary transition"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="rounded-3xl bg-card border border-border p-8 shadow-xl shadow-primary/5"
        >
          <fieldset>
            <legend className="block text-xs uppercase tracking-[0.2em] text-foreground/60 mb-3">
              Inquiry type
            </legend>
            <div className="flex flex-wrap gap-2">
              {inquiryTypes.map((t) => (
                <label key={t} className="cursor-pointer">
                  <input
                    type="radio"
                    name="inquiryType"
                    value={t}
                    checked={formData.inquiryType === t}
                    onChange={handleChange}
                    className="peer sr-only"
                  />
                  <span className="inline-block text-sm px-4 py-2 rounded-full border border-border bg-background peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:border-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 transition-colors">
                    {t}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Full name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required />
            <Field label="Company" name="company" autoComplete="organization" value={formData.company} onChange={handleChange} />
            <Field label="Email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} required />
            <Field label="Phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={handleChange} />
          </div>

          <label className="mt-4 block">
            <span className="block text-xs uppercase tracking-[0.2em] text-foreground/60 mb-2">
              Tell us about your project
            </span>
            <textarea
              rows={4}
              name="message"
              required
              maxLength={4000}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              placeholder="Volumes, formats, timelines, formulations…"
            />
          </label>

          {/* Honeypot: hidden from users and screen readers */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Website
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3.5 text-sm font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:hover:translate-y-0"
          >
            {loading ? "Sending..." : "Send inquiry"}
            {!loading && <ArrowRight className="h-4 w-4" />}
          </button>

          <div aria-live="polite" role="status">
            {submitted && (
              <p className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm text-primary">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                Thank you! Your inquiry has been sent. Check your email for confirmation.
              </p>
            )}
            {error && <p className="mt-3 text-xs text-red-500 text-center">{error}</p>}
          </div>

          <p className="mt-3 text-xs text-foreground/55 text-center">
            We respond within 1 business day. No spam, ever.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, value, onChange, autoComplete }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] text-foreground/60 mb-2">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={200}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
      />
    </label>
  );
}

function Detail({ icon, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid place-items-center h-10 w-10 rounded-full bg-primary/12 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/55">{label}</p>
        <p className="mt-1 text-foreground/90">{children}</p>
      </div>
    </div>
  );
}