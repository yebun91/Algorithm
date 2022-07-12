class Solution(object):
    def isPalindrome(self, s):
        strings = []
        for char in s :
            if char.isalnum():
              strings.append(char.lower())
        while len(strings) > 1:
            if strings.pop(0) != strings.pop():
              return False
        return True
        
        