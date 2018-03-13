class SkillsController < ApplicationController
  def index 
    render json: 
      [
        {
          skill_name: "Coding",
          student_id: 1
        },
        {
          skill_name: "Learning",
          student_id: 1
        },
        {
          skill_name: "Punctualitiy",
          student_id: 1
        },
        {
          skill_name: "Teaching",
          student_id: 3
        },
        {
          skill_name: "Cooking",
          student_id: 2
        },
        {
          skill_name: "Fishing",
          student_id: 2
        },
        {
          skill_name: "Sports",
          student_id: 3
        },
        {
          skill_name: "Running",
          student_id: 1
        },

      ] 
  end
end
