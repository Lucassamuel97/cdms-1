class AddNameToAdmin < ActiveRecord::Migration[6.0]
  def change
    add_column :admins, :name, :string
  end
end
