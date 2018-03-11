class CapstonesController < ApplicationController
  def index
    render json: 
      [
        {
          title: "Nutritional Advocate",
          description: "Nutritional helper",
          url: "www.google.com",
          photo: "???",
          student_id: 1
        },
        {
          title: "Resume",
          description: "Resume Display",
          url: "www.google.com",
          photo: "???",
          student_id: 2        },
        {
          title: "Political Finder",
          description: "Displays political rallies and other events",
          url: "www.google.com",
          photo: "???",
          student_id: 3           }
      ] 

  end
end
