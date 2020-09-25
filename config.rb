set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

set :fonts_dir, 'fonts'

set :googleAnalytics, ''

set :markdown_engine, :redcarpet

set :markdown, :fenced_code_blocks => true, :smartypants => true, :disable_indented_code_blocks => true, :prettify => true, :tables => true, :with_toc_data => true, :no_intra_emphasis => true

# Activate the syntax highlighter
activate :syntax

# This is needed for Github pages, since they're hosted on a subdomain
activate :relative_assets
set :relative_links, true

# ignore assets
ignore 'includes/*';
ignore 'javascripts/*';
ignore 'stylesheets/*';

# Build-specific configuration
configure :build do

  # For example, change the Compass output style for deployment
  activate :minify_css, inline:true

  # Minify Javascript on build
  activate :minify_javascript, inline:true

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

