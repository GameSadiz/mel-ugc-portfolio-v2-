import { profile, socialLinks } from '../lib/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">{profile.name}</div>
        <div className="footer__socials">
          {socialLinks.map((link) => (
            <a key={link.label} className="footer__social-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <p className="footer__note">© {new Date().getFullYear()} {profile.name} UGC. Hecho con cuidado y buen café.</p>
      </div>
    </footer>
  );
}
