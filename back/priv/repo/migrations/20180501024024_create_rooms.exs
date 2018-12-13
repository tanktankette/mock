defmodule Rooms.Repo.Migrations.CreateRooms do
  use Ecto.Migration

  def change do
    create table(:rooms) do
      add :description, :string

      timestamps()
    end

  end
end
