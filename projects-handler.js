var projectsdiv = document.getElementById("projects");
for(let i=0; i < PROJECTS.length; i++) {
    var currentproject = PROJECTS[i];
    //div
    var projectdiv = document.createElement("div");
    var divstyle = document.createAttribute("style");
    divstyle.value = "display: inline-block; width: 200px; margin: 20px;";
    projectdiv.setAttributeNode(divstyle);

    //h3
    var title = document.createElement("h3");
    var titlenode = document.createTextNode(currentproject.title);
    title.appendChild(titlenode);

    //img
    var image = document.createElement("img");
    var source = document.createAttribute("src");
    source.value = "images/" + currentproject.img;
    image.setAttributeNode(source);
    var imgstyle = document.createAttribute("style");
    imgstyle.value = "width: 120px; height: 120px;";
    image.setAttributeNode(imgstyle);

    //p
    var p = document.createElement("p");
    var pnode = document.createTextNode(currentproject.description);
    p.appendChild(pnode);

    projectdiv.appendChild(title);
    projectdiv.appendChild(image);
    projectdiv.appendChild(p);

    projectsdiv.appendChild(projectdiv);


}
