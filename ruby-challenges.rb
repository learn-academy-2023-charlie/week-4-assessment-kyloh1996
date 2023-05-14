# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'
#declare the variable with the number being the param
def is_Even_or_Odd(number)
#math that determines if number is even
  if number % 2 == 0
    return "#{number} is even"
  else
    return "#{number} is odd"
  end
# every def and if have an end
end
# Refactored using ternary operators: 

def is_Even_or_Odd(number)
    number % 2 == 0 ? "#{number} is even" : "#{number} is odd"
  end

  p is_Even_or_Odd(reposts1)
  p is_Even_or_Odd(reposts2)
  p is_Even_or_Odd(reposts3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'
#remove vowels from string 
# declare variable with string as param

def remove_vow(str)
#need to iterate through the string im thinking of regex (/[aeiou]/ig,'')
    if str =~ /[aeiou]/i #it didnt like the 'g', found out =~ is a comparison operator, used to match a given expression eg./'test'/ top your variable(s).
       " #{str} contains a vowel"
    else
        "#{str} does not contain a vowel"
    end
end

p remove_vow(beatles_album1)

#The regex works so now Im going to remove the vowels. didnt need to use regex. found .delete and .gsub on the site provided

def no_vowel_str(str)
    return str.delete('aeiouAEIOU')
  end
  
p no_vowel_str(beatles_album1)

def remove_all_vowels(str)
    return str.gsub(/[aeiou]/i, '')
  end
  p no_vowel_str(beatles_album2)


  #can I create a class for the variable so that I only input once and return all three?

  class Tester
    def initialize(beatles_album1, beatles_album2, beatles_album3)
      @beatles_album1 = beatles_album1
      @beatles_album2 = beatles_album2
      @beatles_album3 = beatles_album3
    end
  
    def tester_vow(str)
      return str.gsub(/[aeiou]/i, '')
    end
  end
  
  tester = Tester.new("Rubber Soul", "Sgt Pepper", "Abbey Road")
  
  puts tester.tester_vow('test')
  

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# class Palindeoms 
#     def initialize(test_case1, test_case2, test_case3)
#         @test_case1 = test_case1
#         @test_case2 = test_case2
#         @test_case3 = test_case3
#     end

    def is_pal_or_no(str)
        if str.downcase == str.downcase.reverse
            "#{str} is a palindrome"
        else
            "#{str} is not a palindrome"
        end
    end

    puts is_pal_or_no(palindrome_test_case1)
    puts is_pal_or_no(palindrome_test_case2)
    puts is_pal_or_no(palindrome_test_case3)
# palindrome_test = Palindeoms.new("Racecar", "LEARN", "Rotator")

# I couldnt get it to return all at once like the last question....

class Pali
    def initialize(*strings) #Learned what a splat operater is. Alows you to input multiple things
        @strings = strings
    end

    def to_pali_or_not_to_pali
        @strings.map do |string|
            if string.downcase == string.downcase.reverse  #i forgot about capitolization :P
                "#{string} is a palindrome"
              else
                "#{string} is not a palindrome"
              end
            end
          end
        end

        pali_test = Pali.new("Racecar", "LEARN", "Rotator")

puts pali_test.to_pali_or_not_to_pali