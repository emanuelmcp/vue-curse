<template>
  <h1 v-if="!pokemon">Esperando pokemon...</h1>
  <div v-else>
    <h1>¿Qué pokemon es?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemons" />
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "@/helpers/get-pokemon-options";

export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemons: [],
      pokemon: null,
      showPokemon: false,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemons = await getPokemonOptions();
      const randomNumber = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemons[randomNumber];
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>
