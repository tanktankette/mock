defmodule Rooms.Calls.User do
  use Ecto.Schema
  import Ecto.Changeset


  schema "users" do
    field :cid, :string
    field :name, :string
    belongs_to :room, Rooms.Calls.Room

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :cid])
    |> validate_required([:name, :cid])
  end
end
