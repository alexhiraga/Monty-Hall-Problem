<template>
    <div class="treasureChest">
        <div class="treasureChest" @mouseover="showbtn = true" @mouseleave="showbtn = false">
            <img 
                style="position:relative"
                :src="imageSrc" 
            />
            <div v-if="showbtn" class="buttons">
                <button :disabled="isOpen" class="button-2" @click="selectChest()">Select</button>
                <button class="button-3" @click="isTreasure()">{{ isOpen ? 'Close' : 'Open' }}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'treasureChest',
    props: [ 'quantity', 'treasure', 'index' ],
    data() {
        return {
            isSelected: false,
            imageSrc: require('../../public/closed-chest.png'),
            isOpen: false,
            showbtn: false,
            gameFinished: false,
        }
    },
    methods: {
        isTreasure() {
            if(this.index == this.treasure && !this.isOpen) {
                this.imageSrc = require('../../public/treasure-chest.png')
                this.gameFinished = true
                this.$emit('win', this.gameFinished)
            } else if(this.index == this.treasure && this.isOpen) {
                this.imageSrc = require('../../public/closed-chest.png')
                this.gameFinished = false
                this.$emit('win', this.gameFinished)
            } else if(this.index != this.treasure && !this.isOpen) {
                this.imageSrc = require('../../public/empty-chest.png')
            } else if(this.isOpen && this.isSelected) {
                this.imageSrc = require('../../public/closed-chest-selected.png')
            } else if(this.isOpen && !this.isSelected) {
                this.imageSrc = require('../../public/closed-chest.png')
            }
            this.isOpen = !this.isOpen
        },
        selectChest() {
            this.isSelected = !this.isSelected
            if(this.isSelected) {
                this.imageSrc = require('../../public/closed-chest-selected.png')
            } else {
                this.imageSrc = require('../../public/closed-chest.png')
            }
        }
    },
    
}
</script>

<style scoped>
.treasureChest img {
    width: 20rem;
    position: relative;
}

.buttons {
    display: flex;
    gap: 1rem;
    justify-content: space-around;
    position: absolute;
    text-align: center;
    margin-top: -7rem;
    margin-left: 3rem;
}
</style>
