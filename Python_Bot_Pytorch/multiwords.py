bag_of_negative_words = [' khong ', ' không ', ' đừng ']
bag_of_connect_words = [', ', '. ', ' và ', ' với ', ' cùng ',' nhưng ',' hoặc ', ' hoac ' ,' ; ',' vs ',' & ']
bag_of_positive_words = [' nói ',' về ',' muốn ',' cho ',' đưa ',' hiện ',' hỏi ',' biết ',' biêt ',' biet ']
bag_of_me = [' tôi ', ' tớ ', ' mình ', ' tui ', ' tao ']
bag_of_compound = bag_of_connect_words + bag_of_negative_words

def multiSentences(msg):
    for word in bag_of_me:
        if word in msg:
            msg = msg.replace(word, "")
    compound = False
    for word in bag_of_compound:
        if word in msg:
            compound = True
    if compound == False:
        return msg
    else:
        fresults = []
        tmp = []
        fresults1 = []
        fresults2 = []
        fresults3 = []
        for word in bag_of_negative_words:
            if word in msg:
                msg = msg.replace(word, "$#$!&")
        arrStr = msg.split("$#$")
        for element in arrStr:
            if "!&" not in element:
                fresults.append(element)
            else:
                tmp.append(element)

        for word in bag_of_connect_words:
            fresults = [w.replace(word, "@!@") for w in fresults]
        for element in fresults:
            fresults1 = element.split("@!@")
        for word in bag_of_positive_words:
            fresults1 = [w.replace(word, "") for w in fresults1]
        for element in fresults1:
            if element != "" and element != " ":
                fresults2.append(element)
        for element in fresults2:
            fresults3.append(element.strip())
        #print(fresults3)
        #Done with postive side
        #----------------------------------------------------------------#

        subresults1 = []
        subresults2 = []
        subresults3 = []
        for word in bag_of_positive_words:
            tmp = [w.replace(word, "*^*") for w in tmp]
        for word in bag_of_connect_words:
            tmp = [w.replace(word, "%$%$") for w in tmp]
        for element in tmp:
            subresults1.append(element.split("%$"))
        for element in subresults1:
            for elem in element:
                if elem != "" and elem != " ":
                    subresults2.append(elem)
        i = 0
        #print(subresults2)
        while i < len(subresults2):
            if i-1 == -1:
                if "!&" not in subresults2[i]:
                    subresults3.append(subresults2[i])
            else:
                if "*^*" in subresults2[i]:
                    if "!&" not in subresults2[i]:
                        subresults3.append(subresults2[i])
                else:
                    if "!&" not in subresults2[i] and subresults2[i-1] in subresults3:
                        subresults3.append(subresults2[i])
            i+=1
        #print(subresults3)
        #Done with negative side
        #----------------------------------------------------------------#

        semiresults1 = fresults3 + subresults3
        semiresults2 = []
        semiresults3 = []
        finalresults = []
        for element in semiresults1:
            if element != "" and element != " ":
                semiresults2.append(element)
        for element in semiresults2:
            if "*^*" not in element:
                semiresults3.append(element)
            else:
                semiresults3.append(element.replace("*^*", ""))
        for element in semiresults3:
            finalresults.append(element.strip())

        #print( finalresults )
        return finalresults

#multiSentences("tôi muốn biết điểm khối a, khối b")




