
/*
Tipue Search 6.1
Copyright (c) 2017 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/

/* Modified for Myt Website: 2018/05/29 */

/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"];


// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'tip', 'replace_with': 'tipue'},
     {'word': 'javscript', 'replace_with': 'javascript'},
     {'word': 'jqeury', 'replace_with': 'jquery'}
]};


// Weighting

var tipuesearch_weight = {'weight': [
     {'url': 'http://www.tipue.com', 'score': 20},
     {'url': 'http://www.tipue.com/search', 'score': 30},
     {'url': 'http://www.tipue.com/is', 'score': 10}
]};


// Illogical stemming

var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'}
]};


// Related searches

var tipuesearch_related = {'searches': [
     {'search': 'tipue', 'related': 'Tipue Search'},
     {'search': 'tipue', 'before': 'Tipue Search', 'related': 'Getting Started'},
     {'search': 'tipue', 'before': 'Tipue', 'related': 'jQuery'},
     {'search': 'tipue', 'before': 'Tipue', 'related': 'Blog'}
]};


// Internal strings

var tipuesearch_string_1 = 'No title';
var tipuesearch_string_2 = 'Showing results for';
var tipuesearch_string_3 = 'Search instead for';
var tipuesearch_string_4 = '1 result';
var tipuesearch_string_5 = 'results';
var tipuesearch_string_6 = 'Back';
var tipuesearch_string_7 = 'More';
var tipuesearch_string_8 = 'Nothing found.';
var tipuesearch_string_9 = 'Common words are largely ignored.';
var tipuesearch_string_10 = 'Search too short';
var tipuesearch_string_11 = 'Should be one character or more.';
var tipuesearch_string_12 = 'Should be';
var tipuesearch_string_13 = 'characters or more.';
var tipuesearch_string_14 = 'seconds';
var tipuesearch_string_15 = 'Searches related to';


// Internals


// Timer for showTime

var startTimer = new Date().getTime();

// MyT Changes:2018/05/29: List of pages to search: Localhost
var tipuesearch_pages = ["http://localhost:8080/MYT_Website/","http://localhost:8080/MYT_Website/aboutus.html",
                         "http://localhost:8080/MYT_Website/academiccom.html","http://localhost:8080/MYT_Website/announcements.html",
                         "http://localhost:8080/MYT_Website/choir.html","http://localhost:8080/MYT_Website/communicationscom.html",
                         "http://localhost:8080/MYT_Website/congregation.html","http://localhost:8080/MYT_Website/events.html",
                         "http://localhost:8080/MYT_Website/financecom.html","http://localhost:8080/MYT_Website/footer.html",
                         "http://localhost:8080/MYT_Website/gallery.html","http://localhost:8080/MYT_Website/healthcom.html",
                         "http://localhost:8080/MYT_Website/ministries.html","http://localhost:8080/MYT_Website/mytcmm.html",
                         "http://localhost:8080/MYT_Website/mytcwl.html","http://localhost:8080/MYT_Website/mytcwm.html",
                         "http://localhost:8080/MYT_Website/mytcym.html","http://localhost:8080/MYT_Website/mytyouth.html",
                         "http://localhost:8080/MYT_Website/outreachcom.html","http://localhost:8080/MYT_Website/privacy.html",
                         "http://localhost:8080/MYT_Website/scripture.html","http://localhost:8080/MYT_Website/wards.html"];

//MyT Changes:2018/05/29: List of pages to search: Github
/*var tipuesearch_pages = ["https://magags.github.io/myt/","https://magags.github.io/myt/aboutus.html",
                         "https://magags.github.io/myt/academiccom.html", "https://magags.github.io/myt/announcements.html",
                         "https://magags.github.io/myt/choir.html","https://magags.github.io/myt/communicationscom.html",
                         "https://magags.github.io/myt/congregation.html","https://magags.github.io/myt/events.html",
                         "https://magags.github.io/myt/financecom.html","https://magags.github.io/myt/footer.html",
                         "https://magags.github.io/myt/gallery.html","https://magags.github.io/myt/healthcom.html",
                         "https://magags.github.io/myt/ministries.html","https://magags.github.io/myt/mytcmm.html",
                         "https://magags.github.io/myt/mytcwl.html","https://magags.github.io/myt/mytcwm.html",
                         "https://magags.github.io/myt/mytcym.html","https://magags.github.io/myt/mytyouth.html",
                         "https://magags.github.io/myt/outreachcom.html","https://magags.github.io/myt/privacy.html",
                         "https://magags.github.io/myt/scripture.html","https://magags.github.io/myt/wards.html"];*/

