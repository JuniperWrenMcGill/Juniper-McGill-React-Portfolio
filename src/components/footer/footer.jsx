import './footer.css'; // import styling
const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/juniper-mcgill" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/JuniperWrenMcGill" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div className="email-link">
        <a href="mailto:juniperwrenarts@gmail.com">Email</a>
      </div>

    </footer>
  );
};

export default Footer;
