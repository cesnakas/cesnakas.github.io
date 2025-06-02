<template>
  <div class="skills container">
    <h2>Навыки</h2>
    
    <div class="skills-grid">
      <div class="skill-category">
        <h3>Frontend</h3>
        <ul>
          <li>HTML5 / CSS3</li>
          <li>JavaScript / TypeScript</li>
          <li>Vue.js / React</li>
          <li>Sass/SCSS</li>
          <li>Webpack / Vite</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
          <li>Ajax</li>
          <li>Pug</li>
        </ul>
      </div>

      <div class="skill-category">
        <h3>Backend</h3>
        <ul>
          <li>PHP</li>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>REST API</li>
          <li>JSON API</li>
          <li>Laravel</li>
          <li>Symfony</li>
        </ul>
      </div>

      <div class="skill-category">
        <h3>CMS & Frameworks</h3>
        <ul>
          <li>Bitrix Framework</li>
          <li>WordPress</li>
          <li>Joomla</li>
          <li>MODX</li>
          <li>OpenCart</li>
        </ul>
      </div>

      <div class="skill-category">
        <h3>DevOps & Tools</h3>
        <ul>
          <li>Git</li>
          <li>NPM</li>
          <li>Gulp</li>
          <li>Apache</li>
          <li>Nginx</li>
          <li>Docker</li>
        </ul>
      </div>

      <div class="skill-category">
        <h3>Языки</h3>
        <ul>
          <li>Русский — Родной</li>
          <li>Английский — A2</li>
          <li>Испанский — A1</li>
          <li>Немецкий — A1</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style lang="scss" scoped>
.skills {
  padding: 2rem 0;
  max-width: 1152px;
  margin: 0 auto;

  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: var(--vp-c-text-1);
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    .skill-category {
      background: var(--vp-c-bg-soft);
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      h3 {
        margin-bottom: 1rem;
        color: var(--vp-c-text-1);
        font-size: 1.25rem;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 0.5rem;
          color: var(--vp-c-text-2);
          font-size: 1rem;
          line-height: 1.5;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .skills {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media (max-width: 640px) {
  .skills {
    .skills-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style> 