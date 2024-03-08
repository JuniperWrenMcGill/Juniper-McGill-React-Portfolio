import './projects.css'; // import styling

const Projects = () => {
  const projects = [
    {
      title: "Tech Blog",
      description: "The Tech Blog is a web application was crafted with a user-centric approach. This project empowers users with the ability to create accounts, log in securely, and contribute by creating and editing posts. The intuitive user interface ensures seamless navigation, facilitating an engaging and enriching experience for visitors. This project underscores my proficiency in full-stack web development. By implementing features like user authentication and post management, I showcase not only technical skills but also a deep-rooted interest in knowledge sharing and community engagement.",
      imageUrl: "././img/TechBlog.png", // screenshot of deployed page or working code
      siteUrl: "https://example.com/project1https://juniperstechblog-69076c68fe28.herokuapp.com/.", //  URL published site
    
      repoUrl: "https://github.com/JuniperWrenMcGill/Junipers-Tech-Blog" //  URL to project's repository
    },
    {
      title: "Social Network API",
      description: "Social Network API is a backend project that provides a robust framework for building and managing a social media platform. It offers a comprehensive set of endpoints to handle user authentication, profile management, friend connections, post creation, commenting, and more. I invite you to view the project video where I demonstrate and test routes with Insomnia. If you would like a handle the code yourself, please feel free to clone the repository and test the routes yourself. ",     
      imageUrl: "././img/EcommerceBackend.png",  // screenshot of deployed page or working code
      siteUrl: "https://drive.google.com/file/d/1iJbjlYohnyssZ068wvpaRbHCNzWFCJX7/view?usp=sharing", // demo video
      repoUrl: "https://github.com/JuniperWrenMcGill/Junipers-Social-Network-API" // Replace with the URL to your project's repository
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">View Project</a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">View Repo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
