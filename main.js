window.addEventListener('load', function() {

    let act = document.getElementById("links-courses");
    act?.querySelectorAll("li").forEach((e) => {
        if(e.querySelector("a").attributes.name.value === localStorage.getItem("active")) {
            e.querySelector("a").classList.add("active")
        } 
    })

    document.querySelectorAll("body > div").forEach((a) => {
        if(a.classList.contains(localStorage.getItem("active"))) {
            a.classList.add("d-flex")
        } else {
            a.classList.replace("d-flex", "d-none")
        }
    })

    let breakPage = document.querySelectorAll(".break-page") ;
    let i = 0;

    breakPage?.forEach((e) => {

        e.querySelectorAll("span").forEach((o) => {
            i++;
        
            if (document.body.clientWidth < 767) {
                    if (i > breakPage.childElementCount/3) {
                            return ;
                        }
                    }
                
                    let size = Math.floor(Math.random()*20);
                
                    o.style.cssText = `width: ${size}px; height: ${size}px; left: calc(${Math.floor(Math.random()*100)}% - ${size}px); top: ${Math.floor(Math.random()*100)}% `
    })
    })
                
    let visits = document.querySelectorAll(".categories .content-categories .box");

    visits.forEach((e) => {

        let visit = e.querySelector("span span").textContent.trim();
        let counter = 0;
        
        let x = setInterval(() => {
            if (this.window.scrollY > 1800) {
                e.querySelector("span span").textContent = counter;                
                
                if (counter == visit) clearInterval(x)
                
                counter++;
            }
        }, 1);
    })

    document.querySelectorAll("ul.categories li")?.forEach((cat) => {
        cat.querySelector("a").addEventListener('click', () => {
            localStorage.setItem("active", cat.querySelector("a").attributes.name.value)
        })
    })

    document.querySelectorAll(".categories a")?.forEach((cat) => {
        cat.addEventListener('click', () => {
            localStorage.setItem("active", cat.attributes.name.value);
        })
    })

    // the number of function setinterval     
    let count;
    // This function executes every specified period of time
    function startInterval() { 
        document.querySelectorAll(".category").forEach((slider) => {
            if (slider.parentNode.classList.contains('d-flex')) {
                let j = 0;
                count = setInterval(() => {
                    j++;
                    
                    slider.scrollBy({
                        left: slider.clientWidth,
                        behavior: "smooth",
                    })

                    if (j === parseInt(slider.attributes.number.value)) {
                        j = 0;
                        slider.scrollTo(0,0);     
                    }
                        
                },4000)
            }
        })
    }

    startInterval();

    // startInterval();
    // Stop the execution of the previous method
    function stopInterval() {
        clearInterval(count);
    }

    // stop the execution of the previous method when i make hover on the slider
    document.querySelectorAll(".category").forEach((slider) => {
        slider?.addEventListener('mouseover', stopInterval)
    })
    document.querySelectorAll(".category").forEach((slider) => {
        slider?.addEventListener('mouseout',
        function() {
            stopInterval();
            startInterval();
        });
    })

    // the pointers which refer to left and right
    let angle = document.querySelectorAll(".content-slider i");
    // stop the execution of the previous method when i make hover on angle left/right
    angle.forEach((e) => {
        
        e.addEventListener('mouseover', stopInterval);            
        e.addEventListener('mouseout',
        function() {
            stopInterval();
            startInterval();
        }
        );
        
        e.addEventListener('click', () => {
            
            if (e.classList.contains("right")) {
                document.querySelectorAll(".category").forEach((slider) => {
                    slider.scrollBy({
                        left: slider.clientWidth,
                        behavior: "smooth",
                    })
                })
            } else {
                document.querySelectorAll(".category").forEach((slider) => {
                    slider.scrollBy({
                        left: -slider.clientWidth,
                        behavior: "smooth",
                    })
                })
            }
        });
    })
    // the sowapping between the links 
    let links = document.getElementById("links-courses");

    links?.querySelectorAll("li").forEach((e) => {
        
        e.querySelector("a").addEventListener('click', () => {

            localStorage.setItem("active", e.querySelector("a").attributes.name.value)

            links.querySelectorAll("li").forEach((li) => {
                li.querySelector("a").classList.remove("active");
            })
            e.querySelector("a").classList.add("active")
            
            document.querySelectorAll("body > div").forEach((a) => {
                if(a.classList.contains(e.querySelector("a").attributes.name.value)) {
                    a.classList.add("d-flex")
                } else {
                    a.classList.replace("d-flex", "d-none")
                }
            })
        })
    })

    document.querySelectorAll(".content-slider .sub-cat").forEach((subCat) => {
        subCat?.addEventListener('click', () => {
            document.querySelectorAll("body > .course").forEach((target) => {
                if (target.classList.contains(subCat.attributes.name.value)) {
                    target.classList.add("d-block")
                } else {
                    target.classList.replace("d-block", "d-none");
                 }
            })
        })
    })

    // add like and remove it
    let like = document.querySelectorAll(".course li");

    like.forEach((li) => {

        let cur = li.querySelector(".rank span:last-child i");
        
        cur.addEventListener('click', () => {

            if (cur.classList.contains("far")) {
                cur.classList.replace("far", "fas");
                cur.style.color = "#0075ff";                
                cur.parentElement.firstChild.textContent = parseInt(cur.parentElement.firstChild.textContent) + 1 + ' ';
            } else {                
                cur.classList.replace("fas", "far");
                cur.style.color = "#777";
                cur.parentElement.firstChild.textContent = parseInt(cur.parentElement.firstChild.textContent) - 1 + ' ';
            }
        })
    })

});