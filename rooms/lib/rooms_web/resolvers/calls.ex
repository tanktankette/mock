defmodule RoomsWeb.Resolvers.Calls do
  HTTPoison.start

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
    secret = Application.get_env(:rooms, :twilio_secret)
    sid = Application.get_env(:rooms, :twilio_sid)
    encoded = Base.encode64("#{sid}:#{secret}")
    auth = "Basic #{encoded}"
    IO.puts auth
    {:ok, response} = HTTPoison.post "https://video.twilio.com/v1/Rooms", _, [{"Authorization", auth}]
    IO.puts response.body
    Rooms.Calls.create_room(args)
  end

  def create_user(_parent, args, _resolution) do
    {:ok, Rooms.Calls.create_user(args)}
  end

end