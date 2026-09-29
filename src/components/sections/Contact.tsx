import { Button } from "../common";
import { profile, socialLinks } from "../../constants/profile";

const Contact = () => {
  return (
    <section className="bg-white border-2 border-ice-navy shadow-[5px_5px_0_var(--color-ice-primary)] py-10 px-6 text-center" id="contact">
      <h2 className="text-[26px] font-bold text-ice-navy mb-2.5">SEEKING CALM, RELIABLE CODE?</h2>
      <p className="text-sm text-polar-dim max-w-[500px] mx-auto mb-6">
        Looking to build a personal or business website? Feel free to reach out!
      </p>
      <div className="flex justify-center gap-3 flex-wrap">
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