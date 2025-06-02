<template>
  <div class="certificates">
    <h2>Образование и сертификаты</h2>
    
    <div class="certificates-grid">
      <div class="certificate">
        <h3>Высшее образование</h3>
        <p>Московский государственный университет им. М.В. Ломоносова</p>
        <p>Факультет вычислительной математики и кибернетики</p>
        <p>Специальность: Прикладная математика и информатика</p>
        <p>2010 - 2015</p>
      </div>

      <div class="certificate">
        <h3>Сертификаты</h3>
        <ul>
          <li>Vue.js Advanced Workshop</li>
          <li>Advanced JavaScript Concepts</li>
          <li>Node.js Developer</li>
          <li>AWS Certified Developer</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Certificates'
}
</script>

<style lang="scss" scoped>
.certificates {
  margin-top: 3rem;

  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: var(--vp-c-text-1);
  }

  .certificates-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    .certificate {
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

      p {
        margin-bottom: 0.5rem;
        color: var(--vp-c-text-2);
        font-size: 1rem;
        line-height: 1.5;

        &:last-child {
          margin-bottom: 0;
        }
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

@media (max-width: 640px) {
  .certificates {
    .certificates-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style> 