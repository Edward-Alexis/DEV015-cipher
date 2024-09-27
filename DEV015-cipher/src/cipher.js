const cipher = {
  encode: function (offset, string) {
      let result = '';
      for (let i = 0; i < string.length; i++) {
          let charCode = string.charCodeAt(i);
          if (charCode >= 65 && charCode <= 90) {
              result += String.fromCharCode(((charCode - 65 + offset) % 26) + 65);
          } else {
              result += string[i];
          }
      }
      return result;
  },

  decode: function (offset, string) {
      return this.encode(26 - offset, string);
  }
};

export default cipher;
