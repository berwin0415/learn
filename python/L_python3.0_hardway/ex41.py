import random
from urllib.request import urlopen
import sys

WORD_URL = "http://learncodethehardway.org/words.txt"
WORDS = []

PHRASES = {
    "class %%%(%%%)": "Make a class named %%% that is-a %%%",
    "class %%%(object): \n\tdef __init__(self, ***)": "class %%% has-a __init__ that takes self and *** params.",
    "class %%%(object): \n\tdef ***(self, @@@)": "class %%% has-a function *** that takes self and @@@ params.",
    "*** = %%%()": "Set *** to an instance of class %%%",
    "***.***(@@@)": "From *** get the *** function, call it with params self, @@@",
    "***.*** = '***'": "From *** get the *** attribute and set it to '***'."
}

if len(sys.argv) == 2 and sys.argv[1] == 'english':
    PHRASES_FIRST = True
else:
    PHRASES_FIRST = False

for word in urlopen(WORD_URL).readlines():
    print(word, word.strip(), str(word.strip(), encoding="utf-8"))
    WORDS.append(str(word.strip(), encoding="utf-8"))


def convert(snippet, phrase):
    # sample(序列a，n) 从序列a中随机抽取n个元素，并将n个元素生以list形式返回。
    # capitalize() 将字符串的第一个字母变成大写,其他字母变小写。
    # count() 方法用于统计字符串里某个字符出现的次数。
    class_name = [w.capitalize()
                  for w in random.sample(WORDS, snippet.count("%%%"))]
    other_names = random.sample(WORDS, snippet.count("***"))
    results = []
    param_names = []

    for i in range(0, snippet.count("@@@")):
        # random.randint(a,b)：用于生成一个指定范围内的整数。其中参数a是下限，参数b是上限，生成的随机数n：a<=n<=b
        param_count = random.randint(1, 3)
        param_names.append(', '.join(random.sample(WORDS, param_count)))
    # ，表示遍历两个列表
    for sentence in snippet, phrase:
        result = sentence[:]

        for word in class_name:
            result = result.replace("%%%", word, 1)

        for word in other_names:
            result = result.replace('***', word, 1)

        for word in param_names:
            result = result.replace("@@@", word, 1)

        results.append(result)

    return results

try:
    while True:
        # keys 返回一个字典的所有键
        # list 方法用于将元组转换为列表
        snippets = list(PHRASES.keys())
        # random() 方法返回随机生成的一个实数，它在[0,1)范围内。
        # shuffle() 方法将序列的所有元素随机排序。
        random.shuffle(snippets)

        for snippet in snippets:
            phrase = PHRASES[snippet]
            question, answer = convert(snippet, phrase)
            if PHRASES_FIRST:
                question, answer = answer, question

            print(question)

            # input("> ")
            print(f"ANSWER: {answer}\n\n")
except EOFError:
    print("\nBye")
