import React from 'react';
import './Skills.css';
const Skills = () => {
  return (
    <div className='skills'>
      <div className='frontend'>
        <h1>Frontend Development</h1>
        <p>
          Frontend Development<br/>
          <span>react.js</span>
          <span>Astro.js</span>
          <span>Next.js</span>
          <span>Tanstack Router</span>
          <span>Remix</span>
        </p>
        <p>
          Styling<br/>
          <span>Tailwind css</span>
          <span>ShadCN UI</span>
          <span>Sass</span>
          <span>CSS Modules</span>
        </p>
        <p>
          State Management<br/>
          <span>Redux</span>
          <span>Zustand</span>
          <span>Tanstack Query</span>
          <span>Recoil</span>
        </p>
        <p>
          Animation & UI<br/>
          <span>Framer Motion</span>
          <span>Radix UI</span>
          <span>GSAP</span>
          <span>Lottie</span>
          <span>Three.js</span>
        </p>
        <p>
          Tooling<br/>
          <span>TypeScript</span>
          <span>Vite</span>
          <span>PNPM</span>
          <span>Biome</span>
          <span>ESLint</span>
          <span>Prettier</span>
          <span>Storybook</span>
          <span>Bun</span>
          <span>Jest</span>
          <span>Cypress</span>
        </p>
      </div>
      <div className='backend'>
        <h1>Backend Development</h1>
        <p>
          Languages & Runtimes<br/>
          <span>Node.js</span>
          <span>TypeScript</span>
          <span>Go</span>
          <span>Python</span>
          <span>Dart</span>
        </p>
        <p>
          Frame Works<br/>
          <span>Express.js</span>
          <span>Nest.js</span>
          <span>Fastify</span>
          <span>Django</span>
          <span>Flask</span>
        </p>
        <p>
          Databases and ORM <br/>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>PostgreSQL</span>
          <span>Prisma</span>
          <span>TypeORM</span>
          <span>Redis</span>
          <span>Firebase</span>
        </p>
        <p>
          API and Communication<br/>
          <span>RESTful APIs</span>
          <span>GraphQL</span>
          <span>gRPC</span>
          <span>WebSockets</span>
          <span>Postman</span>
          <span>Insomnia</span>
        </p>
        </div>
        <div className='devops'>
          <h1>DevOps and Infrastructure</h1>
          <p>
            Containers & Orchestration<br/>
            <span>Docker</span>
            <span>Kubernetes</span>
          </p>
          <p>
            IaC & Configuration<br/>
            <span>Terraform</span>
            <span>Ansible</span>
            <span>Helm</span>
          </p>
          <p>
            CI/CD & Monitoring<br/>
            <span>GitHub Actions</span>
            <span>Jenkins</span>
            <span>Prometheus</span>
            <span>Grafana</span>
            <span>ELK Stack</span>
          </p>
          <p>
            Cloud & Infrastructure<br/>
            <span>AWS</span>
            <span>GCP</span>
            <span>Azure</span>
          </p>
        </div>
      
      <div className='mobile'>
        <h1>Mobile Development</h1>
        <p>
          Frameworks & Tools<br/>
          <span>React Native</span>
          <span>Flutter</span>
          <span>Expo</span>
          <span>Swift</span>
          <span>Kotlin</span>
          <span>Android Studio</span>
          <span>Xcode</span>
        </p>
        <p>State & Navigation<br/>
          <span>Redux</span>
          <span>Zustand</span>
          <span>Tanstack Query</span>
          <span>Recoil</span>
          <span>React Navigation</span>
          <span>GoRouter</span>

        </p>
        
      </div>
      <div className='other'>
        <h1>Other Skills</h1>
        <p>
          Other Skills<br/>
          <span>WebSockets</span>
          <span>Message Queues (RabbitMQ, Kafka)</span>
          <span>Serverless Architecture</span>
          <span>Microservices</span>
          <span>Event-Driven Architecture</span>
        </p>
      </div>
    </div>
  );
};

export default Skills;
