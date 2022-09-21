#!/usr/bin/env python3
""" handles all routes for the views for Session authentication """
from api.v1.views import app_views
from flask import abort, jsonify, request
from models.user import User
from os import getenv


@app_views.route('/auth_session/login', methods=['POST'], strict_slashes=False)
def auth_login() -> str:
    """ view for route /auth_session/login, method POST """
    u_email = request.form.get('email')
    if not u_email:
        return jsonify({"error": "email missing"}), 400
    u_password = request.form.get('password')
    if not u_password:
        return jsonify({"error": "password missing"}), 400
    user = User.search({'email': u_email})
    if not user:
        return jsonify({"error": "no user found for this email"}), 404
    for u in user:
        if u.is_valid_password(u_password):
            from api.v1.app import auth
            session_id = auth.create_session(u.id)
            user_json = jsonify(u.to_json())
            user_json.set_cookie(getenv('SESSION_NAME'), session_id)
            return user_json
        else:
            return jsonify({"error": "wrong password"}), 401


@app_views.route('/auth_session/logout', methods=['DELETE'],
                 strict_slashes=False)
def logout() -> str:
    """
    If the request is equal to None, return False
    If the request doesn’t contain the Session ID cookie, return
    False - you must use self.session_cookie(request)
    If the Session ID of the request is not linked to
    any User ID, return False - you must use self.user_id_for_session_id(...)
    Otherwise, delete in self.user_id_by_session_id the Session ID
    (as key of this dictionary) and return True
    """
    from api.v1.app import auth
    destroy_session = auth.destroy_session(request)
    if destroy_session is False:
        abort(404)
    else:
        return jsonify({}), 200
