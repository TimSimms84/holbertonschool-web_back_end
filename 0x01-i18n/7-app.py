#!/usr/bin/env python3
"""Basic Flask App"""


from flask import Flask, render_template, request, g
from flask_babel import Babel
from pytz import timezone, UnknownTimeZoneError


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
    LANGUAGES = ['en', 'fr']
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app.config.from_object(Config)


def get_user():
    """Get user from request"""
    user_id = request.args.get('login_as')
    try:
        return users.get(int(user_id))
    except Exception:
        return None


@app.before_request
def before_request():
    """Before request to stash user"""
    g.user = get_user()


@babel.localeselector
def get_locale():
    """Locale selector"""
    locale = request.args.get('locale')
    if locale and locale in Config.LANGUAGES:
        return locale
    try:
        if g.user['locale'] in Config.LANGUAGES:
            return g.user['locale']
    except Exception:
        return request.accept_languages.best_match(Config.LANGUAGES)


@app.route('/', methods=['GET'], strict_slashes=False)
def index():
    """Index page"""
    return render_template('6-index.html')


@babel.timezoneselector
def get_timezone():
    """Timezone selector to determine timezone"""
    localTimezone = request.args.get('timezone')
    if localTimezone:
        try:
            timezone(localTimezone)
            return localTimezone
        except UnknownTimeZoneError:
            localTimezone = app.config['BABEL_DEFAULT_TIMEZONE']
    if g.user:
        localTimezone = g.user.get('timezone')
        if localTimezone:
            try:
                timezone(localTimezone)
                return localTimezone
            except UnknownTimeZoneError:
                localTimezone = app.config['BABEL_DEFAULT_TIMEZONE']
    return localTimezone


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
