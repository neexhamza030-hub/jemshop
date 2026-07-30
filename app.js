// ===============================
// JEM Protein - app.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("JEM Protein Loaded!");

    highlightCurrentPage();

    enableSmoothScroll();

});

// -------------------------------
// Highlight Current Page
// -------------------------------

function highlightCurrentPage(){

    const links = document.querySelectorAll("nav a");

    links.forEach(link=>{

        if(link.href===window.location.href){

            link.style.color="#00ff88";

        }

    });

}

// -------------------------------
// Smooth Scroll
// -------------------------------

function enableSmoothScroll(){

    const anchors=document.querySelectorAll('a[href^="#"]');

    anchors.forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}

// -------------------------------
// Search Products
// -------------------------------

function searchProducts(){

    const input=document.getElementById("searchInput");

    if(!input) return;

    const filter=input.value.toLowerCase();

    const cards=document.querySelectorAll(".product-card");

    cards.forEach(card=>{

        const title=card.querySelector("h2").textContent.toLowerCase();

        if(title.includes(filter)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

}

// -------------------------------
// Currency Format
// -------------------------------

function formatPrice(price){

    return "$"+Number(price).toFixed(2);

}

// -------------------------------
// Notification
// -------------------------------

function showMessage(message,color="#00ff88"){

    const div=document.createElement("div");

    div.innerText=message;

    div.style.position="fixed";

    div.style.bottom="30px";

    div.style.right="30px";

    div.style.background=color;

    div.style.color="#000";

    div.style.padding="15px 25px";

    div.style.borderRadius="10px";

    div.style.fontWeight="bold";

    div.style.zIndex="9999";

    document.body.appendChild(div);

    setTimeout(()=>{

        div.remove();

    },3000);

}