//welcome-page codes
//Select the welcome-page div
var welcome = document.querySelector('#welcome-page');
//animate the welcome-page
welcome.animate([
    {opacity: '0', offset: 0}, 
    {opacity: '1', offset: 1}
], {
    duration: 2000
}) ;
//function to start the exit animation and display the home-page once the enter-btn is pclicked.
function Proceed() {
    var next = document.querySelector('#welcome-page');
    var nextAnimation = next.animate([
        {opacity: '1', offset: 0}, 
        {opacity: '0', offset: 1}
        ], {
        duration: 1000
    }) ;
    //after the animation the home page starts to appear and the hides the welcome-page
    nextAnimation.onfinish = function() {
        document.querySelector('#home-page');
        document.getElementById('welcome-page').style.display = "none";
        animateHome();
    }
}

//function to animate the exit of welcome-page and animate to show the home-page
function animateHome() {
    document.getElementById('home-page').style.display = "block";
    document.getElementById('header').animate ([
        {opacity: '0', offset: 0}, 
        {opacity: '1', offset: 1}
    ], {
        duration: 3000
    });
    document.getElementById('about').animate ([
        {opacity: '0', transform: 'translate3d(0, 5%, 0)', offset: 0}, 
        {opacity: '1', transform: 'none', offset: 1}
    ], {
        duration:2000
    });
}
//enter-btn on click function
document.getElementById("enter-btn").onclick = function(){
    Proceed()
};

//Event Listener upon hovering on the enter-btn
document.getElementById("enter-btn").addEventListener("mouseover", mouseOver);
document.getElementById("enter-btn").addEventListener("mouseout", mouseOut);

//mouseOver function enter-btn
function mouseOver() {
    var enterButton = document.getElementById("enter-btn");
    var hoverEnter = enterButton.animate ([
        {transform: 'scale(1)'},
        {transform: 'scale(1.5)', color: '#ff00ff'}
    ], {
        duration: 500
    });
    //changes color and scale on hover
    hoverEnter.onfinish = function() {
        document.getElementById("enter-btn").style.color = "#ff00ff";
        document.getElementById("enter-btn").style.transform = "scale(1.5)";
    }
}
//hover out function
function mouseOut() {
    var enterButton = document.getElementById("enter-btn");
    var hoverOutEnter = enterButton.animate ([
        {transform: 'scale(1.5'},
        {transform: 'scale(1)', color: 'whitesmoke'}
    ], {
        duration: 500
    });
    //reverts the color and scale on hover out
    hoverOutEnter.onfinish = function() {
        document.getElementById("enter-btn").style.color = "whitesmoke";
        document.getElementById("enter-btn").style.transform = "scale(1)";
    }
}





//home-page codes
//animate home-btn on hover
document.getElementById("home-btn").addEventListener("mouseover", hoverHome);
document.getElementById("home-btn").addEventListener("mouseout", hoverOutHome);

//home-btn on hover function
function hoverHome() {
    var homeButton = document.getElementById("home-btn");
    var hoverHome = homeButton.animate ([
        {transform: 'scale(1)'},
        {transform: 'scale(1.2)', color: '#02fdff', opacity: '100%'}
    ], {
        duration: 300
    });
    //home-btn - changes color and scale on hover
    hoverHome.onfinish = function() {
        document.getElementById("home-btn").style.color = "#02fdff";
        document.getElementById("home-btn").style.transform = "scale(1.2)";
        document.getElementById("home-btn").style.opacity = "100%";
    }
}
//home-btn on hover out function
function hoverOutHome() {
    var homeButton = document.getElementById("home-btn");
    var hoverOutHome = homeButton.animate ([
        {transform: 'scale(1.2)'},
        {transform: 'scale(1)', color: '#02fdff'}
    ], {
        duration: 100
    });
    //home-btn - reverts color and scale on hover out
    hoverOutHome.onfinish = function() {
        document.getElementById("home-btn").style.color = "whitesmoke";
        document.getElementById("home-btn").style.transform = "scale(1)";
    }
}

//animate portfolio-btn on hover
document.getElementById("portfolio-btn").addEventListener("mouseover", hoverPortfolio);
document.getElementById("portfolio-btn").addEventListener("mouseout", hoverOutPortfolio);
//portfolio-btn on hover function
function hoverPortfolio() {
    var portfolioButton = document.getElementById("portfolio-btn");
    var hoverPortfolio = portfolioButton.animate ([
        {transform: 'scale(1)'},
        {transform: 'scale(1.2)', color: '#02fdff', opacity: '100%'}
    ], {
        duration: 300
    });
    //portfolio-btn - changes color and scale on hover
    hoverPortfolio.onfinish = function() {
        document.getElementById("portfolio-btn").style.color = "#02fdff";
        document.getElementById("portfolio-btn").style.transform = "scale(1.2)";
        document.getElementById("portfolio-btn").style.opacity = "100%";
    }
}
//portfolio-btn - hover out function
function hoverOutPortfolio() {
    var portfolioButton = document.getElementById("portfolio-btn");
    var hoverOutPortfolio = portfolioButton.animate ([
        {transform: 'scale(1.2)'},
        {transform: 'scale(1)', color: '#02fdff'}
    ], {
        duration: 100
    });
    //portfolio-btn - reverts the color and scale on hover out
    hoverOutPortfolio.onfinish = function() {
        document.getElementById("portfolio-btn").style.color = "whitesmoke";
        document.getElementById("portfolio-btn").style.transform = "scale(1)";
        document.getElementById("portfolio-btn").style.opacity = "50%";
    }
}

