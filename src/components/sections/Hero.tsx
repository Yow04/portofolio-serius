import { Button, Tag, StatusBadge } from "../common";
import { ProfileAvatar } from "../icons/ProjectThumbnails";
import { profile } from "../../constants/profile";

const Hero = () => {
  return (
    <section className="nordic-hero" id="about">
      <div className="frost-photo-card">
        <div className="frost-photo-viewport">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} />
          ) : (
            <ProfileAvatar />
          )}
        </div>
        <h2 className="frost-name">{profile.name}</h2>
        <div className="frost-role pixel-text">{profile.role}</div>
        <StatusBadge label={profile.status} />
      </div>

      <div>
        <Tag variant="badge">{profile.eyebrow}</Tag>
        <h1 className="nordic-heading">{profile.heading}</h1>
        <p className="nordic-bio">{profile.bio}</p>

        <div className="frost-metrics pixel-text">
          {profile.metrics.map((metric) => (
            <Tag key={metric} variant="chip">{metric}</Tag>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button href="#projects">EXPLORE WORK ↓</Button>
          <Button href="#contact" variant="outline">LET'S CONNECT</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;