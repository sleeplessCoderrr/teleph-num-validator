# Telephone Number Validator

## Overview

This project is a Telephone Number Validator that verifies if a given US phone number is valid based on various formats. The validator checks multiple formats of phone numbers and provides feedback to the user about the validity of the entered phone number.

## Objective

Build an app that is functionally similar to [this example](https://telephone-number-validator.freecodecamp.rocks).

## Valid Formats

Examples of valid formats for US phone numbers include:

- 1 555-555-5555
- 1 (555) 555-5555
- 1(555)555-5555
- 1 555 555 5555
- 5555555555
- 555-555-5555
- (555)555-5555

Note that the area code is required. Also, if the country code is provided, you must confirm that the country code is 1.

## Invalid Formats

Examples of invalid formats for US phone numbers include:

- 555-5555
- 5555555
- 1 555)555-5555
- 123**&!!asdf#
- 55555555
- (6054756961)
- 2 (757) 622-7382
- 0 (757) 622-7382
- -1 (757) 622-7382
- 2 757 622-7382
- 10 (757) 622-7382
- 27576227382
- (275)76227382
- 2(757)6227382
- 2(757)622-7382
- 555)-555-5555
- (555-555-5555
- (555)5(55?)-5555
- 55 55-55-555-5
- 11 555-555-5555

## Example Usage

1. Enter `1 555-555-5555` in the input field and click "Check".
2. The result should display "Valid US number: 1 555-555-5555".
3. Enter `555-5555` in the input field and click "Check".
4. The result should display "Invalid US number: 555-5555".

## Conclusion

This project demonstrates the use of JavaScript for input validation and DOM manipulation, providing a practical example of handling user input and giving feedback based on specified validation rules. Enjoy coding and feel free to enhance the project with additional features and styles!
