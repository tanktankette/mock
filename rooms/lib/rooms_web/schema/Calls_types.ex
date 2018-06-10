defmodule RoomsWeb.Schema.CallsTypes do
  use Absinthe.Schema.Notation
  use Absinthe.Ecto, repo: Rooms.Repo

  object :room do
    field :id, :id
    field :name, :string
    field :sid, :string
    field :users, list_of(:user), resolve: assoc(:users)
  end
 
  object :user do
    field :id, :id
    field :name, :string
    field :cid, :string
    field :room, :room, resolve: assoc(:room)
  end
end