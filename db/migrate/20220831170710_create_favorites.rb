class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.string :name
      t.string :image
      t.string :url
      t.integer :user_id

      t.timestamps
    end
  end
end
