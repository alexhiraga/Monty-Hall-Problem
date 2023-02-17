<template>
    <div>
        <h2>Game Settings</h2>
        <label for="chestNumber">Number of chests:</label>
        <br>
        <input name="chestNumber" type="number" min="3" max="50" v-model="quantity" >
        <br><br>
        <label for="treasureChest">Treasure chest:</label>
        <br>
        <input name="treasureChest" type="number" min="1" :max="quantity" v-model="treasure">
        <br><br>
        <button class="button-3" @click="playGame()">Start</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'gameSettings', 
    data() {
        return {
            quantity: 3,
            treasure: 1
        }
    },

    methods: {
        ...mapActions(['setQuantity', 'setTreasure']),

        playGame() {
            this.quantity = parseInt(this.quantity)
            this.treasure = parseInt(this.treasure)
            if(this.quantity >= 3 && this.treasure >= 1 && this.treasure <= this.quantity ) {

                this.setQuantity(this.quantity)
                this.setTreasure(this.treasure)
                this.$emit('start')
            } else if(this.quantity < 3) {
                alert('Choose at least 3 chests')
            } else if(this.treasure < 1 || this.treasure > this.quantity) {
                alert('Choose a valid treasure chest')
            }
        }
    }
}
</script>

<style>

/* Button style by Github */
    .button-3 {
        appearance: none;
        background-color: #2ea44f;
        border: 1px solid rgba(27, 31, 35, .15);
        border-radius: 6px;
        box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        padding: 6px 16px;
        position: relative;
        text-align: center;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        white-space: nowrap;
    }
    .button-2 {
        appearance: none;
        background-color: #34bfc9;
        border: 1px solid rgba(27, 31, 35, .15);
        border-radius: 6px;
        box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        padding: 6px 16px;
        position: relative;
        text-align: center;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        white-space: nowrap;
    }

    .button-3:focus:not(:focus-visible):not(.focus-visible) {
        box-shadow: none;
        outline: none;
    }

    .button-3:hover {
        background-color: #2c974b;
    }

    .button-3:focus {
        box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
        outline: none;
    }

    .button-3:disabled {
        background-color: #94d3a2;
        border-color: rgba(27, 31, 35, .1);
        color: rgba(255, 255, 255, .8);
        cursor: default;
    }

    .button-3:active {
        background-color: #298e46;
        box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
    }
</style>