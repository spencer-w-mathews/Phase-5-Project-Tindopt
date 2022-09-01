class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :url
  belongs_to :user
end
