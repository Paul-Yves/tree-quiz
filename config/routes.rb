Rails.application.routes.draw do
  root to: 'home#index'
  get 'home/index'
  resources :answers, only: %i[index create destroy]
  resources :valentines, only: %i[index new create destroy]
  resource :valentines do
    member { get :done }
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
