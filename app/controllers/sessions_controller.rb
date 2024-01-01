class SessionsController < ApplicationController
  before_action :redirect_authenticated_user, only: [:new]

  def new
  end

  def destroy
    logout current_user
    redirect_to root_path, notice: 'You have been logged out'
  end

  def create
    if user = User.authenticate_by(email: params[:email], password: params[:password])
      login user
      redirect_to root_path, notice: 'You have signed in successfully'
    else
      flash[:alert] = 'Invalid email or password'
      render :new, status: :unprocessable_entity
    end
  end

  private

  def redirect_authenticated_user
    # Redirect to root if the user is already authenticated
    redirect_to root_path if current_user
  end
end
