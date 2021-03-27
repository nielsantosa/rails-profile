class PagesController < ApplicationController
  before_action :set_background_image, only: [:home, :about, :contact]
  before_action :set_profile_image, only: :home

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

  def set_profile_image
    @profile_photo_id = "profile_picture"
  end
end
