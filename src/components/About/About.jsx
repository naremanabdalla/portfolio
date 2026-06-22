import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="section">
      <p className="section__label">About Me</p>
      <h2 className="section__title">Passionate about the craft</h2>

      <div className={styles.card}>
        <p>
          Frontend developer with a{' '}
          <strong>Computer Science degree from Cairo University (2024)</strong> and
          hands-on experience in{' '}
          <strong>React.js, Vue.js, JavaScript, and TypeScript</strong>. I've built
          responsive, data-driven web applications with API integration and real-time
          features — from e-commerce platforms to warehouse management systems.
        </p>
        <p>
          Currently working at <strong>4s Company</strong> as a Frontend Developer
          and expanding into backend with a{' '}
          <strong>Node.js diploma at Route Academy</strong>. My goal: become a
          well-rounded Full-Stack Engineer who writes clean, scalable, and performant
          code.
        </p>
        <p>
          I've competed in <strong>ICPC 2023</strong> and earned a{' '}
          <strong>LeetCode Top SQL 50</strong> badge — because I believe great
          developers think algorithmically, not just aesthetically.
        </p>
      </div>
    </section>
  );
}
