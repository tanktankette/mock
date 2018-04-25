defmodule RoomsWeb.Router do
  use RoomsWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", RoomsWeb do
    pipe_through :api
  end
end
