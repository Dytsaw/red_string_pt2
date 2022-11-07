"use strict";
const { createApp } = Vue;

createApp({
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    axios
      .get("articles.json")
      .then((response) => (this.articles = response.data.articles));
  },
}).mount("#app");
