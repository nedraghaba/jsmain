var getText=document.getElementById('text');

function font() {
    getText.style.fontWeight ='bold'
    
   
}

function fontt() {
    getText.style.fontStyle ='italic'
}
function foont() {
    getText.style.textDecoration ='underline' 
}
document.getElementById('selectsize').addEventListener('change',function() {
    getText.style.fontSize=this.value;
 }  )
 document.getElementById('fontfamily').addEventListener('change',function() {
    getText.style.fontFamily=this.value;
}  )