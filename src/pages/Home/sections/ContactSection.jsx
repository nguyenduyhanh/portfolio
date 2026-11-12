import { useState } from "react";
import { CheckCircle2, ExternalLink, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { ScrollReveal, StaggerContainer, StaggerItem, buttonHoverProps } from "../../../animations";

const RECIPIENT_EMAIL = "hanh27052004@gmail.com";

const socialLinks = [
  {
    name: "Gmail",
    handle: "hanh27052004@gmail.com",
    url: `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}`,
    icon: SiGmail,
    color: "text-[#EA4335]",
    hoverBorder: "hover:border-[#EA4335]",
  },
  {
    name: "GitHub",
    handle: "@NguyenDuyHanh",
    url: "https://github.com/NguyenDuyHanh",
    icon: FaGithub,
    color: "text-foreground",
    hoverBorder: "hover:border-border-hover",
  },
  {
    name: "Facebook",
    handle: "@NguyenDuyHanh",
    url: "https://www.facebook.com/share/1ASxDcgsKX/?mibextid=wwXIfr",
    icon: FaFacebook,
    color: "text-[#1877F2]",
    hoverBorder: "hover:border-[#1877F2]",
  },
  {
    name: "Instagram",
    handle: "@_ndh_204",
    url: "https://www.instagram.com/_ndh_204?igsh=djBxbGNoajl5ejJo&utm_source=qr",
    icon: FaInstagram,
    color: "text-[#E4405F]",
    hoverBorder: "hover:border-[#E4405F]",
  },
  {
    name: "LinkedIn",
    handle: "@NguyenDuyHanh",
    url: "https://www.linkedin.com/in/hanh-nguy%E1%BB%85n-21781733b/",
    icon: FaLinkedin,
    color: "text-[#0A66C2]",
    hoverBorder: "hover:border-[#0A66C2]",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openedUrl, setOpenedUrl] = useState("");

  const buildGmailUrl = () => {
    const subject = `[Portfolio Contact] Tin nhắn từ ${formData.name || "Khách truy cập"}`;
    const bodyLines = [
      "Xin chào Hạnh,",
      "",
      formData.message || "(Viết lời nhắn của bạn ở đây...)",
      "",
      "-------------------------",
      "Thông tin người gửi:",
      `- Họ và tên: ${formData.name || "Chưa cung cấp"}`,
      `- Email liên hệ: ${formData.email || "Chưa cung cấp"}`,
    ];
    const body = bodyLines.join("\n");

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const buildMailtoUrl = () => {
    const subject = `[Portfolio Contact] Tin nhắn từ ${formData.name || "Khách truy cập"}`;
    const body = `Xin chào Hạnh,\n\n${formData.message}\n\n---\nTừ: ${formData.name} (${formData.email})`;
    return `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    const gmailUrl = buildGmailUrl();
    setOpenedUrl(gmailUrl);

    // Mở trực tiếp tab soạn thư của Gmail
    window.open(gmailUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Let's Connect
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Follow me on social media or drop me a message — I'd love to collaborate and share creative ideas!
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Social Networks Grid */}
          <ScrollReveal className="p-8 rounded-3xl border border-border bg-card text-card-foreground shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Social Networks
            </h3>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <StaggerItem
                    key={index}
                    hoverLift={-4}
                    className="block"
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-2xl border border-border bg-muted/50 flex items-center gap-4 transition-all duration-300 ${social.hoverBorder}`}
                    >
                      <div className="p-2.5 rounded-xl bg-card shadow-xs flex items-center justify-center shrink-0">
                        <Icon className={`w-5 h-5 ${social.color}`} />
                      </div>
                      <div className="overflow-hidden">
                        <span className="block text-sm font-bold text-foreground truncate">
                          {social.name}
                        </span>
                        <span className="block text-xs text-muted-foreground truncate">
                          {social.handle}
                        </span>
                      </div>
                    </a>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </ScrollReveal>

          {/* Right Column: Send a Message via Gmail */}
          <ScrollReveal delay={0.15} className="p-8 rounded-3xl border border-border bg-card text-card-foreground shadow-sm">
            <div className="flex items-center justify-between gap-3 mb-6">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Send a Message
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Điền thông tin và chuyển thẳng sang trang soạn thư Gmail
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-[#EA4335] shrink-0" title="Chuyển sang Gmail">
                <SiGmail className="w-5 h-5" />
              </div>
            </div>

            {submitted ? (
              <div className="py-10 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-foreground">
                  Đã mở trang soạn thư Gmail!
                </h4>
                <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                  Tab soạn thư của Gmail đã được mở với đầy đủ nội dung bạn vừa nhập. Hãy bấm nút <span className="font-semibold text-foreground">"Gửi"</span> trên Gmail để hoàn tất nhé!
                </p>

                <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  {openedUrl && (
                    <a
                      href={openedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Mở lại tab Gmail</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl border border-border bg-muted/60 text-foreground text-xs font-semibold hover:bg-muted transition-colors cursor-pointer"
                  >
                    Soạn tin nhắn mới
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-muted/50 text-sm text-foreground focus:outline-none focus:border-border-hover transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-muted/50 text-sm text-foreground focus:outline-none focus:border-border-hover transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-muted/50 text-sm text-foreground focus:outline-none focus:border-border-hover transition-all resize-none"
                  />
                </div>

                <div className="pt-1 flex flex-col gap-2.5">
                  <motion.button
                    {...buttonHoverProps}
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all shadow-md cursor-pointer"
                  >
                    <SiGmail className="w-4 h-4 text-[#EA4335]" />
                    <span>Mở & Gửi qua Gmail</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </motion.button>

                  <div className="flex items-center justify-between text-[11px] text-muted-foreground px-1">
                    <span>Tự động điền tiêu đề & nội dung vào Gmail</span>
                    <a
                      href={buildMailtoUrl()}
                      className="hover:text-foreground inline-flex items-center gap-1 underline transition-colors"
                      title="Mở ứng dụng email mặc định trên thiết bị"
                    >
                      <Mail className="w-3 h-3" />
                      <span>Hoặc mở app Mail</span>
                    </a>
                  </div>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;