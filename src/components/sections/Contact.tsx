import { Button } from "../common";
import { profile, socialLinks } from "../../constants/profile";

const Contact = () => {
  return (
    <section className="nordic-contact-box" id="contact">
      <h2 className="nordic-contact-title">SEEKING CALM, RELIABLE CODE?</h2>
      <p className="nordic-contact-sub">
        Apakah Anda sedang merancang aplikasi web baru atau ingin menyederhanakan arsitektur
        sistem Anda? Mari bicarakan kemungkinannya.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <Button href={`mailto:${profile.email}`}>✉ {profile.email}</Button>
        {socialLinks.map((link) => (
          <Button
            key={link.label}
            href={link.href}
            variant="outline"
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
          >
            {link.label}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Contact;