# Spursimplot.py
# 2017-02-21
# Tobias Nteireho
# Demonstrates pyplot
# Plots generated simulated spur data
# Tested with python 2.7.9

import matplotlib.pyplot as plt
import numpy as np
import random
import os
import re

#Color code temperatures
tempcolors = {-30:"navy", 0:"skyblue", 25:"g", 45: "r"}

files = os.listdir("./")

regex = r'(\d+)_DUT(\d+)_(-?\d*)_(\d+\.?\d*)_(\d+\.?\d*)'

for f in files:
	
	if (f.endswith(".tab")):
		print "Plotting %s" %(f)
		trace = np.loadtxt(f, delimiter='\t')
		curve = trace[:, 1]
		freq = trace[:, 0]
		condition, DUT, temp, V1, V2 = re.findall(regex, f)[0]
		condition = int(condition)
		DUT = int(DUT)
		temp = int(temp)
		V1 = float(V1)
		V2 = float(V2)
		
		
	
		fig = plt.gcf()
	
		plt.plot(freq/1e6, curve, color=tempcolors[temp])
		plt.ylabel("Amplitude (dBm)")
		plt.xlabel("Frequency, MHz")
		plt.title("Spurs DUT=%s, %iC, V1=%1.1fV V2=%1.1fV"
					% (DUT, temp, V1, V2))
		
		plt.grid(True)
		plt.draw()
		fig.savefig("Spurs %4i_DUT%i_%i_%2.2f_%2.2f.png" % (condition, DUT, temp, V1, V2), dpi=300)
		plt.close(fig)
