<template>
  <div class="time-calc">
    <div class="container">
      <div class="time-calc__item" v-for="(time, index) in times" :key="index">
        <select v-if="index !== 0" v-model="time.operation">
          <option value="add">+</option>
          <option value="subtract">–</option>
        </select>
        <input v-model="time.value" type="time" />
        <button v-if="index !== 0" @click="removeTimeField(index)">Удалить поле</button>
      </div>
      <div class="time-calc__btn-wrapper">
        <button class="time-calc__btn" @click="addTimeField">Добавить поле</button>
      </div>
      <div class="time-calc__btn-wrapper">
        <button class="time-calc__btn" @click="calculate">Рассчитать</button>
      </div>
      <p class="time-calc__result" v-if="result">{{ result }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      times: [
        { value: '08:00', operation: "add" },
        { value: '00:00', operation: "add" },
        { value: '00:00', operation: "add" }
      ],
      result: null
    };
  },
  methods: {
    addTimeField() {
      this.times.push({ value: '00:00', operation: "add" });
    },
    removeTimeField(index) {
      if (index !== 0) {
        this.times.splice(index, 1);
      }
    },
    calculate() {
      let totalHours = 0;
      let totalMinutes = 0;

      for (let i = 0; i < this.times.length; i++) {
        let hours = parseInt(this.times[i].value.split(":")[0]);
        let minutes = parseInt(this.times[i].value.split(":")[1]);

        if (this.times[i].operation === "add") {
          totalHours += hours;
          totalMinutes += minutes;
        } else {
          totalHours -= hours;
          totalMinutes -= minutes;
        }

        if (totalMinutes >= 60) {
          totalHours++;
          totalMinutes -= 60;
        } else if (totalMinutes < 0) {
          totalHours--;
          totalMinutes += 60;
        }
      }

      this.result = totalHours < 0 ? 'Negative time does not exist' : `${totalHours}:${totalMinutes < 10 ? '0' : ''}${totalMinutes}`;
    }
  }
};
</script>

<style lang="scss" scoped>
  button {
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input[type="time"] {
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  select {
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }

  .container {
    margin: 0 auto;
  }

  .time-calc {
    display: flex;
    gap: 16px;
    padding-top: 32px;
    padding-bottom: 32px;

    &__item {
      display: flex;
      gap: 16px;

      &:first-child {
        padding-left: 46px;
      }

      &:not(:first-child) {
        margin-top: 16px;
      }
    }

    &__btn {
      width: 100%;
      color: var(--vp-c-neutral-inverse);
      background-color: var(--vp-c-green-3);

      &-wrapper {
        margin-top: 16px;
        padding-left: 46px;
      }
    }

    &__result {
      padding-left: 46px;
      font-size: 24px;
    }
  }
</style>
