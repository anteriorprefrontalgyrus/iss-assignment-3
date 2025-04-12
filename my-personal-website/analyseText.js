function analyzeText() {
    document.getElementById('resultContainer').style.display = 'block';
    const text = document.getElementById('textInput').value;
    let resultHTML = '';
  
    // Count letters, words, spaces, newlines and special symbols
    const letters = text.replace(/[^A-Za-z]/g, '').length;
    const wordsArray = text.trim().split(/\s+/).filter(Boolean);
    const words = wordsArray.length;
    const spaces = (text.match(/ /g) || []).length;
    const newlines = (text.match(/\n/g) || []).length;
    const specialSymbols = text.replace(/[A-Za-z0-9 \n]/g, '').length;
  
    resultHTML += `<h3>General Counts:</h3>
                   <pre style="font-family: 'Taviraj', sans-serif;">
  Letters         : ${letters}
  Words           : ${words}
  Spaces          : ${spaces}
  Newlines        : ${newlines}
  Special Symbols : ${specialSymbols}
                   </pre>`;
  
    // Define word groups
    const pronouns = ["i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them"];
    const prepositions = [
      "about", "above", "across", "after", "against", "along", "among", "around", "at", "before",
      "behind", "below", "beneath", "beside", "between", "beyond", "by", "despite", "down", "during",
      "except", "for", "from", "in", "inside", "into", "like", "near", "of", "off", "on", "onto",
      "out", "outside", "over", "past", "regarding", "since", "through", "throughout", "to", "toward",
      "under", "underneath", "until", "up", "upon", "with", "within", "without"
    ];
    const indefiniteArticles = ["a", "an"];
  
    // Tokenize
    const tokens = text.toLowerCase().split(/\s+/).filter(Boolean)
      .map(token => token.replace(/[^a-z]/g, ''));
  
    // Count words
    const pronounCount = Object.fromEntries(pronouns.map(p => [p, 0]));
    const prepositionCount = Object.fromEntries(prepositions.map(p => [p, 0]));
    const articleCount = Object.fromEntries(indefiniteArticles.map(a => [a, 0]));
  
    tokens.forEach(token => {
      if (pronounCount.hasOwnProperty(token)) pronounCount[token]++;
      if (prepositionCount.hasOwnProperty(token)) prepositionCount[token]++;
      if (articleCount.hasOwnProperty(token)) articleCount[token]++;
    });
  
    // Formatter to show count > 0 only
    function formatCounts(obj) {
      return Object.entries(obj)
        .filter(([_, count]) => count > 0)
        .map(([word, count]) => `${word} : ${count}`)
        .join('\n') || '—';
    }
  
    // Append to resultHTML with Taviraj font style
    resultHTML += `<h3>Pronoun Counts:</h3><pre style="font-family: 'Taviraj', sans-serif;">${formatCounts(pronounCount)}</pre>`;
    resultHTML += `<h3>Preposition Counts:</h3><pre style="font-family: 'Taviraj', sans-serif;">${formatCounts(prepositionCount)}</pre>`;
    resultHTML += `<h3>Indefinite Articles Counts:</h3><pre style="font-family: 'Taviraj', sans-serif;">${formatCounts(articleCount)}</pre>`;
  
    // Display
    document.getElementById('result').innerHTML = resultHTML;
  }
  