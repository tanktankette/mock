defmodule Rooms.Repo.Migrations.UserBelongsToRoom do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :room_id, references(:rooms)
    end
  end
end
