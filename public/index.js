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
      // Display Models
      currentStudent: {user_name: "Hello"},
      educations: [],
      experiences: [],
      skills: [],

      // Add Models
      newSkillName: "",

      newEducationStartDate: null,
      newEducationEndDate: null,
      newEducationDegree: "",
      newEducationSchool: "",


      newExperienceStartDate: null ,
      newExperienceEndDate: null,
      newExperienceTitle: "",
      newExperienceCompany: "",
      newExperienceDetails: "",

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
    dateTime: function(input){
      if(input == "start_date" || input == "end_date"){
        return true;
      }else{
        return false;
      }
    },
    output: function(input){
      if(input != "photo"){
        return true;
      }else{
        return false;
      }
    },
    // Add functionalities
    newSkill: function(){
      params = {
        skill_name: this.newSkillName,
        student_id: this.currentStudent.id
      }
      axios.post("/skills", params).then(function(response){

      }.bind(this)).catch(function(error){
        this.erorrs = error.response.data.errors;
      }.bind(this));
    },
    newEducation: function(){
      params = {
        start_date: this.newEducationStartDate,
        end_date: this.newEducationEndDate,
        degree: this.newEducationDegree,
        school: this.newEducationSchool,
        student_id: this.currentStudent.id
      }
      axios.post("/educations", params).then(function(response){

      }.bind(this)).catch(function(error){
        this.erorrs = error.response.data.errors;
      }.bind(this));
    },
    newExperience: function(){
      params = {
        start_date: this.newExperienceStartDate,
        end_date: this.newExperienceEndDate,
        title: this.newExperienceTitle,
        details: this.newExperienceDetails,
        company: this.newExperienceCompany,
        student_id: this.currentStudent.id,

      }
      axios.post("/experiences", params).then(function(response){

      }.bind(this)).catch(function(error){
        this.erorrs = error.response.data.errors;
      }.bind(this));
    },
    // Delete functionalities
    deleteEducation: function(education) {
      var id = education.id 
      axios.delete("/educations/" + id).then(function(response) {
        var index = this.educations.indexOf(education);
        this.educations.splice(index, 1);
      }.bind(this))
    },
    deleteExperience: function(experience) {
      var id = experience.id 
      axios.delete("/experiences/" + id).then(function(response) {
        var index = this.experiences.indexOf(experience);
        this.experiences.splice(index, 1);
      }.bind(this))
    },
    deleteSkill: function(skill) {
      var id = skill.id 
      axios.delete("/skills/" + id).then(function(response) {
        var index = this.skills.indexOf(skill);
        this.skills.splice(index, 1);
      }.bind(this))
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