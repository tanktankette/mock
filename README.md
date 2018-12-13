# Mock - A Google Hangouts Clone
Made with an Elixir back end and a React front end
Uses Elixir 1.6.4, Node 8.11 and PostgreSQL

### Installation:
Get Elixir, npm, postgresql, and postgresql-contrib

In  /front

    npm install

in /back

    mix deps.get
    sudo -u postgres psql postgres
	    postgres=# \password postgres
	    Enter new password:postgres
	    Enter it again:postgres
    mix ecto.create
    mix ecto.migrate
  

### Configuration:
In front/index.js 

    const  client  =  new  ApolloClient({
    uri:  <url of the back end's GraphQL endpoint>
    })

In  back/lib/rooms_web/endpoint.ex

    plug CORSPlug, origin: [<url of the front end>]

Create back/config/twilio.secret.exs and insert your Twilio api information

    use  Mix.Config
    config :rooms, twilio_secret: ''
    config :rooms, twilio_api: ''
    config :rooms, twilio_sid: ''

### Run
	

    ./run.sh

