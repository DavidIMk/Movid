const anagram = (inputs) => {
    const isAnagram = (str1, str2) => {
      if (str1 === str2) {
        return true;
      }
  
      let srt1Length = str1.length;
      let srt2Length = str2.length;
  
      if (srt1Length !== srt2Length) {
        return false;
      }
  
      var counts = {};
  
      for (let i = 0; i < srt1Length; i++) {
        let index = str1.charCodeAt(i) - 97;
        counts[index] = (counts[index] || 0) + 1;
      }
  
      for (let j = 0; j < srt2Length; j++) {
        let index = str2.charCodeAt(j) - 97;
        if (!counts[index]) {
          return false;
        }
        counts[index]--;
      }
  
      return true;
    };
  
    const map = {};
  
    for (let i = 0; i < inputs.length; i++) {
      let anagramExist = false;
      for (let key in map) {
        if (isAnagram(inputs[i], map[key][0])) {
          map[key].push(inputs[i]);
          anagramExist = true;
        }
      }
      if (!anagramExist) {
        map[inputs[i]] = [inputs[i]];
      }
    }
  
    return Object.values(map);
  };
  
  console.log(
    anagram(["kita", "atik", "tika", "aku", "kua", "makan", "kia"]) // [["kita", "atik", "tika"], ["aku", "kua"], ["makan"], ["kia"]]
  );
  