defmodule RoomsWeb.Schema do
  use Absinthe.Schema
  import_types RoomsWeb.Schema.CallsTypes

  alias RoomsWeb.Resolvers

  query do

    @desc "Get all users"
    field :users, list_of(:user) do
      resolve &Resolvers.Calls.list_users/3
    end

  end

end