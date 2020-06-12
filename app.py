from flask import Flask, render_template, request
import json
import time
import RPi.GPIO as io # using RPi.GPIO

left_pin = 10
right_pin = 8
STOP = 0

def setup_GPIO():
	print("Setting up GPIO...")
	io.setmode(io.BOARD)
	io.setup(left_pin,io.OUT, initial=io.LOW)
	io.setup(right_pin,io.OUT, initial=io.LOW)
	print("Done setting up!")

def move(sec, pin, value):
	print("Moving " + str(pin) + " for " + str(sec) + " seconds")
	drive_time(sec, pin, value)
	drive_motor(pin, STOP)
	print("Done moving!")

def drive_time(sec, pin, value):
	io.output(pin, value)
	time.sleep(sec)

def drive_motor(pin, value):
	io.output(pin,value)

def run_task(str):
	exec(str)

def forward(sec, power): 
	print("Driving forwards with " + str(power) + " power for " + str(sec) + " seconds!")
	drive_motor(left_pin, power) 
	drive_motor(right_pin, power)
	time.sleep(sec)
	print("Stopping...")
	drive_motor(left_pin, STOP)
	drive_motor(right_pin, STOP)

def backward(sec, power): 
	print("Driving backwards with " + str(power) + " power for " + str(sec) + " seconds!")
	drive_motor(left_pin, -power) 
	drive_motor(right_pin, -power)
	time.sleep(sec)
	print("Stopping...")
	drive_motor(left_pin, STOP)
	drive_motor(right_pin, STOP)

def turnRight(sec, power): 
	print("Driving backwards with " + str(power) + " power for " + str(sec) + " seconds!")
	drive_motor(left_pin, power) 
	drive_motor(right_pin, -power)
	time.sleep(sec)
	print("Stopping...")
	drive_motor(left_pin, STOP)
	drive_motor(right_pin, STOP)

def turnLeft(sec, power): 
	print("Driving backwards with " + str(power) + " power for " + str(sec) + " seconds!")
	drive_motor(left_pin, -power) 
	drive_motor(right_pin, power)
	time.sleep(sec)
	print("Stopping...")
	drive_motor(left_pin, STOP)
	drive_motor(right_pin, STOP)


setup_GPIO()
app = Flask(__name__)

@app.route('/main.html')
def index():
    return render_template('main.html')

@app.route('/')
def main():
    return render_template('index.html')
    
@app.route('/robot.py', methods=["GET","POST"])
def robot():
	print(request.form['run'])
	run_task(request.form['run'])
	return "Sent"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
