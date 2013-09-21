module UsersHelper

  def genders
    { female: "Female", male: "Male", neutral: "I'd rather not say" }
  end

  def birthday_days
    @birthday_days = (1..31).to_a
    #@birthday_days = (1..31).inject({}) { |hash, num| hash[num] = num; hash }
  end

  def birthday_months
    #@birthday_months = %w[Jan Fed Mar Apr May Jun Jul Aug Sep Oct Nov Dec].inject({}) { |hash, month| hash[month] = month; hash }
    #@birthday_months = %w[Jan Fed Mar Apr May Jun Jul Aug Sep Oct Nov Dec]
    
    birthday_keys = (1..12).to_a
    birthday_values = %w[Jan Fed Mar Apr May Jun Jul Aug Sep Oct Nov Dec]
    @birthday_months = Hash[birthday_keys.zip(birthday_values)]
  end

  def birthday_years
    2006.downto(1921).to_a
  end
end
