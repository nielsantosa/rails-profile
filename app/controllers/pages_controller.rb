class PagesController < ApplicationController
  before_action :set_background_image, only: [:home, :about, :contact]

  def home
  end

  def about
  end

  def works
  end

  def contact
  end

  private

  def set_background_image
    @background_photo_id = "bdkpyp7oxgemecglhb3i"
  end
end
