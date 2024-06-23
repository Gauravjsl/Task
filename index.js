// side bar toggle

document.getElementById("arrowright").addEventListener("click", () => {
    document.getElementById("sidebar-right").style.display = "none";
    document.getElementById("sidebar-left").style.display = "flex";
})

document.getElementById("arrowleft").addEventListener("click", () => {
    document.getElementById("sidebar-left").style.display = "none";
    document.getElementById("sidebar-right").style.display = "flex";
})



//getting data dynamically
document.addEventListener("DOMContentLoaded", async () => {
 try {
    const response = await fetch('file.json');
    if(!response.ok){
        console.log("error occured");
    }
    const data = await response.json();
    const tasks = data.tasks;
    const assets = tasks[0].assets;
   let sectionHeader = document.getElementById("sectionheader");
   let sectionDescription = document.getElementById("sectiondescription");
   tasks.map((item) => {
    sectionHeader.innerText = item.task_title;
    sectionDescription.innerText = item.task_description;
 });


assets.forEach(asset => {
    // Create a card div
    let cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style.width = '25rem';

    // Create and set the title paragraph
    let titleParagraph = document.createElement('p');
    titleParagraph.className = 'title';
    titleParagraph.innerHTML = `${asset.asset_title}<i class="fa-solid fa-info info"></i>`

    // Create the card body div
    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body';

    // Create and set the description span
    let descriptionSpan = document.createElement('span');
    descriptionSpan.innerHTML = `<strong>Description:</strong> ${asset.asset_description}`;

    // Create and set the iframe
    let iframe = document.createElement('iframe');
    iframe.style.paddingTop = '40px';
    iframe.width = '370';
    iframe.height = '315';
    iframe.src = asset.asset_content;

    // Append the title paragraph and description span to the card body
    cardBodyDiv.appendChild(descriptionSpan);
    cardBodyDiv.appendChild(iframe);

    // Append the title paragraph and card body to the card div
    cardDiv.appendChild(titleParagraph);
    cardDiv.appendChild(cardBodyDiv);

    // Append the card div to the cards element
    cards.appendChild(cardDiv);
});

 } catch (error) {
    
 }
});

//adding the functionality to cancel the notice board
document.getElementById("cancel").addEventListener('click', () => {
    let noticeBoard = document.getElementById("notice-board");
    noticeBoard.style.display = "none";
    console.log("clicked")
})