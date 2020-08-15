#!/usr/bin/python3
import sys

inf = open(sys.argv[1], "r")
outf = open(sys.argv[2], "w")

outstring = "<div class=\"essay\">\n"

lines = inf.read().replace('\ufeff', '').split('\n')
for line in lines:
    if line == '':
        outstring += "<br>\n"
    else:
        outstring += "<p>\n"
        outstring += line + "\n"
        outstring += "</p>\n"

outstring += "</div>\n"

outf.write(outstring)
