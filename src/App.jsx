import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';

const Main = styled.main`
  background-color: #0e0e0e;
  color: #ffffff;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background-color: #1a1a1a;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;

  a {
    color: #ccc;
    text-decoration: none;
    &:hover {
      color: #30e3ca;
    }
  }
`;

const Hero = styled.section`
  padding: 6rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  color: #00ffd5;
  margin-bottom: 1rem;
  text-shadow: 0 0 15px #00ffd5;
  animation: pulse 3s infinite;

  @keyframes pulse {
    0%, 100% {
      text-shadow: 0 0 10px #00ffd5, 0 0 20px #00ffd5;
    }
    50% {
      text-shadow: 0 0 25px #00ffd5, 0 0 40px #00ffd5;
    }
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #ccc;
  max-width: 700px;
  margin: 0 auto;
`;

const CTA = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  background-color: #30e3ca;
  color: black;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    background-color: #2bc5b4;
  }
`;

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ dark }) => (dark ? '#1a1a1a' : '#0e0e0e')};
  color: #ccc;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  color: #30e3ca;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Footer = styled.footer`
  padding: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  background-color: #0e0e0e;
  color: #666;
`;

/// skills section

const SkillCategory = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const SkillHeading = styled.h4`
  color: #00ffd5;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;

const SkillBadge = styled.span`
  background-color: #1e1e1e;
  border: 1px solid #30e3ca;
  color: #30e3ca;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
`;

/// project section

const ProjectsWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  padding: 0 1rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: 0.3s ease;
  box-shadow: 0 0 12px rgba(0, 255, 213, 0.05);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 20px rgba(0, 255, 213, 0.2);
  }

  h4 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: #00ffd5;
  }

  p {
    color: #ccc;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  a {
    display: inline-block;
    margin-top: 0.75rem;
    color: #00ffd5;
    font-weight: bold;
    font-size: 0.9rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LinkStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;

  a {
    color: #00ffd5;
    font-weight: bold;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

/// contact section

const ContactForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  label {
    font-size: 0.95rem;
    color: #bbb;
    margin-left: 0.25rem;
  }

  input,
  textarea {
    background-color: #111;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 0.75rem;
    font-size: 1rem;
    color: #eee;
    resize: none;

    &:focus {
      outline: none;
      border-color: #00ffd5;
      box-shadow: 0 0 5px rgba(0, 255, 213, 0.3);
    }
  }

  textarea {
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  background-color: #00ffd5;
  color: black;
  padding: 0.75rem;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #2bfdd0;
  }
`;

function App() {
  // include email so you can reply + keep your existing subject/message state
  const [form, setForm] = useState({ subject: '', message: '', email: '' });

  // Formspree hook (your form ID)
  const [state, handleSubmit] = useForm('xvgqjqrk');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Main>
      <Nav>
        <h1>Trey McGarity</h1>
        <NavList>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </NavList>
      </Nav>

      <Hero>
        <Title>Hi, I'm Trey</Title>
        <Subtitle>
          Full-stack developer crafting seamless React apps with backend power. Turning vision into code.
        </Subtitle>
        <CTA href="#projects">View My Work</CTA>
      </Hero>

      <Section id="about" dark>
        <SectionTitle>About Me</SectionTitle>
        <p style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.75' }}>
          I’m a Computer Science grad with Security+ certification. I love working on full-stack solutions using React, Express, and PostgreSQL. Whether it’s building intuitive interfaces or writing efficient APIs, I focus on quality and clarity.
        </p>
      </Section>

      <Section id="projects">
        <SectionTitle>Projects</SectionTitle>
        <ProjectsWrapper>
          <ProjectCard>
            <h4>Airline Reservation System</h4>
            <p>
              Full-stack app with React, Express, and PostgreSQL. Users can search, book, and manage flights with secure JWT-based auth.
            </p>
            <LinkStack>
              <a href="https://github.com/TreyMcGarity/airline-reservation-frontend" target="_blank" rel="noreferrer">FE GitHub Repo →</a>
              <a href="https://github.com/TreyMcGarity/airline-reservation-backend" target="_blank" rel="noreferrer">BE GitHub Repo →</a>
            </LinkStack>
          </ProjectCard>

          <ProjectCard>
            <h4>CoachMe Platform</h4>
            <p>
              A web-based fitness coaching app built with React and Redux. Users can schedule sessions, track goals, and message certified coaches. Includes personalized dashboards and secure authentication.
            </p>
            <a href="https://github.com/BloomTech-Labs/coach-me-fe" target="_blank" rel="noreferrer">GitHub Repo →</a>
          </ProjectCard>

          <ProjectCard>
            <h4>Conway's Game of Life</h4>
            <p>
              JavaScript-based simulation of cellular automata with a grid-based UI and start/pause logic. Clean, interactive, and educational.
            </p>
            <LinkStack>
              <a href="https://treymcgarity.github.io/Game_Of_Life/" target="_blank" rel="noreferrer">Open Game →</a>
              <a href="https://github.com/TreyMcGarity/Game_Of_Life" target="_blank" rel="noreferrer">GitHub Repo →</a>
            </LinkStack>
          </ProjectCard>
        </ProjectsWrapper>
      </Section>

      <Section id="skills" dark>
        <SectionTitle>Skills & Tools</SectionTitle>

        <SkillCategory>
          <SkillHeading>Languages</SkillHeading>
          <SkillsGrid>
            <SkillBadge>JavaScript (ES6+)</SkillBadge>
            <SkillBadge>Python</SkillBadge>
            <SkillBadge>SQL</SkillBadge>
            <SkillBadge>Java</SkillBadge>
            <SkillBadge>C++</SkillBadge>
          </SkillsGrid>
        </SkillCategory>

        <SkillCategory>
          <SkillHeading>Frontend</SkillHeading>
          <SkillsGrid>
            <SkillBadge>React.js</SkillBadge>
            <SkillBadge>Redux</SkillBadge>
            <SkillBadge>HTML5</SkillBadge>
            <SkillBadge>CSS3</SkillBadge>
          </SkillsGrid>
        </SkillCategory>

        <SkillCategory>
          <SkillHeading>Backend</SkillHeading>
          <SkillsGrid>
            <SkillBadge>Node.js</SkillBadge>
            <SkillBadge>Express</SkillBadge>
            <SkillBadge>Knex.js</SkillBadge>
            <SkillBadge>PostgreSQL</SkillBadge>
            <SkillBadge>JWT Auth</SkillBadge>
          </SkillsGrid>
        </SkillCategory>

        <SkillCategory>
          <SkillHeading>Tools & DevOps</SkillHeading>
          <SkillsGrid>
            <SkillBadge>Git</SkillBadge>
            <SkillBadge>GitHub</SkillBadge>
            <SkillBadge>Docker</SkillBadge>
            <SkillBadge>Render</SkillBadge>
            <SkillBadge>Jira</SkillBadge>
            <SkillBadge>Agile/Scrum</SkillBadge>
          </SkillsGrid>
        </SkillCategory>
      </Section>

      <Section id="contact" dark>
        <SectionTitle>Contact</SectionTitle>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Looking for a developer or collaborator? Send me a message!
        </p>

        {/* If Formspree submission succeeded, show a success message */}
        {state.succeeded ? (
          <p style={{ textAlign: 'center', color: '#00ffd5', fontWeight: '600' }}>
            Thanks! Your message was sent. I’ll get back to you soon.
          </p>
        ) : (
          <ContactForm onSubmit={handleSubmit}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Quick topic (bug, feature, consultation…)"
              required
              value={form.subject}
              onChange={handleChange}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Juicy details..."
              required
              value={form.message}
              onChange={handleChange}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            {/* so you can reply to the sender */}
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              value={form.email}
              onChange={handleChange}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            {/* honeypot spam trap (should stay empty) */}
            <input
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
              style={{ display: 'none' }}
            />

            {/* optional: force a nice subject in your inbox */}
            <input type="hidden" name="_subject" value="[Website] New contact message" />

            <SubmitButton type="submit" disabled={state.submitting}>
              {state.submitting ? 'Sending…' : 'Send Email'}
            </SubmitButton>
          </ContactForm>
        )}
      </Section>

      <Footer>© 2025 Trey McGarity. Built with React & styled-components.</Footer>
    </Main>
  );
}

export default App;