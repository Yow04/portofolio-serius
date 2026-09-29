import { Button, ThemeToggle } from "../common";
import { profile } from "../../constants/profile";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-ice-card/90 backdrop-blur-[10px] border-2 border-ice-navy shadow-[4px_4px_0_var(--color-ice-frost)] px-6 py-3.5 mb-10 transition-colors duration-300">
      <a href="#" className="flex items-center gap-3 no-underline text-ice-navy">
        <div className="w-7 h-7 bg-ice-primary text-white border-[1.5px] border-ice-navy flex items-center justify-center text-xs pixel-text">❄</div>
        <div>
          <div className="text-[11px] font-bold text-ice-navy tracking-[0.5px] pixel-text">Portofolio Website</div>
          <div className="text-[8px] text-polar-dim">
            Rajawali's Little Space
          </div>
        </div>
      </a>

      <nav className="flex gap-[18px] items-center">
        <a href="#about" className="text-[10px] text-polar-dim no-underline transition-colors duration-150 hover:text-ice-primary pixel-text">PROFILE</a>
        <a href="#projects" className="text-[10px] text-polar-dim no-underline transition-colors duration-150 hover:text-ice-primary pixel-text">CASES</a>
        <ThemeToggle />
        <Button href={profile.resumeUrl} target="_blank" rel="noopener noreferrer"> get RESUME </Button>
      </nav>
    </header>
  );
};

export default Navbar;