class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        paragraph = paragraph.lower()
        paragraph = re.sub("[!?',;.]", ' ', paragraph)
        paragraph_list = paragraph.split(" ")
        words = []
        for text in paragraph_list:
            if text in banned or text == '':
                continue
            else:
                words.append(text)
        counts = collections.Counter(words)
        return counts.most_common(1)[0][0]