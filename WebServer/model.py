import json
import pymysql
from WebServer import db

def user_handler(obj):
  return obj.isoformat() if hasattr(obj,'isoformat') else obj

# def getAllUsers():
#   conn = getConnection()
#   curs = conn.cursor(pymysql.cursors.DictCursor)
#   sql = "SELECT userID,nickname,email,contribution FROM User;"
#   curs.execute(sql)
#   rows = curs.fetchall()
#   conn.close()
#   return json.dumps(rows, default = user_handler)

def getAllUsers():
  conn = db.getConnection()
  curs = conn.cursor()
  sql = "SELECT userID,nickname,email,contribution FROM User;"
  curs.execute(sql)
  result = curs.fetchall()
  conn.close()
  return result

def getTeamName():
  conn = db.getConnection()
  curs = conn.cursor()
  sql = "SELECT TeamName FROM Team WHERE id = 2;"
  curs.execute(sql)
  result = curs.fetchall()
  conn.close()
  return result

def getProjects(projectIdx):
  conn = db.getConnection()
  curs = conn.cursor(pymysql.cursors.DictCursor)
  sql = "SELECT *  FROM Project WHERE id = %s"
  curs.execute(sql,(projectIdx))
  rows = curs.fetchall()
  conn.close()
  return json.dumps(rows, default = user_handler)
