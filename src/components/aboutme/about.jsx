import './about.css'; // import styling
const AboutMe = () => {
    return (
        <section id="about">
            <div className="container">
                <h2>About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hello! I'm Juniper McGILL, a Full-Stack Developer with a passion for innovation and efficiency.
                        </p>
                        <p>
                            My journey into software engineering started when I became curious about the code that drives our everyday tools. Since then, I've been learning the skills necessary to create my own application or refactor an existing application for easier management and improvement.
                        </p>
                        <p>
                            Outside of work, you'll often find me orchestrating renowned dinner parties and actively engaging with my community as the organizer for donation drop-offs.
                        </p>
                    </div>
                    <div className="about-skills">
                        <h3>Skills</h3>
                        <ul>
                            <li><strong>Agile Methodologies:</strong> Experience working in Agile development environments, collaborating with cross-functional teams, and adapting to changing requirements.</li>
                            <li><strong>Testing and Debugging:</strong> Proficiency in testing frameworks (e.g., Jest, Mocha) and debugging tools to ensure code quality and identify issues.</li>
                            <li><strong>Authentication and Authorization:</strong> Knowledge of authentication methods (e.g., OAuth, JWT) and authorization mechanisms to secure web applications.</li>
                            <li><strong>API Development:</strong> Ability to design, implement, and consume RESTful and GraphQL APIs to facilitate communication between the front end and back end.</li>
                            <li><strong>Database Management:</strong> Understanding of relational databases (e.g., SQL) and/or NoSQL databases (e.g., MongoDB) for data storage and retrieval.</li>
                            <li><strong>Server-Side Languages:</strong> Proficiency in one or more back-end programming languages such as Node.js (JavaScript).</li>
                            <li><strong>HTML/CSS:</strong> Understanding of markup languages and styling techniques to create visually appealing and responsive web pages.</li>
                            <li><strong>JavaScript (JS):</strong> Proficiency in JavaScript for client-side scripting, including frameworks/libraries like React, Angular, or Vue.js.</li>
                            <li><strong>Version Control:</strong> Experience with Git or other version control systems for collaborative development and code management.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

