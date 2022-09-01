class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :location, :species, :breed, :age, :gender, :size, :weight, :color, :fixed, :housetrained, :url
end
