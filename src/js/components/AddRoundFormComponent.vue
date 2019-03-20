<script>
import { UserCreatedRoundsService } from "../services/user-created-rounds.service";
export default {
  name: "add-round-form",
  props: {
    pdgaNumber: String
  },
  data: function() {
    return {
      form: {
        tournamentName: "",
        roundNumber: null,
        roundDate: new Date().toISOString().substring(0, 10),
        roundRating: null
      }
    };
  },
  created() {
      
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      let date = new Date(this.form.roundDate);
      date.setMinutes(date.getMinutes() - date.getTimezoneOffset());

      let newRound = {
        tournamentName: this.form.tournamentName || "",
        roundNumber: this.form.roundNumber || 1,
        roundDate: date.getTime(),
        roundRating: this.form.roundRating,
      };
      UserCreatedRoundsService.addRound(newRound, this.pdgaNumber).subscribe(
        () => {
          this.closeModal();
        }
      );
    },
    closeModal() {
      this.$root.$destroy();
      document.body.removeChild(this.$root.$el);
    }
  }
};
</script>
<template>
  <div class="modal-wrapper" id="add-round-app">
    <div class="modal-click-off" v-on:click="closeModal()"></div>
    <div class="modal-container">
      <header class="modal-header">
        <h1>Add new round</h1>
        <span class="modal-close" v-on:click="closeModal()">x</span>
      </header>
      <section class="modal-body">
        <b-form @submit="onSubmit">
          <b-form-input
            id="tournamentName"
            type="text"
            v-model="form.tournamentName"
            placeholder="Tournament Name"
          />
          <b-form-input
            id="roundNumber"
            type="number"
            min="1"
            v-model="form.roundNumber"
            placeholder="Round Number"
          />
          <b-form-input
            id="roundDate"
            type="date"
            v-model="form.roundDate"
            placeholder="Round Date"
          />
          <b-form-input
            id="roundRating"
            type="number"
            min="500"
            max="1200"
            v-model="form.roundRating"
            placeholder="Round Rating"
          />
          <div class="cf">
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset">Reset</b-button>
          </div>
        </b-form>
      </section>
    </div>
  </div>
</template>