# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :rooms,
  ecto_repos: [Rooms.Repo]

# Configures the endpoint
config :rooms, RoomsWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "udgza9sNyy6Vf7QiEjP6tOPpiWwEJfgHysqxBv4v61EIHVTYShs+OYKL9uYAfrOd",
  render_errors: [view: RoomsWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Rooms.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
import_config "twilio.secret.exs"
