const app = new Vue({
    el: '#app',
    data: {
        title: 'To-Do List',
        newTask: '',
        tasks: []
    },
    methods: {
        addTask() {
            this.tasks.push({
                title: this.newTask,
            });
            this.newTask = '';
        }
    }
});