//Portfolio-btn onclick function
document.getElementById("portfolio-btn").onclick = function(){
    goToPortfolio()
};
//function to animate home-page exit and animate and display portfolio-page
function goToPortfolio() {
    //animate home-page exit
    var next = document.querySelector('#home-page');
    var nextAnimation = next.animate([
        {opacity: '1', offset: 0}, 
        {opacity: '0', offset: 1}
        ], {
        duration: 1000
    }) ;
    //onfinish remove home-page and start animating the portfolio-page
    nextAnimation.onfinish = function() {
        document.querySelector('#portfolio-page');
        document.getElementById('home-page').style.display = "none";
        animatePortfolio();
    }
}

//portfolio-page codes
//animate portfolio-page function
function animatePortfolio() {
    document.getElementById('portfolio-page').style.display = "block";
    document.getElementById('header-portfolio').animate ([
        {opacity: '0', offset: 0}, 
        {opacity: '1', offset: 1}
    ], {
        duration: 3000
    });
    document.getElementById('portfolio').animate ([
        {opacity: '0', transform: 'translate3d(0, 5%, 0)', offset: 0}, 
        {opacity: '1', transform: 'none', offset: 1}
    ], {
        duration:2000
    });
}

//animate home-btn2 on hover
document.getElementById("home-btn2").addEventListener("mouseover", hoverHome2);
document.getElementById("home-btn2").addEventListener("mouseout", hoverOutHome2);
//home-btn2 on hover function
function hoverHome2() {
    var homeButton = document.getElementById("home-btn2");
    var hoverHome = homeButton.animate ([
        {transform: 'scale(1)'},
        {transform: 'scale(1.2)', color: '#02fdff', opacity: '100%'}
    ], {
        duration: 300
    });
    //home-btn2 - changes color, scale and opacity on hover
    hoverHome.onfinish = function() {
        document.getElementById("home-btn2").style.color = "#02fdff";
        document.getElementById("home-btn2").style.transform = "scale(1.2)";
        document.getElementById("home-btn2").style.opacity = "100%";
    }
}
//home-btn2 hover out function
function hoverOutHome2() {
    var homeButton = document.getElementById("home-btn2");
    var hoverOutHome = homeButton.animate ([
        {transform: 'scale(1.2)'},
        {transform: 'scale(1)', color: '#02fdff'}
    ], {
        duration: 100
    });
    //home-btn2 - reverts color, scale and opacity on hover out
    hoverOutHome.onfinish = function() {
        document.getElementById("home-btn2").style.color = "whitesmoke";
        document.getElementById("home-btn2").style.transform = "scale(1)";
        document.getElementById("home-btn2").style.opacity = "50%";
    }
}

//animate portfolio-btn on hover
document.getElementById("portfolio-btn2").addEventListener("mouseover", hoverPortfolio2);
document.getElementById("portfolio-btn2").addEventListener("mouseout", hoverOutPortfolio2);

//portfolio-btn2 on hover function
function hoverPortfolio2() {
    var portfolioButton = document.getElementById("portfolio-btn2");
    var hoverPortfolio = portfolioButton.animate ([
        {transform: 'scale(1)'},
        {transform: 'scale(1.2)', color: '#02fdff'}
    ], {
        duration: 300
    });
    //portfolio-btn2 - changes color and scale on hover
    hoverPortfolio.onfinish = function() {
        document.getElementById("portfolio-btn2").style.color = "#02fdff";
        document.getElementById("portfolio-btn2").style.transform = "scale(1.2)";
    }
}
//portfolio-btn2 hover out function
function hoverOutPortfolio2() {
    var portfolioButton = document.getElementById("portfolio-btn2");
    var hoverOutPortfolio = portfolioButton.animate ([
        {transform: 'scale(1.2)'},
        {transform: 'scale(1)', color: '#02fdff'}
    ], {
        duration: 100
    });
    //portfolio-btn2 - reverts color and scale on hover out
    hoverOutPortfolio.onfinish = function() {
        document.getElementById("portfolio-btn2").style.color = "whitesmoke";
        document.getElementById("portfolio-btn2").style.transform = "scale(1)";
    }
}

