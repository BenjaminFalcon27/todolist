TranslationIO.configure do |config|
    config.api_key        = '3276339e2b2c422bb5ea673e1ef58b0f'
    config.source_locale  = 'en'
    config.target_locales = ['es', 'nl', 'de']
  
    # Uncomment this if you don't want to use gettext
    # config.disable_gettext = true
  
    # Uncomment this if you already use gettext or fast_gettext
    # config.locales_path = File.join('path', 'to', 'gettext_locale')
  
    # Find other useful usage information here:
    # https://github.com/translation/rails#readme
  end