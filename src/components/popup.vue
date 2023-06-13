<template>
  <div class="popup" :class="{ popup_isOpened: popupIsOpened }">
    <div class="popup__container">
      <button class="popup__close-button" type="button" @click="closePopup"></button>
      <div class="image__block">
        <img src="../../images/popupImageBlock.jpg" alt="" />
      </div>
      <div class="popup__content">
        <h2 class="popup__title">Добавить заметку</h2>
        <form action="#" method="post" class="form form_function_add" name="formEdit"
          @submit.prevent="addNote({ noteTitle, noteDescription })">
          <input v-model="noteTitle" name="name" type="text" @blur="noteTitleBlured = true" class="form__input"
            placeholder="Название" />
          <span class="form__input-error" v-if="noteTitleBlured && isEmptyNoteTitle">
            Это поле обязательно!
          </span>
          <input v-model="noteDescription" @blur="noteDescriptionBlured = true" name="description" type="text"
            class="form__input" placeholder="Описание" />
          <span class="form__input-error" id="userDescription-error"
            v-if="noteDescriptionBlured && isEmptyNoteDescription">
            Это поле обязательно!
          </span>
          <button type="submit" :disabled="isEmptyForm" class="form__submit-button"
            :class="{ form__button_empty: isEmptyForm }">Сохранить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "popup-component",
  data() {
    return {
      noteTitle: '',
      noteDescription: '',
      noteTitleBlured: false,
      noteDescriptionBlured: false,

    }
  },
  methods: {
    ...mapMutations(['createNote', 'closePopup']),
    addNote(newNote) {
      this.createNote(newNote);
      this.noteTitle = '';
      this.noteDescription = ''
      this.noteTitleBlured = false,
      this.noteDescriptionBlured = false,
      this.closePopup();
    }
  },
  computed: {
    ...mapState(["noteList", "popupIsOpened"]),
    isEmptyForm() {
      return (this.noteTitle && this.noteDescription).trim() === '';
    },
    isEmptyNoteTitle() {
      return this.noteTitle.trim() === '';
    },
    isEmptyNoteDescription() {
      return this.noteDescription.trim() === '';
    }
  }
};
</script>

<style scoped>
.popup {
  width: 100%;
  height: 100%;
  visibility: collapse;
  opacity: 0;
  transition: visibility 0.3s, opacity 0.3s linear;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
}

.popup_isOpened {
  visibility: visible;
  opacity: 1;
  transition: visibility 0.3s, opacity 0.3s linear;
}

.popup__container {
  width: 850px;
  height: 460px;
  position: relative;
  display: flex;
  z-index: 3;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
}

.popup__close-button {
  position: absolute;
  width: 32px;
  height: 32px;
  appearance: none;
  border: none;
  background-color: transparent;
  background-image: url(../../images/Close\ Icon.png);
  background-repeat: no-repeat;
  background-size: 32px 32px;
  background-position: center;
  top: -40px;
  right: -40px;
}

.image__block {
  height: 100%;
  width: 450px;
}

.image__block img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}

.popup__content {
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100%;
  width: 400px;
  align-items: center;
  justify-content: center;
}

.popup__title {
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
}

.form {
  display: flex;
  flex-direction: column;
  width: 250px;
  position: relative;
}

.form__input {
  outline: none;
  height: 30px;
  margin-bottom: 30px;
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #696969;
}

.form__input-error {
  font-size: 12px;
  color: red;
  position: relative;
  bottom: 25px;
  text-align: left;
  font-weight: 500;
}

.form__submit-button {
  width: 250px;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: black;
  color: white;
  border-radius: 5px;
}

.form__button_empty {
  background-color: grey;
}
</style>
