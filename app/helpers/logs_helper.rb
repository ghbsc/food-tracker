module LogsHelper
  def new_fields_template(f, association)
    new_object = f.object.class.reflect_on_association(association).klass.new
    
    content_tag(:div, :id => "#{association}_fields_template", :style => "display: none") do
      f.fields_for(association, new_object, :child_index => "new_#{association}") do |builder|
        render(association.to_s.singularize + "_fields", :f => builder)
      end
    end
  end

  def new_tag_template(current_user, association)
    @atag = current_user.class.reflect_on_association(association).klass.new 
    content_tag(:div, :id => "#{association}_template", :style => "display: none") do 
      fields_for(association, @atag, :index => "new_#{association}") do |builder|
        render(association.to_s.singularize + "_fields", object: @atag)
      end
    end
  end

  #NOT used
  def link_to_new_fields(name, association)
    link_to(name, "javascript:void(0)", :class => "add_child", :"data-association" => association)
  end

  def link_to_delete_fields(name, f)
    f.hidden_field(:_destroy) + link_to(name, "javascript:void(0)", :class => "remove_child", :id => 'remove_new_meals', :data => { :toggle => 'modal', :target => '#log-meal-remove-popup'})
  end

  def link_to_delete_tag(name, index)
    hidden_field_tag("user[tags][#{index}][_destroy]", "false") + link_to(name, "javascript:void(0)", :class => "remove_tag", :id => 'remove_new_tags', :data => { :toggle => 'modal', :target => '#log-tag-remove-popup'})
  end
  
  
  def series_of_times
    Array.new(24.hours / 30.minutes) do |i|
        (Time.now.midnight + (i*30.minutes)).strftime("%l:%M%P")
    end
  end

end
