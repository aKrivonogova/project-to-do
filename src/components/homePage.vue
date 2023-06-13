<template>
    <div class="notes">
        <div class="notes__container">
            <div class="notes__header">
                <h2 class="notes__title">
                    Мои заметки
                </h2>
                <button class="netes__add-button" @click="this.openPopup"></button>
            </div>
            <div class="notes__empty-list" v-if="noteList.length === 0">
                <img src="../../images/emptyList.png" alt="">
                <p class="empty-list__text">Добавьте свою первую заметку</p>
            </div>
            <ul class="notes__list">
                <li class="notes__item" v-for="(noteItem, index) in this.noteList" :key="index">
                    <div class="notes__item-text">
                        <p class="notes-item__name"> {{ noteItem.noteTitle }}</p>
                        <p class="notes-item__description"> {{ noteItem.noteDescription }}</p>
                    </div>
                    <button class="item__button-remove" @click="this.removeNote"></button>
                </li>
            </ul>
        </div>
        <popup></popup>
    </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import popup from "./popup.vue"

export default {
    components: {
        popup
    },
    computed: {
        ...mapState(['noteList', "popupIsOpened"])
    },
    methods: {
        ...mapMutations(['openPopup', 'removeNote'])
    }
}

</script>
<style>
.notes {
    width: 100%;
    height: 100%;
    background-image: url('../../images/backgroundHomePageLight.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    object-fit: cover;
}

.notes__header {
    display: flex;
    width: 45%;
    justify-content: space-between;
    margin-bottom: 45px;
}

.notes__title {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    text-shadow: 2px 2px 0 #bcbcbc, 2px 2px 0 #9c9c9c;
}

.notes__container {
    padding-top: 30px;
    width: 90%;
    background: rgba(246, 246, 246, 0.87);
    width: 600px;
    border-radius: 14px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
}

.netes__add-button {
    width: 40px;
    height: 40px;
    position: relative;
    border-radius: 5px;
    border: none;
    background-color: black;
    transition: 0.2s;
}

.netes__add-button::before,
.netes__add-button::after {
    position: absolute;
    content: '';
    background-color: white;
    width: 3.5px;
    height: 25px;
    top: 6px;
    right: 18px;
}

.netes__add-button:hover {
    background-color: #A9A9A9;
}

.netes__add-button::before {
    transform: rotate(90deg);
}

.netes__add-button::after {}

.notes__empty-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}

.notes__empty-list img {
    width: 250px;
    height: 250px;
    margin-bottom: 15px;
}

.empty-list__text {
    font-size: 22px;
    font-weight: 500;
}

.notes__list {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.notes__item {
    border-bottom: 1px solid black;
    width: 80%;
    padding-bottom: 10px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.notes-item__name {
    font-size: 18px;
}

.notes__item-text {}

.item__button-remove {
    background-image: url('../../images/removeItem.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 30px;
    height: 30px;
    appearance: none;
    border: none;
    background-color: transparent;
}
</style>