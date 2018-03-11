class DatabasesController < ApplicationController
  def index
    render json: 
      [
        {
          first_name: "Drew",
          last_name: "Pilgrim",
          email: "drew@gmail.com",
          password_digest: "???",
          phone_number: "7777777",
          short_bio: "Is a human",
          linkedin_url: "https://www.linkedin.com/in/drew-pilgrim/",
          twitter_handle: "https://twitter.com/",
          personal_blog: "https://google.com",
          online_resume: "https://resume.com",
          github_url:  "https://github.com/drewpilgrim",
          photo: "http://moziru.com/images/human-clipart-3d-human-17.jpg"
        },
        {
          first_name: "Bob",
          last_name: "Steve",
          email: "bob@gmail.com",
          password_digest: "???",
          phone_number: "6666666",
          short_bio: "Is a bot",
          linkedin_url: "https://www.linkedin.com/in/bob/",
          twitter_handle: "https://twitter.com/",
          personal_blog: "https://google.com",
          online_resume: "https://resume.com",
          github_url:  "https://github.com/bob",
          photo: "http://moziru.com/images/human-clipart-3d-human-17.jpg"
        },
        {
          first_name: "Ralph",
          last_name: "Generic",
          email: "generic@gmail.com",
          password_digest: "???",
          phone_number: "5555555",
          short_bio: "Is a human",
          linkedin_url: "https://www.linkedin.com/in/Ralph/",
          twitter_handle: "https://twitter.com/",
          personal_blog: "https://google.com",
          online_resume: "https://resume.com",
          github_url:  "https://github.com/ralph",
          photo: "http://moziru.com/images/human-clipart-3d-human-17.jpg"
        }
      ] 
  end

end
