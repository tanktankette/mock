defmodule Rooms.CallsTest do
  use Rooms.DataCase

  alias Rooms.Calls

  describe "rooms" do
    alias Rooms.Calls.Room

    @valid_attrs %{description: "some description"}
    @update_attrs %{description: "some updated description"}
    @invalid_attrs %{description: nil}

    def room_fixture(attrs \\ %{}) do
      {:ok, room} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Calls.create_room()

      room
    end

    test "list_rooms/0 returns all rooms" do
      room = room_fixture()
      assert Calls.list_rooms() == [room]
    end

    test "get_room!/1 returns the room with given id" do
      room = room_fixture()
      assert Calls.get_room!(room.id) == room
    end

    test "create_room/1 with valid data creates a room" do
      assert {:ok, %Room{} = room} = Calls.create_room(@valid_attrs)
      assert room.description == "some description"
    end

    test "create_room/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Calls.create_room(@invalid_attrs)
    end

    test "update_room/2 with valid data updates the room" do
      room = room_fixture()
      assert {:ok, room} = Calls.update_room(room, @update_attrs)
      assert %Room{} = room
      assert room.description == "some updated description"
    end

    test "update_room/2 with invalid data returns error changeset" do
      room = room_fixture()
      assert {:error, %Ecto.Changeset{}} = Calls.update_room(room, @invalid_attrs)
      assert room == Calls.get_room!(room.id)
    end

    test "delete_room/1 deletes the room" do
      room = room_fixture()
      assert {:ok, %Room{}} = Calls.delete_room(room)
      assert_raise Ecto.NoResultsError, fn -> Calls.get_room!(room.id) end
    end

    test "change_room/1 returns a room changeset" do
      room = room_fixture()
      assert %Ecto.Changeset{} = Calls.change_room(room)
    end
  end

  describe "users" do
    alias Rooms.Calls.User

    @valid_attrs %{cid: "some cid", name: "some name"}
    @update_attrs %{cid: "some updated cid", name: "some updated name"}
    @invalid_attrs %{cid: nil, name: nil}

    def user_fixture(attrs \\ %{}) do
      {:ok, user} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Calls.create_user()

      user
    end

    test "list_users/0 returns all users" do
      user = user_fixture()
      assert Calls.list_users() == [user]
    end

    test "get_user!/1 returns the user with given id" do
      user = user_fixture()
      assert Calls.get_user!(user.id) == user
    end

    test "create_user/1 with valid data creates a user" do
      assert {:ok, %User{} = user} = Calls.create_user(@valid_attrs)
      assert user.cid == "some cid"
      assert user.name == "some name"
    end

    test "create_user/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Calls.create_user(@invalid_attrs)
    end

    test "update_user/2 with valid data updates the user" do
      user = user_fixture()
      assert {:ok, user} = Calls.update_user(user, @update_attrs)
      assert %User{} = user
      assert user.cid == "some updated cid"
      assert user.name == "some updated name"
    end

    test "update_user/2 with invalid data returns error changeset" do
      user = user_fixture()
      assert {:error, %Ecto.Changeset{}} = Calls.update_user(user, @invalid_attrs)
      assert user == Calls.get_user!(user.id)
    end

    test "delete_user/1 deletes the user" do
      user = user_fixture()
      assert {:ok, %User{}} = Calls.delete_user(user)
      assert_raise Ecto.NoResultsError, fn -> Calls.get_user!(user.id) end
    end

    test "change_user/1 returns a user changeset" do
      user = user_fixture()
      assert %Ecto.Changeset{} = Calls.change_user(user)
    end
  end
end
