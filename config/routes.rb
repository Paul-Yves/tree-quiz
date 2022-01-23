Rails.application.routes.draw do
  root to: 'home#index'
  get 'home/index'
  resources :answers, only: %i[index create destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
