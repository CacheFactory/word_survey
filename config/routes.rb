WordSurvey::Application.routes.draw do
  root :to => 'responses#index'
  match 'reports' => 'reports#index'
  resource :responses
end
