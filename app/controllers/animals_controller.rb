class AnimalsController < ApplicationController
    def index
        animals = Animal.all
        render json: animals
    end

    def create
        animal = Animal.create(animal_params)
        if animal.valid?(params[:password])
          render json: animal, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        animal = Animal.find_by(id: params[:id])
        animal.destroy
      end
  

    private
    def animal_params
        params.permit( :name, :image, :location, :species, :breed, :age, :gender, :size, :weight, :color, :fixed, :housetrained, :url, :user_id)
    end
    
end
