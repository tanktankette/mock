defmodule RoomsWeb.Schema do
  use Absinthe.Schema
  import_types RoomsWeb.Schema.CallsTypes

  alias RoomsWeb.Resolvers

  query do

    @desc "Get all users"
    field :users, list_of(:user) do
      resolve &Resolvers.Calls.list_users/3
    end

    @desc "Get all rooms"
    field :rooms, list_of(:room) do
      resolve &Resolvers.Calls.list_rooms/3
    end

    @desc "Get a room"
    field :room, :room do
      arg :id, non_null(:id)
      resolve &Resolvers.Calls.get_room_by/3
    end

  end

  mutation do

    @desc "Create a room"
    field :create_room, type: :room do
      arg :name, non_null(:string)
      resolve &Resolvers.Calls.create_room/3
    end
    
  end

end