//onclick home-btn2 function to go to the home-page
document.getElementById("home-btn2").onclick = function(){
    goToHome();
}
//function to animate and hide the portfolio-page and display the home-page
function goToHome() {
    //animate portfolio-page exit
    var next = document.querySelector('#portfolio-page');
    var nextAnimation = next.animate([
        {opacity: '1', offset: 0}, 
        {opacity: '0', offset: 1}
        ], {
        duration: 1000
    }) ;
    //onfinish hides the portfolio-page and displays the homepage
    nextAnimation.onfinish = function() {
        document.querySelector('#home-page');
        document.getElementById('portfolio-page').style.display = "none";
        animateHome();
    }
}

//onclick animate landscapes-btn function
document.getElementById("landscapes-btn").addEventListener("mouseover", hoverLandscapes);
document.getElementById("landscapes-btn").addEventListener("mouseout", hoverOutLandscapes);

//landscapes-btn on hover function
function hoverLandscapes() {
    var landscapesButton = document.getElementById("landscapes-btn");
    var hoverLandscapes = landscapesButton.animate ([
        {transform: 'scale(1)'},
        {transform: 'scale(1.2)', color: '#02fdff'}
    ], {
        duration: 300
    });
    //landscapes-btn - changes color and the scale
    hoverLandscapes.onfinish = function() {
        document.getElementById("landscapes-btn").style.color = "#02fdff";
        document.getElementById("landscapes-btn").style.transform = "scale(1.2)";
    }
}
//landscapes-btn hover out function
function hoverOutLandscapes() {
    var landscapesButton = document.getElementById("landscapes-btn");
    var hoverOutLandscapes = landscapesButton.animate ([
        {transform: 'scale(1.2)'},
        {transform: 'scale(1)', color: '#02fdff'}
    ], {
        duration: 100
    });
    //landscapes-btn - reverts color and scale
    hoverOutLandscapes.onfinish = function() {
        document.getElementById("landscapes-btn").style.color = "whitesmoke";
        document.getElementById("landscapes-btn").style.transform = "scale(1)";
    }
}

//onclick display landscapes-container function
document.getElementById("landscapes-btn").onclick = function(){
    goToLandscapes();
}

//function to remove portraits-container and display landscapes-container
function goToLandscapes() {
    //animate portraits-container exit
    var next = document.querySelector('#portraits-container');
    var nextAnimation = next.animate([
        {opacity: '1', offset: 0}, 
        {opacity: '0', offset: 1}
        ], {
        duration: 1000
    }) ;
    //onfinish the portraits-container is removed and displays the landscapes-container
    nextAnimation.onfinish = function() {
        document.querySelector('#landscapes-container');
        document.getElementById('portraits-container').style.display = "none";
        animateLandscapes();
    }
}
//animate landscapes-container function
function animateLandscapes() {
    document.getElementById('landscapes-container').style.display = "flex";
    document.getElementById('landscapes-container').animate ([
        {opacity: '0', offset: 0}, 
        {opacity: '1', offset: 1}
    ], {
        duration: 3000
    });
}

//portraits-btn onclick function
document.getElementById("portraits-btn").addEventListener("mouseover", hoverPortraits);
document.getElementById("portraits-btn").addEventListener("mouseout", hoverOutPortraits);

//portraits-btn on hover function
function hoverPortraits() {
    var landscapesButton = document.getElementById("portraits-btn");
    var hoverPortraits = landscapesButton.animate ([
        {transform: 'scale(1)'},
        {transform: 'scale(1.2)', color: '#02fdff'}
    ], {
        duration: 300
    });
    //portraits-btn - changes color and scale function
    hoverPortraits.onfinish = function() {
        document.getElementById("portraits-btn").style.color = "#02fdff";
        document.getElementById("portraits-btn").style.transform = "scale(1.2)";
    }
}
//portraits-btn hover out function
function hoverOutPortraits() {
    var portraitsButton = document.getElementById("portraits-btn");
    var hoverOutPortraits = portraitsButton.animate ([
        {transform: 'scale(1.2)'},
        {transform: 'scale(1)', color: '#02fdff'}
    ], {
        duration: 100
    });
    //onfinish portraits-btn reverts color and scale
    hoverOutPortraits.onfinish = function() {
        document.getElementById("portraits-btn").style.color = "whitesmoke";
        document.getElementById("portraits-btn").style.transform = "scale(1)";
    }
}

//portraits-btn onclick function
document.getElementById("portraits-btn").onclick = function(){
    goToPortraits();
}
//removes landscapes-container and display portraits-container function
function goToPortraits() {
    //animate landscapes-container exit
    var next = document.querySelector('#landscapes-container');
    var nextAnimation = next.animate([
        {opacity: '1', offset: 0}, 
        {opacity: '0', offset: 1}
        ], {
        duration: 1000
    }) ;
    //onfinish removes the landscapes-container and display portraits-container
    nextAnimation.onfinish = function() {
        document.querySelector('#portfolio-page');
        document.getElementById('landscapes-container').style.display = "none";
        animatePortraits();
    }
}
//display portraits-container function
function animatePortraits() {
    document.getElementById('portraits-container').style.display = "flex";
    document.getElementById('portraits-container').animate ([
        {opacity: '0', offset: 0}, 
        {opacity: '1', offset: 1}
    ], {
        duration: 3000
    });
}