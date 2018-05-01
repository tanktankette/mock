defmodule RoomsWeb.Resolvers.Calls do

  def list_users(_parent, _args, _resolution) do
    {:ok, Rooms.Calls.list_users()}
  end

end