class ExperiencesController < ApplicationController
  def index
    render json: 
      [
        {
          start_date: "",
          end_date: "",
          title: "Food Service Job",
          company: "Cream",
          details: "Served ice cream sandwhiches",
          student_id: 1
        },
        {
          start_date: "",
          end_date: "",
          title: "Intern",
          company: "Stanford Children's Hospital",
          details: "Worked with the DSS team as an intern",
          student_id: 1        },
        {
          start_date: "",
          end_date: "",
          title: "Intern",
          company: "Techniqually not slave labor",
          details: "Unpaid internships are hilarious wastes of time except for contact building!",
          student_id: 2
        },
        {
          start_date: "",
          end_date: "",
          title: "Web Developer",
          company: "Freelance",
          details: "Freelance web developer!",
          student_id: 3            
        },
        {
          start_date: "",
          end_date: "",
          title: "Teacher",
          company: "Henry M Gunn",
          details: "Econ Teacher",
          student_id: 3 
        }

      ] 
  end
end
