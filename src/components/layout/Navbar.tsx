import { Button } from "../common";

const Navbar = () => {
  return (
    <header className="nordic-nav">
      <a href="#" className="nordic-brand">
        <div className="ice-crystal-icon pixel-text">❄</div>
        <div>
          <div className="nordic-brand-name pixel-text">NORDIC.FROST</div>
          <div style={{ fontSize: '8px', color: 'var(--polar-dim)' }}>
            Minimalist Product Engineering
          </div>
        </div>
      </a>

      <nav className="nordic-links">
        <a href="#about" className="nordic-link pixel-text">PROFILE</a>
        <a href="#projects" className="nordic-link pixel-text">CASES</a>
        <Button href="#contact">ENGAGE</Button>
      </nav>
    </header>
  );
};

export default Navbar;