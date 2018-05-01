defmodule Rooms.Calls.Room do
  use Ecto.Schema
  import Ecto.Changeset


  schema "rooms" do
    field :description, :string
    has_many :users, Rooms.Calls.User


    timestamps()
  end

  @doc false
  def changeset(room, attrs) do
    room
    |> cast(attrs, [:description])
    |> validate_required([:description])
  end
end
