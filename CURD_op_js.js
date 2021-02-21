
    var counte=1;   
    function addStu(){  
        let inputxt=document.getElementById("inputStuName").value;
        let list = '<div class="row g-4" >'+
        '<div class="col-auto">' +
       '<input type="text" value="'+inputxt+'" class="form-control" id="stu'+counte+'" placeholder="Password" disabled>' +
       '</div>' +
       '<div class="col-auto">' +
       '<button type="button"id="edit'+counte+'" class="btn btn-primary mb-3" onclick="editEntry(this.id)">Edit</button>' +
       '</div>' +
       '<div class="col-auto">' +
       '<button  type="button" id="update'+counte+'" class="btn btn-success mb-3" onclick="updateEntry(this.id)">Update</button>' +
       '</div>' +
       '<div class="col-auto">' +
       '<button  type="button" id="delete'+counte+'" class="btn btn-danger mb-3" onclick="deleteEntry(this.id)">Delete</button>' +
       '</div> </div>';     
        document.getElementById("stuListCotainer").insertAdjacentHTML("afterbegin",list)
        counte++;
    }
    function editEntry(editid){ 
        let parent=document.getElementById(editid).parentNode.parentNode;
        let child=parent.firstChild.firstChild;
        child.removeAttribute("disabled");
    }
    function updateEntry(updateid){  
        let parent=document.getElementById(updateid).parentNode.parentNode;
        let child=parent.firstChild.firstChild;
        child.setAttribute("disabled",'disabled');
    }
    function deleteEntry(deleteid){  
        let parent=document.getElementById(deleteid).parentNode.parentNode;
        parent.remove();
    }