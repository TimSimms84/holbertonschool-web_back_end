#!/usr/bin/env python3
"""basic flask app"""

import babel
from flask import Flask, render_template, request, g
from flask_babel import Babel

app = Flask(__name__)
babel = Babel(app)
users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


class Config(object):
    """Config class"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app.config.from_object(Config)


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
    return render_template('5-index.html')


@app.before_request
def before_request():
    """before request"""
    user = get_user()
    if user:
        g.user = user


def get_user():
    """get user"""
    try:
        user_id = int(request.args.get('login_as'))
    except Exception:
        return None
    return users.get(user_id)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000', debug=True)
