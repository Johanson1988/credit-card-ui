export const OnlyNumbersKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!['0','1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Delete'].includes(e.key)) {
      e.preventDefault();
    }
}

export const checkLength = (length: Number, maxlength : Number) =>
    length !== maxlength ? false : true;