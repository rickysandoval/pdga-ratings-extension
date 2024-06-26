<script>
import { UserCreatedRoundsService } from "../services/user-created-rounds.service";
import { map, tap, take, delay, concatMap, switchMap } from "rxjs/operators";
import { from } from "rxjs";
import { roundSort } from "../shared/utils";

export default {
  name: "adjusted-rating",
  props: {
    pdgaNumber: String,
    currentRating: Number,
    adjustedRating: Number,
    eventHub: Object,
    droppedRounds: Array
  },
  data: function() {
    return {
      clearedRounds: null
    };
  },
  created() {},
  subscriptions: function() {
    return {
      rounds: UserCreatedRoundsService.savedRounds.pipe(
        map(hash => hash[this.pdgaNumber] || {}),
        map(hash => Object.values(hash)),
        map(rounds =>
          [...rounds].sort(roundSort).map(round => Object.assign({}, round))
        ),
        tap(rounds => {
          if (rounds.length && this.clearedRounds) {
            this.clearedRounds = null;
          }
        })
      )
    };
  },
  methods: {
    openRound: function(round) {
      this.eventHub.$emit("openRound", JSON.parse(JSON.stringify(round)));
    },
    clearRounds: function() {
      this.$observables.rounds
        .pipe(
          take(1),
          tap(rounds => {
            this.clearedRounds = rounds;
          }),
          switchMap(() => UserCreatedRoundsService.clearPlayer(this.pdgaNumber))
        )
        .subscribe();
    },
    undoClearRounds: function() {
      let rounds = [...this.clearedRounds].map(round =>
        JSON.parse(JSON.stringify(round))
      );
      from(rounds)
        .pipe(
          concatMap(round =>
            UserCreatedRoundsService.addRound(round, this.pdgaNumber)
          )
        )
        .subscribe();
    }
  }
};
</script>
<template>
  <div>
    <div class="panel-pane panel-adjusted-rating">
      <h2 class="panel-title">Estimated Adjusted Rating</h2>
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

          <div style="margin-top: 10px;">
            <a href="#" v-on:click.prevent="openRound(null)">Add another round</a>
          </div>
          <p style="margin-top: 5px;">
            <a
              href="#"
              class="clear-rounds"
              v-on:click.prevent="clearRounds()"
            >Clear all added rounds</a>
          </p>
          <p>Based on {{rounds.length}} new rounds:</p>
          <ul class="info-list">
            <li v-for="round in rounds">
              <a href="#" v-on:click.prevent="openRound(round)">
                <span v-if="round.tournamentName">{{round.tournamentName}}</span>
                <span v-if="round.roundNumber">Rd {{round.roundNumber}} -</span>
                <strong>{{round.roundRating}}</strong>
                <span v-if="round.dropped">(DROPPED)</span>
              </a>
            </li>
          </ul>
          <template v-if="droppedRounds.length">
            <p>And dropping {{droppedRounds.length}} old rounds over 1 year old:</p>
            <ul class="info-list">
              <li v-for="round in droppedRounds">
                <div>
                  <span v-if="round.tournamentName">{{round.tournamentName}}</span>
                  <span v-if="round.roundNumber">Rd {{round.roundNumber}} -</span>
                  <strong>{{round.roundRating}}</strong>
                </div>
              </li>
            </ul>
          </template>
        </template>
        <template v-if="!(rounds && rounds.length && adjustedRating)">
          <p v-if="clearedRounds">
            <a href="#" v-on:click.prevent="undoClearRounds()">Undo clear rounds</a>
          </p>
          <p>
            <a href="#" v-on:click.prevent="openRound(null)">Add a round</a> to see how it will affect your rating
          </p>
        </template>
      </div>
    </div>
    <div class="pane-separator"></div>
  </div>
</template>
