(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type } = obj;

        if (type === "PageLoad") {
            console.log("Loading page")
            setTimeout(() => {loadLogo()}, 0);
        }
    });

    const loadLogo = () => {
        let twitterLogoExists = document.getElementsByClassName("TwitterLogo")[0];
        if (!twitterLogoExists) {
            
            console.log("Load Logo");
            let twitterLogo = document.createElement("img");

            twitterLogo.src = chrome.runtime.getURL("assets/TwitterLogo.png");
            twitterLogo.width = "30";
            twitterLogo.height = "30";
            twitterLogo.className = "TwitterLogo";

            xLogo = document.getElementsByClassName("r-13v1u17 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp")[0];
            if (xLogo) { 
                xLogo.parentElement.append(twitterLogo);
                xLogo.remove();
            }

            var links = document.querySelectorAll("link[rel~='icon']")
            console.log("Found Links Start ---------");
            links.forEach(link => {
                console.log(link);
                link.href = chrome.runtime.getURL("assets/TwitterLogoBlue.png");
            });
            console.log("Found Links End ---------");
        }
    }
    setTimeout(() => {loadLogo()}, 600);
    setTimeout(() => {loadLogo()}, 3000);
})();

