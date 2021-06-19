Vue.createApp({
  data: () => ({
    myHtml: '<h1>Vue 3 app</h1>',
    title: 'Я есть грут',
    person: {
      fitstName: 'Andrey',
      lastName: 'Klimenko',
      age: 30
    },
    items: [1, 2]
  }),
  methods: {
    addItem(event) {
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
      console.log(event.key);
    }
  },
  computed: {
    evenItems() {
      return this.items.filter(i => i % 2 === 0)
    }
  }
}).mount('#app')