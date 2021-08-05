import flask

my_website=flask.Flask(__name__)

@my_website.route("/")
def my_index_page():
    message="Login Here"
    return flask.render_template("login.html",message2=message)

@my_website.route("/newuser")
def my_new_user_page():
    return flask.render_template("newuserregister.html")

@my_website.route("/registeruser",methods=['post'])
def my_user_register_page():
    entered_username=flask.request.form.get("username")
    entered_password=flask.request.form.get("password")
    entered_email=flask.request.form.get("email")
    entered_email=entered_email.lower()
    entered_location=flask.request.form.get("location")
    
    import sqlite3

    con=sqlite3.connect("My_Database.sqlite3") #database connect & database create
    cur=con.cursor()   #to excute queries like insert,update,delete,select
    my_table_query="create table if not exists usertable(name varchar(50),password varchar(50),email varchar(50),location varchar(50))"
    cur.execute(my_table_query)
    cur.execute(f"select email from usertable where email='{entered_email}'")
    result=cur.fetchone()
    if result !=None:
        message="Email Already Registered! Try to Login"
        return flask.render_template("login.html", message2=message)
    else:
        my_insert_query=f"insert into usertable values('{entered_username}','{entered_password}','{entered_email}','{entered_location}')"
        cur.execute(my_insert_query)
        con.commit()

    return "Successfully Registered"


@my_website.route("/validateuser", methods=["post"])
def my_validate_user():
    entered_email=flask.request.form.get("email1")
    entered_password=flask.request.form.get("password1")
    entered_email=entered_email.lower()

    import sqlite3
    con= sqlite3.connect("My_Database.sqlite3")
    cur=con.cursor()
    cur.execute(f"select * from usertable where email='{entered_email}' and password='{entered_password}'")
    
    result = cur.fetchone()


    if result == None:
        message="Please Enter Valid Login Details!"
        return flask.render_template("login.html",message2=message)
    else:
        return "Welcome User"
    
        
        
if __name__=="__main__":
    my_website.run(debug=True)
    