const quotes = [
  {quotes: 'Frase de batman 1', author: 'Batman'},
  {quotes: 'Frase de batman 2', author: 'Batman'},
  {quotes: 'Frase de batman 3', author: 'Batman'},
  {quotes: 'Frase de batman 4', author: 'Batman'},
  {quotes: 'Frase de batman 5', author: 'Batman'},
  {quotes: 'Frase de batman 6', author: 'Batman'},
]

const app = Vue.createApp({
  data() {
    return {
      quotes,
      newQuote: 'Hola Mundo',
    }
  },
  methods: {
    addQuote () {
      this.quotes.unshift({ quotes: this.newQuote })
    }
  }
})

app.mount('#myApp')