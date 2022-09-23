class CreateAnimals < ActiveRecord::Migration[6.1]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :image
      t.string :location
      t.string :species
      t.string :breed
      t.string :age
      t.string :gender
      t.string :size
      t.string :weight
      t.string :color
      t.string :fixed
      t.string :housetrained
      t.string :url
      t.integer :user_id

      t.timestamps
    end
  end
end
