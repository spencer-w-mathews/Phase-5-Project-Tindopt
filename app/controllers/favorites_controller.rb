class FavoritesController < ApplicationController

    def create
        favorite = Favorite.create(favorite_params)
        if favorite.valid?(params[:password])
          render json: favorite, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
      favorite = Favorite.find_by(id: params[:id])
      favorite.destroy
    end

    private
    def favorite_params
        params.permit(:name, :image, :url, :user_id)
    end
end
