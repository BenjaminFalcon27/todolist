Rails.application.routes.draw do
  resources :todo_lists do
    resources :entries do
      member do
        get :toggle
      end
    end
  end

  root 'todo_lists#index'

end
