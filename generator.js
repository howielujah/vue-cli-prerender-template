module.exports = (api, options) => {
  api.extendPackage({
    scripts: {
      serve: "vue-cli-service serve",
      build: "vue-cli-service build",
      lint: "vue-cli-service lint"
    },
    dependencies: {
      "core-js": "^3.4.3",
      "prerender-spa-plugin": "^3.4.0",
      "vue": "^2.6.10",
      "vue-router": "^3.1.3",
      "vuex": "^3.1.2"
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "^4.1.0",
      "@vue/cli-plugin-eslint": "^4.1.0",
      "@vue/cli-plugin-router": "^4.1.0",
      "@vue/cli-plugin-vuex": "^4.1.0",
      "@vue/cli-service": "^4.1.0",
      "@vue/eslint-config-standard": "^4.0.0",
      "babel-eslint": "^10.0.3",
      "eslint": "^5.16.0",
      "eslint-plugin-vue": "^5.0.0",
      "lint-staged": "^9.4.3",
      "node-sass": "^4.12.0",
      "sass-loader": "^8.0.0",
      "vue-template-compiler": "^2.6.10"
    },
    gitHooks: {
      "pre-commit": "lint-staged"
    },
    "lint-staged": {
      "*.{js,vue}": ["vue-cli-service lint", "git add"]
    }
  });
  api.render("./template");
};
