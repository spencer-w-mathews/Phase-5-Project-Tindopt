class UsersController < ApplicationController
    skip_before_action :authorized
  
      def index
          users= User.all
          render json: users
      end
      
      def create
        user = User.create(user_params)
        if user.valid?(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end
  
      def show
        user = User.find_by(id: params[:id])
        if user
          render json: user, serializer: UserSerializer
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end
  
      def show_me
        user = User.find_by(id: session[:user_id])
        if user
          render json: user, serializer: UserSerializer
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end
    
      private
    
      def user_params
        params.permit(:username, :user_or_shelter, :password, :password_confirmation)
      end
    end
  