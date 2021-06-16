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
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = ''
      }
    }
  }
}

Vue.createApp(App).mount('#app')