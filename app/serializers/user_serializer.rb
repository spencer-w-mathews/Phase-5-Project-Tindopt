class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :user_or_shelter, :password_digest
  has_many :favorites
  has_many :animals
end
