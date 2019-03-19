module.exports = {
    "extends": "plugin:vue/base",
    "rules": {
        "vue/no-use-v-if-with-v-for": ["error", {
            "allowUsingIterationVar": true
          }]
    }
};