<template>
    <div id="app">
        <h1>Monty Hall</h1>
        <hr/>
        <gameSettings v-if="!gameStarted" @start="gameStarted = true"
        />
        <div v-if="gameStarted" class="chests">
            <treasureChest
                v-for="(chest, index) in quantity" :key="chest"
                :quantity="quantity"
                :treasure="treasure"
                :index="index+1"
                @win="(e) => isGameFinished = e"
            />
        </div>

        <div v-if="isGameFinished">
            <div class="win">
                YOU WIN
            </div>
        </div>
        <button v-if="gameStarted" @click="playAgain()" class="playAgain button-3">
            {{ isGameFinished ? 'Play again' : 'Restart game' }}
        </button>
    </div>
</template>

<script>
import treasureChest from './components/treasureChest.vue'
import gameSettings from './components/gameSettings.vue'
import { mapActions } from 'vuex'

export default {
    name: 'App',
    components: {
        treasureChest,
        gameSettings
    },

    data() {
        return {
            gameStarted: false,
            isGameFinished: false,
        }
    },

    methods: {
        ...mapActions([ 'setQuantity', 'setTreasure' ]),
        playAgain() {
            this.gameStarted = false
            this.isGameFinished = false
        }
    },
    computed: {
        quantity() {
            return this.$store.getters.quantity
        },
        treasure() {
            return this.$store.getters.treasure
        },
    },

}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #eeeeee;
    margin-top: 60px;
}

body {
    background-color: #2c3e50;
}

.chests {
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
}

.win {
    background-color: green;
    margin-top: 3rem;
    font-size: 4rem;
    padding: 2rem 0;
}

.playAgain {
    margin-top: 2rem;
}
</style>
