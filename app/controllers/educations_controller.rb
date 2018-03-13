class EducationsController < ApplicationController
  def index
      render json: 
        [
          {
            start_date: "",
            end_date: "",
            degree: "Econ",
            school: "UIUC",
            student_id: 1
          },
          {
            start_date: "",
            end_date: "",
            degree: "CS",
            school: "UIUC",
            student_id: 1          
          },
          {
            start_date: "",
            end_date: "",
            degree: "Biology",
            school: "UIUC",
            student_id: 2
          },
          {
            start_date: "",
            end_date: "",
            degree: "Physics",
            school: "Berekely",
            student_id: 2
          },
          {
            start_date: "",
            end_date: "",
            degree: "Chemistry",
            school: "Princeton",
            student_id: 3
          }

        ] 

  end

  
end
