import { motion } from "framer-motion";
import { useState } from "react";
import { Send, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

const ContactSection = () => {
  const [clientType, setClientType] = useState<"b2b" | "d2c">("b2b");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { placeholder, value } = e.target;
    const fieldMap: Record<string, keyof typeof formData> = {
      "Full Name": "name",
      "Company Name": "company",
      "Email": "email",
      "Phone / WhatsApp": "phone",
      "Describe your problem statement or engineering challenge...": "message",
    };
    const field = fieldMap[placeholder];
    if (field) {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage("Name and email are required");
      setSubmitStatus("error");
      return;
    }

    if (!formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address");
      setSubmitStatus("error");
      return;
    }

    setIsLoading(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const payload = {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        clientType: clientType,
        message: formData.message,
        sourcePage: window.location.pathname,
      };

      const response = await fetch("/send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative z-[1] py-16 md:py-24 px-4 sm:px-8 md:px-16 bg-accent text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="section-label text-primary">
              Problem-Solving Portal
            </span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="section-title text-primary-foreground mb-4">
            GOT AN ENGINEERING CHALLENGE? LET'S CRACK IT.
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto text-[15px]">
            Share your toughest problem — our engineers respond within 4 hours with a hands-on preliminary assessment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-xl p-5 sm:p-8 md:p-10"
        >
          <div className="flex gap-2 mb-8">
            {(["b2b", "d2c"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setClientType(type)}
                className={`px-5 py-2 rounded text-sm font-medium tracking-wide uppercase transition-all ${
                  clientType === type
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary-foreground/10 text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {type === "b2b" ? "B2B / OEM" : "D2C / Direct"}
              </button>
            ))}
          </div>

          {submitStatus === "success" && (
            <div className="mb-6 flex items-center gap-3 bg-green-500/20 border border-green-500/50 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <div>
                <p className="text-green-100 font-semibold">Success!</p>
                <p className="text-green-100/80 text-sm">Your submission has been received. Check your email for confirmation.</p>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 flex items-center gap-3 bg-red-500/20 border border-red-500/50 rounded-lg p-4">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <p className="text-red-100 font-semibold">Error</p>
                <p className="text-red-100/80 text-sm">{errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-primary-foreground/10 border border-primary-foreground/10 rounded px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
                className="bg-primary-foreground/10 border border-primary-foreground/10 rounded px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-primary-foreground/10 border border-primary-foreground/10 rounded px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
              <input
                type="tel"
                placeholder="Phone / WhatsApp"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-primary-foreground/10 border border-primary-foreground/10 rounded px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <textarea
              placeholder="Describe your problem statement or engineering challenge..."
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-primary-foreground/10 border border-primary-foreground/10 rounded px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary/50 transition-colors mb-6 resize-none"
              required
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="font-mono text-[10px] text-primary-foreground/60 tracking-wider">
                SLA: 4-hour initial response · 6-hour approval window
              </p>
              <button
                type="submit"
                disabled={isLoading}
                className="group inline-flex items-center gap-3 px-7 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded hover:brightness-110 hover:shadow-[0_8px_24px_hsl(214_72%_37%/0.35)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {isLoading ? "Submitting..." : "Submit"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
