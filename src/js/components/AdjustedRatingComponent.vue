<script>
import { UserCreatedRoundsService } from "../services/user-created-rounds.service";
import { map } from "rxjs/operators";
import { roundSort } from "../shared/utils";

export default {
  name: "adjusted-rating",
  props: {
    pdgaNumber: String,
    currentRating: Number,
    adjustedRating: Number,
    eventHub: Object
  },
  created() {
  },
  subscriptions: function() {
    return {
      rounds: UserCreatedRoundsService.savedRounds.pipe(
        map(hash => hash[this.pdgaNumber] || {}),
        map(hash => Object.values(hash)),
        map(rounds =>
          [...rounds].sort(roundSort).map(round => Object.assign({}, round))
        )
      )
    };
  },
  methods: {
    openRound: function(round) {
      this.eventHub.$emit("openRound", JSON.parse(JSON.stringify(round)));
    }
  }
};
</script>
<template>
  <div>
    <div class="panel-pane panel-adjusted-rating">
      <h2 class="panel-title">Adjusted Rating</h2>
      <div class="pane-content">
        <template v-if="rounds && rounds.length && adjustedRating">
          <div class="adjusted-rating">
            {{adjustedRating}}
            <a
              class="rating-difference"
              v-on:click.prevent
              href="#"
              v-bind:class="{'loss': this.adjustedRating < this.currentRating}"
            >{{this.adjustedRating < this.currentRating ? '-' : '+'}}{{Math.abs(this.adjustedRating - this.currentRating)}}</a>
          </div>

          <p>Based on {{rounds.length}} new rounds:</p>
          <ul class="info-list">
            <li v-for="round in rounds">
              <a href="#" v-on:click.prevent="openRound(round)">
                <span v-if="round.tournamentName">{{round.tournamentName}}</span>
                <span v-if="round.roundNumber">Rd {{round.roundNumber}} -</span>
                <strong>{{round.roundRating}}</strong>
              </a>
            </li>
          </ul>
        </template>
        <template v-if="!(rounds && rounds.length && adjustedRating)">
          <p>Try adding some rounds to see how it will affect your rating</p>
        </template>
      </div>
    </div>
    <div class="pane-separator"></div>
  </div>
</template>