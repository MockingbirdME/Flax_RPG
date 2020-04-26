## In order to deploy using heroku follow these simple steps: 

1. In terminal navigate to this folder.
1. In terminal run `heroku login`, follow the directions to press any key and login via the web UI.
1. Using Docker (database not working this way, not recommended at the moment):
  1. In terminal run `heroku container:push web`
  1. In terminal run `heroku container:release web`
1. Using git:
  1. In Terminal run `git push heroku master`
1. _optional_ to open the production app, in terminal run `heroku open`
