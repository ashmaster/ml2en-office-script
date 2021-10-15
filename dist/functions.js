CustomFunctions.associate("ADD",(function(e,n){return e+n})),CustomFunctions.associate("CLOCK",(function(e){var n=setInterval((function(){var n=(new Date).toLocaleTimeString();e.setResult(n)}),1e3);e.onCanceled=function(){clearInterval(n)}})),CustomFunctions.associate("INCREMENT",(function(e,n){var r=0,a=setInterval((function(){r+=e,n.setResult(r)}),1e3);n.onCanceled=function(){clearInterval(a)}})),CustomFunctions.associate("LOG",(function(e){return console.log(e),e})),CustomFunctions.associate("ML2EN",(function(e){var n={അ:"a",ആ:"aa",ഇ:"i",ഈ:"ee",ഉ:"u",ഊ:"oo",ഋ:"ru",എ:"e",ഏ:"e",ഐ:"ai",ഒ:"o",ഓ:"o",ഔ:"au"},r={ക്ക:"kk",ഗ്ഗ:"gg",ങ്ങ:"ng",ച്ച:"cch",ജ്ജ:"jj",ഞ്ഞ:"nj",ട്ട:"tt",ണ്ണ:"nn",ത്ത:"tth",ദ്ദ:"ddh",ദ്ധ:"ddh",ന്ന:"nn",ന്ത:"nth",ങ്ക:"nk",ണ്ട:"nd",ബ്ബ:"bb",പ്പ:"pp",മ്മ:"mm",യ്യ:"yy",ല്ല:"ll",വ്വ:"vv",ശ്ശ:"sh",സ്സ:"s",ക്സ:"ks",ഞ്ച:"nch",ക്ഷ:"ksh",മ്പ:"mp",റ്റ:"tt",ന്റ:"nt",ന്ത്യ:"nthy"},a={ക:"k",ഖ:"kh",ഗ:"g",ഘ:"gh",ങ:"ng",ച:"ch",ഛ:"chh",ജ:"j",ഝ:"jh",ഞ:"nj",ട:"t",ഠ:"dt",ഡ:"d",ഢ:"dd",ണ:"n",ത:"th",ഥ:"th",ദ:"d",ധ:"dh",ന:"n",പ:"p",ഫ:"ph",ബ:"b",ഭ:"bh",മ:"m",യ:"y",ര:"r",ല:"l",വ:"v",ശ:"sh",ഷ:"sh",സ:"s",ഹ:"h",ള:"l",ഴ:"zh",റ:"r"},t={ൽ:"l",ൾ:"l",ൺ:"n",ൻ:"n",ർ:"r",ൿ:"k"},o={"ു്":"u","ാ":"aa","ി":"i","ീ":"ee","ു":"u","ൂ":"oo","ൃ":"ru","െ":"e","േ":"e","ൈ":"y","ൊ":"o","ോ":"o","ൌ":"ou","ൗ":"au","ഃ":"a"};function c(e,n){for(var r=0,a=new RegExp("("+s(e).join("|")+")("+s(o).join("|")+")","g");null!=r;)(r=a.exec(n))&&(n=n.replace(new RegExp(r[0],"g"),e[r[1]]+o[r[2]]));return n}function s(e){var n=[];for(var r in e)e.hasOwnProperty(r)&&n.push(r);return n}return function(e){e=e.replace(/[\u200B-\u200D\uFEFF]/g,""),e=c(r,e),e=c(n,e),e=c(a,e);var s="";for(var u in r)r.hasOwnProperty(u)&&(s=r[u],e=(e=(e=e.replace(new RegExp(u+"്([\\w])","g"),s+"$1")).replace(new RegExp(u+"്","g"),s+"u")).replace(new RegExp(u,"g"),s+"a"));for(var u in a)a.hasOwnProperty(u)&&(s=a[u],e=e.replace(new RegExp(u+"(?!്)","g"),s+"a"));for(var u in a)a.hasOwnProperty(u)&&(s=a[u],e=e.replace(new RegExp(u+"്(?![\\s).;,\"'/\\%!])","ig"),s));for(var u in a)a.hasOwnProperty(u)&&(s=a[u],e=e.replace(new RegExp(u+"്","g"),s+"u"));for(var u in a)a.hasOwnProperty(u)&&(s=a[u],e=e.replace(new RegExp(u,"g"),s));for(var u in n)n.hasOwnProperty(u)&&(s=n[u],e=e.replace(new RegExp(u,"g"),s));for(var u in t)t.hasOwnProperty(u)&&(s=t[u],e=e.replace(new RegExp(u,"g"),s));for(var u in e=e.replace(/ം/g,"m"),o)o.hasOwnProperty(u)&&(s=o[u],e=e.replace(new RegExp(u,"g"),s));return e.replace(/(^\s*\w|[\.\!\?]\s*\w)/g,(function(e){return e.toUpperCase()}))}(e)}));
//# sourceMappingURL=functions.js.map