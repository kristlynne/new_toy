class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

   before_action :configure_permitted_parameters, if: :devise_controller?

   protected

   def configure_permitted_parameters
     devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :username, :email])
   end

   def check_logged_in
     if !user_signed_in?
       redirect_to root_path,
       notice: "You need to sign in to do this"
     end
   end
   def after_sign_in_path_for(resource)
  '/'
  end

# def after_sign_out_path_for(resource_or_scope)
  # your_path
    # end
 end
