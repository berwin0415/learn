//30. 串联所有单词的子串

// 递归方式  大量数据时存在内存溢出问题
const findSubstring = (s, words) => {
    if (!s || words.length === 0) return [];
    let combinedWords = []
    const num = words.length;
    const findWordsCombine = (range, _arr) => {
        return range.length === num ? combinedWords.push(range) : _arr.forEach((item, index) => {
            const temp = [..._arr];
            temp.splice(index, 1)
            findWordsCombine(range.concat(item), temp)
        });
    }
    findWordsCombine([], words)
    return Array.from(new Set(combinedWords.reduce((last, item) => {
        const findStartIndex = (str, target) => {
            const idxs = [];
            let position = str.indexOf(target);
            while (position > -1) {
                idxs.push(position);
                position = str.indexOf(target, position + 1);
            }
            return idxs
        }
        return [...last, ...findStartIndex(s, item.join(""))]
    }, []).filter(item => item != -1)))
};

const findSubstring = (s, words) => existStrIdx(s, words, words.length > 0 ? words[0].length : 0)

const existStrIdx = (s, words, len) => {
    let result = []
    if (len) {
        const wordsLen = len * words.length;
        const wordsMap = initWordsMap(words);
        for (let i = 0; i <= s.length - wordsLen; i++) {
            const subs = s.substr(i, wordsLen);
            initStringMap(subs, len, wordsMap)
            if (compare(wordsMap)) {
                result.push(i)
            }
        }

    }
    return result
}
const initWordsMap = words => {
    let map = {}
    for (let word of words) {
        if (map[word]) {
            map[word].count += 1
        } else {
            map[word] = { count: 1 }
        }
    }
    return map
}
const initStringMap = (s, len, wordsMap) => {
    for (let i = 0; i < s.length; i += len) {
        let field = s.substr(i, len)
        if (wordsMap[field]) {
            if (wordsMap[field].nowCount) {
                wordsMap[field].nowCount += 1
            } else {
                wordsMap[field].nowCount = 1
            }
        }
    }
}
const compare = (wordsMap) => {
    const keys = Object.keys(wordsMap);
    let lock = true
    for (let i = 0; i < keys.length; i++) {
        const { count, nowCount } = wordsMap[keys[i]];
        wordsMap[keys[i]].nowCount = 0;
        if (count != nowCount) {
            lock = false
        }
    }
    return lock
}



// const test1 = findSubstring("barfoothefoobarman", ["foo","bar"])
// const test2 = findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"])
const test3 = findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"])
// const test4 = findSubstring("foobarfoobar", ["foo","bar"])
// const test5 = findSubstring("pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel", ["dhvf", "sind", "ffsl", "yekr", "zwzq", "kpeo", "cila", "tfty", "modg", "ztjg", "ybty", "heqg", "cpwo", "gdcj", "lnle", "sefg", "vimw", "bxcb"])
// console.log(test1)
// console.log(test2)
console.log(test3)
// console.log(test4)
// console.log(test5)