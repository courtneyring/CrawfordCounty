import glob,os


def main():
    
    outputFile=open("timeline.json", 'w')
    
    outputFile.write("[")
    
    for file in glob.glob("*.jpg"):
        title=file.replace("-"," ").replace(".jpg","")
        title=title.title()
        outputFile.write("{badgeClass: 'info', title: '" + title + "', image: '"+file+"'},")

    outputFile.write("]")


if __name__ == "__main__":
    main()
