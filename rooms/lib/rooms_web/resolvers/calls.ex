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
    #bearer authorization
    secret = Application.get_env(:rooms, :twilio_secret)
    sid = Application.get_env(:rooms, :twilio_sid)
    encoded = Base.encode64("#{sid}:#{secret}")
    auth = "Basic #{encoded}"
    
    case HTTPoison.post "https://video.twilio.com/v1/Rooms", "", [{"Authorization", auth}] do
      {:ok, response} -> 
        case Poison.decode response.body do
          {:ok, body} ->
            Map.put_new(args, :sid, body["sid"]) |> Rooms.Calls.create_room
          {:error, reason} ->
            {:error, "Couldn't decode"}
          end
      
      {:error, reason} ->
        {:error, message: "Connection error", details: reason}
      end
  end

  def create_user(_parent, args, _resolution) do
    {:ok, Rooms.Calls.create_user(args)}
  end

  def delete_room(_parent, args, _resolution) do
    case Rooms.Calls.get_room(args[:id]) do
      nil ->
        {:error, message: "Invalid id"}
      room ->
        Rooms.Calls.delete_room(room)
    end
  end

  def connect_to_room(_parent, args, _resolution) do
    case Rooms.Calls.get_room(args[:id]) do
      # Generate access token
    end
  end
end