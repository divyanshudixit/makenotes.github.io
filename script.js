console.log("Notes Website");
shownotes();
let addbtn=document.getElementById('addbtn');
addbtn.addEventListener('click',function(e){
    let addtxt=document.getElementById('addtxt');
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtxt="";
    console.log(notesObj);
    shownotes();
})
// Show Elements
function shownotes()
{
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index)
    {
        html+=`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">Note${index+1}</h5>
            <p class="card-text">${element}</p>
            <button  id="${index}" onclick="deletenote(this.id)" href="#" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    })
    let notesElem=document.getElementById('notes');
    if(notesObj.length!=0)
    {
        notesElem.innerHTML=html;
    }
    else{
        notesElem.innerHTML=`nothing to show !Use "Add a Note" section above to add Notes`;
    }

}
// Delete notes
function deletenote(index)
{
    console.log('I am Deleting',index);
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));

    shownotes();


}
let searchtxt=document.getElementById('searchtxt');
searchtxt.addEventListener('input',function()
{
    let inputval=searchtxt.value.toLowerCase();
    // console.log('input event',inputval);
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
        // console.log(cardtxt);
        if(cardtxt.includes(inputval))
        {
            element.style.display="block";
        }
        else{
            element.style.display="none";

        }

    })
 
})