from flask import Flask, g, request, Response, make_response, session
from flask import render_template, Markup, url_for
from datetime import datetime, date, timedelta
from dateutil.relativedelta import relativedelta
from flask_cors import CORS
from flask_restful import Resource,reqparse,Api
from WebServer import rest
import json
import pymysql

app = Flask(__name__)
app.debug = True

CORS(app)

@app.route("/api/insert",methods=['POST'])
def insertContent():
  value = request.form['input']
  return value

@app.route("/api/test",methods=['GET'])
def getAllUser():
  return rest.getAllUsers()


@app.route("/")
def helloworld():
  return render_template('app.html')



