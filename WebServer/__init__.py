from flask import Flask, g, request, Response, make_response, session
from flask import render_template, Markup, url_for
from datetime import datetime, date, timedelta
from dateutil.relativedelta import relativedelta

app = Flask(__name__)
app.debug = True

@app.route("/")
def helloworld():
  return render_template('app.html')