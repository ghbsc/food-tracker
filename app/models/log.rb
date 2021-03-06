class Log < ActiveRecord::Base
  has_many :measurements, dependent: :destroy 
  accepts_nested_attributes_for :measurements, reject_if: :not_all_there, allow_destroy: true
  
  has_many :meals, dependent: :destroy 
  accepts_nested_attributes_for :meals, reject_if: proc { |attributes| attributes['notes'].blank? }, allow_destroy: true

  has_and_belongs_to_many :tags
  has_and_belongs_to_many :food_feats
 
  def not_all_there(attributes)
    attributes['weight'].blank? && attributes['body_fat'].blank? && attributes['body_water'].blank? && attributes['neck'].blank? && attributes['bicep'].blank? && attributes['forearm'].blank? && attributes['chest'].blank? && attributes['waist'].blank? && attributes['hips'].blank? && attributes['thigh'].blank? && attributes['calf'].blank?
  end

  #scope :today_log, where(logged_date: Date.today)

#  def self.detail(user_id, logged_date)
#    where("user_id = ? AND logged_date = ?", user_id, logged_date)
#  end

  def self.detail(user_id, logged_date)
    Log.find_by logged_date: logged_date 
    #Log.where(user_id: user_id, logged_date: (logged_date)..(logged_date + 1.day)).first
        #.joins(:meals)

      #.select("logs.*, meals.log_id, meals.notes, to_char(meals.eaten_at, 'FMHH:MIam') as eaten_at")
  end
    #User.join(logs: :meals).where(id: user_id, logs: {logged_date: logged_date})   


#    logs.each do |log|
#      tweaked_meals = log.meals.select{ |meal| }
#      log.association("meals").target = tweaked_meals 
#    end


end
