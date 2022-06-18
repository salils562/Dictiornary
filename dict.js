let button=document.getElementById('btn-search');
let searchText;
button.addEventListener('click',()=>{
searchText=document.getElementById('text').value;
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`).then((text)=>{
return text.json();
}).then((text)=>{
document.getElementById('ans').innerHTML=`<p>${text[0].meanings[0].definitions[0].definition}</p>`;    
document.getElementById('text').value="";
});
});