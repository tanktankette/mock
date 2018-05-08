defmodule RoomsWeb.Resolvers.Calls do

  def list_users(_parent, _args, _resolution) do
    {:ok, Rooms.Calls.list_users()}
  end

  def list_rooms(_parent, _args, _resolution) do
    {:ok, Rooms.Calls.list_rooms()}
  end

  def get_room_by(_parent, args, _resolution) do
    {:ok, Rooms.Calls.get_room_by(args)}
  end

  def create_room(_parent, args, _resolution) do
    Rooms.Calls.create_room(args)
  end

  def create_user(_parent, args, _resolution) do
    {:ok, Rooms.Calls.create_user(args)}
  end

end