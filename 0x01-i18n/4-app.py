#!/usr/bin/env python3
"""basic flask app"""

import babel
from flask import Flask, render_template, request
from flask_babel import _, Babel

app = Flask(__name__)
babel = Babel(app)
_.__doc__ = "gettext documentation"


class Config(object):
    """Config class"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app.config.from_object(Config)
_('home_title')
_('home_header')


@babel.localeselector
def get_locale():
    """get locale"""
    locale = request.args.get('locale')
    if locale and locale in app.config['LANGUAGES']:
        return locale
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/', methods=['GET'], strict_slashes=False)
def index():
    """index page"""
    return render_template('4-index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000', debug=True)
