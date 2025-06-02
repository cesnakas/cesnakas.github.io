<template>
  <div class="experience-stats">
    <h2>Опыт работы: {{ totalExperience }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ExperienceStats',
  computed: {
    totalExperience() {
      const startDate = new Date('2012-06-01') // Дата начала работы
      const endDate = new Date() // Текущая дата
      
      const years = endDate.getFullYear() - startDate.getFullYear()
      const months = endDate.getMonth() - startDate.getMonth()
      
      let totalMonths = years * 12 + months
      if (endDate.getDate() < startDate.getDate()) {
        totalMonths--
      }
      
      const totalYears = Math.floor(totalMonths / 12)
      const remainingMonths = totalMonths % 12
      
      let result = `${totalYears} лет`
      if (remainingMonths > 0) {
        result += ` и ${remainingMonths} ${this.getMonthWord(remainingMonths)}`
      }
      
      return result
    }
  },
  methods: {
    getMonthWord(months) {
      if (months === 1) return 'месяц'
      if (months >= 2 && months <= 4) return 'месяца'
      return 'месяцев'
    }
  }
}
</script>

<style lang="scss" scoped>
.experience-stats {
  margin: 2rem 0;
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--vp-c-text-1);
    margin: 0;
  }
}
</style> 