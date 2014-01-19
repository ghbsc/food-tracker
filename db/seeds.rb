# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# Environment variables (ENV['...']) can be set in the file config/application.yml.
# See http://railsapps.github.io/rails-environment-variables.html


  #Less food habits
  food_habits_less = %w[Added_Sugars Grains Dairy Alcohol Processed_Food Desserts Fruits Snacks Big_Portions Caffeine Legumes Carbs Chocolate Added_Sodium Soda Fast_Food Bread Bad_Fats Late_Meals Late-night_Snacks Candy Gluten Wheat Mindless_Eating Bad_Snacks Red_meat Rice Refined_Carbs Soy Binging Chips Pasta Nuts Eating_Out Smoking Cookies Cheese].inject({}) { |hash, word| hash[word] = "less"; hash }

  #less = (1..37).map { |num| "less" }
  #food_habits_less = Hash[food_habits.zip(less)]
  
  food_habits_less.keys.each do |key|
    if(!!(key =~ /_/))
      food_habits_less[key.sub(/_/, " ")] = food_habits_less[key]
      food_habits_less.delete(key)
    end 
    #scrubbed_key = key.dup.gsub! "_", " "
  end

  food_habits_less.keys.sort 
  food_habits_less.each { |key, value| FoodHabit.find_or_create_by(name: key, amount: value) }
  
  #More food habits
  food_habits_more = %w[Veggies Water Sleep Exercise Fiber Sunshine Relaxation].inject({}) { |hash, word| hash[word] = "more"; hash }
  
  food_habits_more.keys.sort
  food_habits_more.each do |key, value|
    FoodHabit.find_or_create_by(name: key, amount: value)
  end


  food_feats = Array.new
  food_feats << 'I made my own meal(s).'
  food_feats << 'I ate locally grown food.'
  food_feats << 'I ate organic veggies.'
  food_feats << 'I ate sustainable seafood.'
  food_feats << 'I ate grass-fed meat.'

  food_feats.each do |feat|
   FoodFeat.find_or_create_by(description: feat) 
  end
