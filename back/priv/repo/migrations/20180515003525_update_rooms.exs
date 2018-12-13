defmodule Rooms.Repo.Migrations.UpdateRooms do
  use Ecto.Migration

  def change do
    alter table(:rooms) do
      add :sid, :string
      add :name, :string
      remove :description
    end
  end
end
