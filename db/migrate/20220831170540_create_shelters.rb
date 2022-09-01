class CreateShelters < ActiveRecord::Migration[6.1]
  def change
    create_table :shelters do |t|
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
