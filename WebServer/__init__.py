from flask import Flask, g, request, Response, make_response, session
from flask import render_template, Markup, url_for
from datetime import datetime, date, timedelta
from dateutil.relativedelta import relativedelta
from flask_cors import CORS
from flask_restful import Resource,reqparse,Api
from WebServer import db
import json
import pymysql

app = Flask(__name__)
app.debug = True

CORS(app)

@app.route("/api/insert",methods=['POST'])
def insertContent():
  value = request.form['input']
  return value

# @app.route("/project/<projectIdx>",methods=['GET'])
# def showProjects(projectIdx):
#   projectIdx = request.form['projectIdx']
#   return db.getProjects(projectIdx)

@app.route("/users",methods=['GET'])
def getAllUser():
  result = db.getAllUsers()
  return render_template('Board.html',data_list=result)


@app.route("/")
def helloworld():
  return render_template('index.html')



