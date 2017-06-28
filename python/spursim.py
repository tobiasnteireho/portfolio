# Spursim.py
# 2017-02-21
# Tobias Nteireho
# Generates tone curves with piecewise inverse function and
# saves to tab file
# Tested with python 2.7.9

import matplotlib.pyplot as plt
import numpy as np
import random

random.SystemRandom()
points = 1000
nf = 80

noise = 3 * np.random.rand(points) - 3

tempcolors = {-30:"navy", 0:"skyblue", 25:"g", 45: "r"}

#spurs as measured above noise floor
spurs = np.zeros(points) - 0

#noise = random.random(100)
DUTs= (123, 34, 170, 555, 921)
temps = (-30, 0, 25, 45)
V1s = (4.9, 5, 5.1)
V2s = (4.9, 5, 5.1)

A = 100
B = 20
S = 20

condition = 0

for temp in temps:
    for DUT in DUTs:
        for V1 in V1s:
            for V2 in V2s:
                St = S*((temp+273.15)/300)
                tone = np.concatenate((A/(B+St*np.linspace(100,0,points/2)),
                                A/(B+St*np.linspace(0,100,points/2))))
                tone = (tone -5)*21
                
                if (V1 == 4.9):
                    spurs[points/2+20] = 20
                else:
                	spurs[points/2+20] = 0

                curve = tone + noise + spurs
                freq = np.linspace(100e6, 120e6, points)
                np.savetxt("Spurs %4i_DUT%i_%i_%2.2f_%2.2f.tab"
                            % (condition, DUT, temp, V1, V2),
                            zip(freq, curve),
                            fmt = '%s', delimiter='\t')

                condition = condition+1
