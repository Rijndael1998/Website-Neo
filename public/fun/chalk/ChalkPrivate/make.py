import glob
import os


def classFinder(path):
    cls = []
    for p in glob.glob(path + "/*"):
        p = p.replace("\\", "/")  # because windows
        if os.path.isdir(p):
            for x in classFinder(p):
                cls.append(x)

        else:
            cls.append(p)

    return cls


print("Attempting to find classes")
classes = classFinder("Resources/Scripts/Class")
classes.sort() #Smallest first

for x in classFinder("Resources/Scripts/Library"):
    classes.append(x)

for x in classFinder("Resources/Scripts/Levels"):
    classes.append(x)



classes.append("Resources/Scripts/sketch.js")

print("Found: ")
for x in classes:
    print("   ", x)

print()
print("Making loader.js file")

template = open("Resources/Scripts/loader.js.template")
fd = template.read().replace("<!-- ARRAY -->", str(classes))
template.close()

print("Writing loader.js file")

fineJS = open("Resources/Scripts/loader.js", "w")
fineJS.write(fd)
fineJS.close()

print("Now making html files")

htmlTemplateFile = open("default_debug_prod.html.template")
htmlTemplate = htmlTemplateFile.read()
htmlTemplateFile.close()

optLib = "Resources/Scripts/OptLibrary/"

htmlDebug = htmlTemplate.replace("<!--P5-->", optLib + "p5.min.js")
htmlDebug = htmlDebug.replace("<!--TYPE-->", "DEBUG")

htmlProd = htmlTemplate.replace("<!--P5-->", optLib + "p5.js")
htmlProd = htmlProd.replace("<!--TYPE-->", "PRODUCTION")

htmlDebugFile = open("debug.html", "w")
htmlDebugFile.write(htmlDebug)
htmlDebugFile.close()

htmlProdFile = open("production.html", "w")
htmlProdFile.write(htmlProd)
htmlProdFile.close()

print("Html files done")
