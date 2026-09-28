import { Button, Tag, StatusBadge } from "../common";
import { ProfileAvatar } from "../icons/ProjectThumbnails";
import { profile } from "../../constants/profile";

const Hero = () => {
  return (
    <section className="bg-ice-card border-2 border-ice-navy shadow-[4px_4px_0_#38BDF8] p-10 grid grid-cols-[280px_1fr] gap-9 mb-12 items-center max-md:grid-cols-1 max-md:p-6" id="about">
      <div className="bg-ice-bg border-2 border-ice-navy shadow-[4px_4px_0_var(--color-ice-frost)] p-4 text-center">
        <div className="w-[210px] h-[210px] mx-auto mb-3.5 bg-ice-frost-light border-2 border-ice-primary overflow-hidden flex items-center justify-center relative">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover block" />
          ) : (
            <ProfileAvatar />
          )}
        </div>
        <h2 className="text-sm font-bold text-ice-navy mb-1">{profile.name}</h2>
        <div className="text-[9px] text-ice-primary mb-2.5 leading-[1.4] pixel-text">{profile.role}</div>
        <StatusBadge label={profile.status} />
      </div>

      <div>
        <Tag variant="badge">{profile.eyebrow}</Tag>
        <h1 className="text-[32px] font-bold leading-[1.3] tracking-[-0.5px] text-ice-navy mb-4">{profile.heading}</h1>
        <p className="text-[15px] text-polar-dim leading-[1.8] mb-7">{profile.bio}</p>

        <div className="flex flex-wrap gap-3 mb-7 pixel-text">
          {profile.metrics.map((metric) => (
            <Tag key={metric} variant="chip">{metric}</Tag>
          ))}
        </div>

        <div className="flex gap-3 flex-wrap">
          <Button href="#projects">EXPLORE WORK ↓</Button>
          <Button href="#contact" variant="outline">LET'S CONNECT</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;