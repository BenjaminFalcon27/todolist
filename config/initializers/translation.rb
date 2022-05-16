TranslationIO.configure do |config|
    config.api_key        = '6ed756f70c7f46a08cae58d3230e7ef0'
    config.source_locale  = 'en'
    config.target_locales = ['da']
  
    # Uncomment this if you don't want to use gettext
    # config.disable_gettext = true
  
    # Uncomment this if you already use gettext or fast_gettext
    # config.locales_path = File.join('path', 'to', 'gettext_locale')
  
    # Find other useful usage information here:
    # https://github.com/translation/rails#readme
  end