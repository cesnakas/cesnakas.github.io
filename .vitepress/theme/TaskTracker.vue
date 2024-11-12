<template>
  <div>
    <form @submit.prevent="addTask">
      <input v-model="newTaskTitle" placeholder="New task title" />
      <button type="submit">Add Task</button>
    </form>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.completed" />
        <span v-if="editingIndex !== index" @click="editTask(index)">{{ task.title }}</span>
        <input v-else v-model="tasks[editingIndex].title" @blur="finishEditing" @keyup.enter="finishEditing" />
        <button @click="removeTask(index)">Remove</button>
        <div>
          <input type="text" :value="formatTime(task.timeElapsed)" @change="updateTime(index, $event)" />
          <button @click="toggleTimer(index)">{{ task.timerRunning ? 'Pause' : 'Start' }}</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { title: 'Task 1', completed: false, timeElapsed: 0, timerId: null, timerRunning: false },
        { title: 'Task 2', completed: false, timeElapsed: 0, timerId: null, timerRunning: false }
      ],
      newTaskTitle: '',
      editingIndex: null
    };
  },
  methods: {
    addTask() {
      this.tasks.push({ title: `Task ${this.tasks.length + 1}`, completed: false, timeElapsed: 0, timerId: null, timerRunning: false });
      this.newTaskTitle = '';
    },
    editTask(index) {
      this.editingIndex = index;
    },
    finishEditing() {
      this.editingIndex = null;
    },
    removeTask(index) {
      clearInterval(this.tasks[index].timerId);
      this.tasks.splice(index, 1);
    },
    startTimer(index) {
      if (!this.tasks[index].timerId) {
        this.tasks[index].timerId = setInterval(() => {
          this.tasks[index].timeElapsed++;
        }, 1000);
        this.tasks[index].timerRunning = true;
      }
    },
    pauseTimer(index) {
      clearInterval(this.tasks[index].timerId);
      this.tasks[index].timerId = null;
      this.tasks[index].timerRunning = false;
    },
    toggleTimer(index) {
      if (this.tasks[index].timerRunning) {
        this.pauseTimer(index);
      } else {
        this.startTimer(index);
      }
    },
    updateTime(index, event) {
      if (this.tasks[index].timerId) {
        clearInterval(this.tasks[index].timerId);
        this.tasks[index].timerId = null;
        this.tasks[index].timerRunning = false;
      }

      const timeParts = event.target.value.split(':');
      this.tasks[index].timeElapsed = (+timeParts[0]) * 3600 + (+timeParts[1]) * 60 + (+timeParts[2]);
    },
    formatTime(time) {
      let hours = Math.floor(time / 3600);
      let minutes = Math.floor((time % 3600) / 60);
      let seconds = time % 60;

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return `${hours}:${minutes}:${seconds}`;
    }
  }
};
</script>

<style scoped>

</style>
