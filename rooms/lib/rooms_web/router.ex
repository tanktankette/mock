defmodule RoomsWeb.Router do
  use RoomsWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api" do
    pipe_through :api

    forward "/graphiql", Absinthe.Plug.GraphiQL,
      schema: RoomsWeb.Schema

    forward "/", Absinthe.Plug,
      schema: RoomsWeb.Schema

  end
end
