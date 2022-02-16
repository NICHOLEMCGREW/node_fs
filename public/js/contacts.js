let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = document.querySelector("#name")
    let message = document.querySelector("#message")

    let body = {
        name: name.ariaValueMax,
        message: message.value
    };

try {
    let result = await fetch("/contact", { 
        method: "POST", 
        headers: { "Content-Type": "application.json" },
        body: JSON.stringify(body),        
    });

    if (result.ok) {
        let data = await result.json();
        alert(data.message);
    } else {
        alert("The server is having trouble. Try again later!");
    }
} catch (e) {
    console.error(e);
    alert("We had trouble sending your request. Try again now, or contact support."
    );
}

});