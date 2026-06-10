import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

const inquiryTypes = [
  "Wholesale Inquiry",
  "DIY Kit Order",
  "Custom Manufacturing",
  "Request Catalog / Samples",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form fields state
  const [formData, setFormData] = useState({
    inquiryType: inquiryTypes[0],
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "radio" && name === "inquiryType") {
      setFormData((prev) => ({ ...prev, inquiryType: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Replace with your Google Apps Script Web App URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbw_SxMSSwAcufbj_WL7Gj7hOSquLW2F-4_LLSbubr3G9li9myTH7eyy7jX9VnhRnEp2yw/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // required for Google Apps Script (simple)
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData),
      });
      // With no-cors we can't read response, but it still sends
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

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
              Plot 280, Ward 10/A, Gurukul Area, Gandhidham Gujarat (370201)
            </Detail>
            <Detail icon={<Phone className="h-5 w-5" />} label="Call">
              <a href="tel:+919677464967" className="hover:text-primary">+91 9677464967</a>
            </Detail>
            <Detail icon={<Mail className="h-5 w-5" />} label="Email">
              <a href="mailto:gansai.india@gmail.com" className="hover:text-primary">
                gansai.india@gmail.com
              </a>
            </Detail>
          </div>

          <a
            href="https://wa.me/9677464967"
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
          <label className="block text-xs uppercase tracking-[0.2em] text-foreground/60 mb-3">
            Inquiry type
          </label>
          <div className="flex flex-wrap gap-2">
            {inquiryTypes.map((t, i) => (
              <label key={t} className="cursor-pointer">
                <input
                  type="radio"
                  name="inquiryType"
                  value={t}
                  checked={formData.inquiryType === t}
                  onChange={handleChange}
                  className="peer sr-only"
                />
                <span className="inline-block text-sm px-4 py-2 rounded-full border border-border bg-background peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:border-primary transition-colors">
                  {t}
                </span>
              </label>
            ))}
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Full name" name="name" value={formData.name} onChange={handleChange} required />
            <Field label="Company" name="company" value={formData.company} onChange={handleChange} />
            <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            <Field label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="mt-4">
            <label className="block text-xs uppercase tracking-[0.2em] text-foreground/60 mb-2">
              Tell us about your project
            </label>
            <textarea
              rows={4}
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              placeholder="Volumes, formats, timelines, formulations…"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3.5 text-sm font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all disabled:opacity-50"
          >
            {loading ? "Sending..." : submitted ? "Thank you — we'll be in touch" : "Send inquiry"}
            {!submitted && !loading && <ArrowRight className="h-4 w-4" />}
          </button>
          {error && <p className="mt-3 text-xs text-red-500 text-center">{error}</p>}
          <p className="mt-3 text-xs text-foreground/55 text-center">
            We respond within 1 business day. No spam, ever.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

// ... (Detail and Field components remain the same, but Field now accepts value/onChange)
function Field({ label, name, type = "text", required, value, onChange }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] text-foreground/60 mb-2">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
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