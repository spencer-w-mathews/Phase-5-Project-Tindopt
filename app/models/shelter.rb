class Shelter < ApplicationRecord
    has_secure_password
    has_many :animals
end
