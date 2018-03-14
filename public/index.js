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

var CapstoneShowPage = {
  template: "#capstones-show-page",
  data: function() {
    return {
      capstone: {}
    };
  },
  created: function() {
    axios.get("/capstones/" + this.$route.params.id).then(function(response) {
      console.log(response.data);
      this.capstone = response.data;
    }.bind(this));
  }
}

var ProfilePage = {
  template: "#profile-page",
  data: function() {
    return {
      currentStudent: {user_name: "Hello"},
      educations: [],
      experiences: [],
      skills: [],
      errors: []
    };
  },
  created: function() {
    console.log("Running Twice?");
    axios.get("http://localhost:3000/students").then(function(response){
       this.currentStudent = response.data[0];
       console.log(this.currentStudent);
        console.log(Object.keys(this.currentStudent));
      }.bind(this)).catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
      axios.get("/educations").then(function(response) {
            console.log(response.data);
            this.educations = response.data;

      }.bind(this)).catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
      axios.get("/experiences").then(function(response) {
            console.log(response.data);
            this.experiences = response.data;

      }.bind(this)).catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
      axios.get("/skills").then(function(response) {
            console.log(response.data);
            this.skills = response.data;

      }.bind(this)).catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
  },
  methods: {
    update: function() {
      axios
        .patch("/students/" + this.currentContactID, this.currentStudent)
        .then(function(response) {
           console.log("Updated!");
        }.bind(this)
        ).catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
    },
    output: function(input){
      if(input != "photo"){
        return true;
      }else{
        return false;
      }
    }
  }
};




var router = new VueRouter({
  routes: [
   { path: "/login", component: LoginPage },

   { path: "/capstones/:id", component: CapstoneShowPage },

   { path: "/profile", component: ProfilePage }


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