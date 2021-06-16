const App = {
  data() {
    return {
      placeholderString: 'Введите заметку',
      title: 'Список заметок',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2', 'Заметка 154']
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    },
    addNewNote() { 
      if (this.inputValue === '') return;
      this.notes.push(this.inputValue)
      this.inputValue = ''
    },
    toUpperCase(item) {
      return item.toUpperCase()
    },
    deleteNote(index) {
      this.notes.splice(index, 1)
    }
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2
    }
  }
}

Vue.createApp(App).mount('#app')