defmodule Rooms.Calls.Room do
  use Ecto.Schema
  import Ecto.Changeset


  schema "rooms" do
    field :name, :string
    field :sid, :string
    has_many :users, Rooms.Calls.User


    timestamps()
  end

  @doc false
  def changeset(room, attrs) do
    room
    |> cast(attrs, [:name, :sid])
    |> validate_required([:name, :sid])
  end
end
