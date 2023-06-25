// Get  to DOM elements
const gameContainer = document.querySelector(".container-g"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

  // Create an HTML audio element
const audio = new Audio();
// Function to play the song
function playSong(songUrl) {
  audio.src = songUrl;
  audio.play();
}

// Function to stop playing the song
function stopSong() {
  audio.pause();
  audio.currentTime = 0;
}



// Function to handle winning
function handleWin() {
  playSong('assets/music/win.wav');
  // Additional actions to perform when winning
}

// Function to handle losing
function handleLoss() {
  playSong('assets/music/lose.wav');
  // Additional actions to perform when losing
}


// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "assets/images/rock.png";
    result.textContent = "Wait...";

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      let cpuImages = ["assets/images/rock.png", "assets/images/paper.png", "assets/images/scissors.png"];
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["R", "P", "S"][index];

      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };

     // Look up the outcome value based on user and CPU options
     let outComeValue = outcomes[userValue + cpuValue];

     // Display the result
     result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;

     // Check if the user won or lost and play the appropriate song
     if (outComeValue === "User") {
       handleWin();
     } else if (outComeValue === "Cpu") {
       handleLoss();
     }
   }, 2500);
 });
});




