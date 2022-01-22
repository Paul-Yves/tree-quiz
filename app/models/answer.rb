class Answer < ApplicationRecord
  serialize :user_answers, JSON
end
