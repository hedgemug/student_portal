/* global Vue, VueRouter, axios */

var LoginPage = {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        auth: { email: this.email, password: this.password }
      };
      axios
        // FILE WILL BE ROUTED WHERE?
        // .post("/user_token", params)
        .then(function(response) {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          console.log(response.data.jwt);
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = ["Invalid email or password."];
            this.email = "";
            this.password = "";
          }.bind(this)
        );
    }
  }
};

var ProfilePage = {
  template: "#profile-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        auth: { email: this.email, password: this.password }
      };
      axios
        // FILE WILL BE ROUTED WHERE?
        // .post("/user_token", params)
        .then(function(response) {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          console.log(response.data.jwt);
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = ["Invalid email or password."];
            this.email = "";
            this.password = "";
          }.bind(this)
        );
    }
  }
};

var ResumeShowPage = {
  template: "#resume-show-page",
  data: function() {
    return {
      educations: [],
      experiences: [],
      skills: []
    };
  }, 
  created: function() {
    axios.get("/educations").then(function(response) {
          console.log(response.data);
          this.educations = response.data;

    }.bind(this));
    axios.get("/experiences").then(function(response) {
          console.log(response.data);
          this.experiences = response.data;

    }.bind(this));
    axios.get("/skills").then(function(response) {
          console.log(response.data);
          this.skills = response.data;

    }.bind(this));
  }
}

var router = new VueRouter({
  routes: [
   { path: "/login", component: LoginPage },
   { path: "/profile", component: ProfilePage },
   { path: "/resume", component: ResumeShowPage }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router,
  created: function() {
    var jwt = localStorage.getItem("jwt");
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = jwt;
    }
  }
});