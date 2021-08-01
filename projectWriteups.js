function createCodeSpace(text) {
  //code space section
  const codeSpace = document.createElement("p");
  codeSpace.innerHTML = text;
  codeSpace.classList.add("codeSpace");
  codeSpace.addEventListener("mouseenter", () => {
    copy.classList.add("showCopy");
  });
  codeSpace.addEventListener("mouseleave", () => {
    copy.classList.remove("showCopy");
  });

  //const create copy button

  const copy = document.createElement("button");
  copy.classList.add("copy");
  copy.innerText = "Copy";

  function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
      // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
      return window.clipboardData.setData("Text", text);
    } else if (
      document.queryCommandSupported &&
      document.queryCommandSupported("copy")
    ) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand("copy"); // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
        copy.innerText = "copied";
        setTimeout(() => {
          copy.innerText = "copy";
        }, 2000);
      }
    }
  }
  copy.addEventListener("click", () => {
    copyToClipboard(text);
  });
  codeSpace.append(copy);

  return codeSpace;
}
function createEmbed(id) {
  return `https://www.youtube.com/embed/${id}`;
}
function absolutePath(name) {
  return `./media/${name}`;
}
function createRunInfo(...params) {
  const wrapper = document.createElement("div");

  //data
  for (let i = 0; i < params.length; i++) {
    const header = document.createElement("h4");
    header.classList.add("howToRunHeader");
    header.innerHTML = `<span class="grayed">${i + 1}.</span> ${
      params[i].header
    }`;

    const innertext = document.createElement("div");
    innertext.innerText = params[i].text;

    wrapper.append(header, innertext);
    //code space
    if (params[i].code) {
      wrapper.append(createCodeSpace(params[i].code));
    }
  }
  return wrapper;
}
const ProjectNotebook = new ProjectInfo(
  "Project Notebook",
  "Ibukun Adekoya",
  "29th June, 2021",
  ["JS", "CSS", "HTML", "Node.js"],
  "Project Notebook is an application still being developed as expressed beforehand. The aim of the project is straightforward. The application permits clients to make a file, a .note file, alluded to as a notebook. The formation of this document permits clients to handily get to the record and add, alter, eliminate, or view notes that has been made since creation period. Mind you, this application utilizes local storage, thus can't be hosted on the web, however running the server locally permits you admittance to the application.",
  "The beneath demo video walks you through my advancement up until now. Subjects examined in this video are featured below:<ol><li>Introduction to the homepage.</li><li>Navigating easily from a directory to another directory inside the application.</li><li>Creating directories and .note files.</li><li>Selecting and erasing records on the app.</li><li>Using the search bar to look for documents and files in current directory.</li><li>Sorting page yields output on a few factors.</li><li>Creating notes.</li><li>Finally seeing notes in both list and slide view.</li></ol>",
  createEmbed("2OAYUeY2bIU"),
  undefined,
  "https://github.com/ibukun-koyer/notebook",
  "",
  createRunInfo(
    {
      header: "Cloning the directory",
      text: "To begin this process, we need to clone the repository from Github. To do this, copy the below code to:",
      code: "git clone https://github.com/ibukun-koyer/notebook",
    },
    {
      header: "Installing dependencies",
      text: "Given that this is a node.js project, a package.json file would be included when you clone. Therefore, installing dependencies would simply require you writing the below line into your terminal:",
      code: "npm i",
    },
    {
      header: "Executing the app",
      text: "After executing the above lines of code, you are now ready to start up the application. To start up the application, enter the below line of code into your terminal:",
      code: "node index.js",
    },
    {
      header: "Viewing the app",
      text: "To view the application, simply visit the below link:",
      code: "http://localhost:3000",
    }
  )
);
const RockPaperScissors = new ProjectInfo(
  "Rock, paper, scissors",
  "Ibukun Adekoya",
  "29th June, 2021",
  ["React", "CSS", "Firebase"],
  "This simple application was made with React and firebase which permits clients to play a round of rock, paper, and scissors facilitated on the web. Communication between players is overseen utilizing firebase's Realtime data set. To manage space on the storage, after a game meeting is finished, the two game players automatically have their information erased from the database, they additionally have their information taken out from the database at whatever point they reload the page. Presently, we have an essential comprehension of what the application does, lets momentarily discuss how, by zeroing in on the main piece of the application, which is the database section. On application started, after clients have addressed the initial two prompts tossed at them by the application about themselves, the application continues to save their individual information into a pool of clients. The next part of the prompt requires making a connection between two of the clients, and this is by entering the second players id, and this is done by entering the second players id, after the connection has been validated, these two players are then moved to a meeting room where they have a common access data storage to allow communication between themselves.",
  "Below is a live link demo to the application:",
  "https://rock-paper-scissors-9da14.web.app/",
  absolutePath("rock, paper, scissors screenshot.PNG"),
  "https://github.com/ibukun-koyer/rock-paper-scissors",
  "",
  createRunInfo(
    {
      header: "Accessing it online",
      text: "Since this application has been hosted online, you could simply access the below link. If you use this step, you could skip the below steps",
      code: "https://rock-paper-scissors-9da14.web.app/",
    },
    {
      header: "Cloning the directory",
      text: "To begin this process, we need to clone the repository from Github. To do this, copy the below code to:",
      code: "git clone https://github.com/ibukun-koyer/rock-paper-scissors",
    },
    {
      header: "Installing dependencies",
      text: "Given that this is a node.js project, a package.json file would be included when you clone. Therefore, installing dependencies would simply require you writing the below line into your terminal:",
      code: "npm i",
    },
    {
      header: "Executing the app",
      text: "After executing the above lines of code, you are now ready to start up the application. To start up the application, enter the below line of code into your terminal:",
      code: "npm start",
    },
    {
      header: "Viewing the app",
      text: "To view the application, simply visit the below link if the link isn't automatically opened:",
      code: "http://localhost:3000",
    }
  )
);
const Whatsapp = new ProjectInfo(
  "Whatsapp Clone",
  "Ibukun Adekoya",
  "30th June, 2021",
  ["React", "CSS", "Firebase"],
  "This application is now a completed application. The aim of this application is to create a direct copy of the whatsapp application. This application allows users to sign-up, log-in, or recover password, all of these functionalities were hosted using firebases authentication system. Next, users are allowed to add new contacts (contacts that already exist in the ecosystem.), and they are also allowed to create a group chat consisting of their contacts only. Users of these applications can send messages to and fro all thanks to the firebase realtime database, and can also share images and videos which are saved on cloudinary and the link is saved onto firebase. Users can change their status, their names and their display pictures. Finally, they can logout and their is a live update on the status of the contact that leaves. That said, new functionalities like notifications and database and cloudinary optimizations are currently in the works and would be integrated when they are ready. ",
  "To properly test this application, you would need to create an additional account to be able to chat. That said, for basic chat testing and contact creation, you could add any/both of this two emails as contacts, <span class='unique'>ji81778@umbc.edu</span> and/or <span class='unique'>iqttgydbo@umbc.edu</span>. Below is a live link demo to the application:",
  "https://whatsapp-b8ba4.web.app/",
  absolutePath("whatsapp.PNG"),
  "https://github.com/ibukun-koyer/whatsapp_clone",
  "",
  createRunInfo(
    {
      header: "Accessing it online",
      text: "Since this application has been hosted online, you could simply access the below link. If you use this step, you could skip the below steps",
      code: "https://whatsapp-b8ba4.web.app/",
    },
    {
      header: "Cloning the directory",
      text: "To begin this process, we need to clone the repository from Github. To do this, copy the below code to:",
      code: "git clone https://github.com/ibukun-koyer/whatsapp_clone",
    },
    {
      header: "Installing dependencies",
      text: "Given that this is a node.js project, a package.json file would be included when you clone. Therefore installing dependencies would simply require you writing the below line into your terminal:",
      code: "npm i",
    },
    {
      header: "Executing the app",
      text: "After executing the above lines of code, you are now ready to start up the application. To start up the application, enter the below line of code into your terminal:",
      code: "npm start",
    },
    {
      header: "Viewing the app",
      text: "To view the application, simply visit the below link if the link isn't automatically opened:",
      code: "http://localhost:3000",
    }
  )
);
const Monopoly = new ProjectInfo(
  "Monopoly Emulator",
  "Ibukun Adekoya",
  "30th June, 2021",
  ["C", "nCurses"],
  "Monopoly Emulator is an application that permits you to play a round of monopoly on a terminal. Probably the greatest issue with making applications that run in the terminal is that there is a limit to what you can do, graphically speaking. Although, creating interactive applications that permits you to control the screen by setting items on (x, y) coordinates has been made conceivable by a few plugins yet quite possibly the most acclaimed plugins for this task is known as ncurses. Notwithstanding, utilizing ncurses did not only allow me to place items based on coordinates, however it likewise permitted me to make another window other than stdout to display my application. The finished result of this application permits clients to start new games, load up games dependent on saved games, permits a minimum of 2 and a maximum of 8 players to play the game, includes an interactive board that permits clients visualize the game.",
  "This underneath video demo grandstands a portion of this application, like firing up another game, loading up a game, saving a game, and looking at the games board and the play choices. For a superior comprehension of the game and understanding its principles, Check out the monopoly_emulator_rules.txt record in the GitHub repository",
  createEmbed("lnorLBd0CXQ"),
  undefined,
  "https://github.com/ibukun-koyer/monopoly-shell",
  "",
  createRunInfo(
    {
      header: "Cloning the directory",
      text: "To begin this process, we need to clone the repository from Github. To do this, copy the below code to:",
      code: "git clone https://github.com/ibukun-koyer/monopoly-shell",
    },
    {
      header: "Creating an output file",
      text: "To create an output file for this application, simply enter the below line of code into your terminal",
      code: "make",
    },
    {
      header: "Running the application",
      text: "To run the code with default animation speed, run the application by copying the below line of code up to the first whitespace. The numeric value after the first line simply tells the application how fast or slow you would want the animation to be, so chang the numeric values accordingly, for more information about this numeric value, check out the monopoly_emulator_rules.txt file",
      code: "./a.out 1000",
    },
    {
      header: "Removing all output files",
      text: "To remove all output files, simply execute the line of code below:",
      code: "make clean",
    }
  )
);
const Netflix = new ProjectInfo(
  "Netflix Clone",
  "Ibukun Adekoya",
  "30th June, 2021",
  ["React", "CSS", "Firebase"],
  "Netflix clone is an extremely straightforward application that attempts to mimic the visual appearance of the actual Netflix application. This clone was not intended to mirror all functionalities of the Netflix application, but rather, just a few of its functionalities. This straightforward application utilizes react components to make similar yet unique rows in the application and with assistance from plugins like react-YouTube, I had the option to make a trailer section on specific movies displayed showed in the application.",
  "Below is a live link demo to the application:",
  "https://netflix-clone-8d4f9.web.app/",
  absolutePath("netflixClone screenshot.PNG"),
  "https://github.com/ibukun-koyer/netflix-clone",
  "",
  createRunInfo(
    {
      header: "Accessing it online",
      text: "Since this application has been hosted online, you could simply access the below link. In the event that you utilize this step, you could skip the underneath steps. ",
      code: "https://netflix-clone-8d4f9.web.app/",
    },
    {
      header: "Cloning the directory",
      text: "To begin this process, we need to clone the repository from Github. To do this, copy the below code to:",
      code: "git clone https://github.com/ibukun-koyer/netflix-clone",
    },
    {
      header: "Installing dependencies",
      text: "Given that this is a node.js project, a package.json file would be included when you clone. Therefore installing dependencies would simply require you writing the below line into your terminal:",
      code: "npm i",
    },
    {
      header: "Executing the app",
      text: "After executing the above lines of code, you are now ready to start up the application. To start up the application, enter the below line of code into your terminal:",
      code: "npm start",
    },
    {
      header: "Viewing the app",
      text: "To view the application, simply visit the below link if the link isn't automatically opened:",
      code: "http://localhost:3000",
    }
  )
);
const Instagram = new ProjectInfo(
  "Instagram Login Page",
  "Ibukun Adekoya",
  "30th June, 2021",
  ["React", "CSS", "Firebase", "Adobe Photoshop"],
  "This is a simple application made utilizing react and adobe photoshop. While a large portion of the application was made using react, the phones on the page were edited and tidied up using photoshop to recreate the Instagram login page. However, the animations inside the subsequent telephone were made using CSS animation. ",
  "Below is a live link demo to the application:",
  "https://instagram-clone-13f87.web.app/",
  absolutePath("instaLoggin.PNG"),
  "https://github.com/ibukun-koyer/instagram_login",
  "",
  createRunInfo(
    {
      header: "Accessing it online",
      text: "Since this application has been hosted online, you could simply access the below link. If you use this step, you could skip the below steps",
      code: "https://instagram-clone-13f87.web.app/",
    },
    {
      header: "Cloning the directory",
      text: "To begin this process, we need to clone the repository from Github. To do this, copy the below code to:",
      code: "git clone https://github.com/ibukun-koyer/instagram_login",
    },
    {
      header: "Installing dependencies",
      text: "Given that this is a node.js project, a package.json file would be included when you clone. Therefore installing dependencies would simply require you writing the below line into your terminal:",
      code: "npm i",
    },
    {
      header: "Executing the app",
      text: "After executing the above lines of code, you are now ready to start up the application. To start up the application, enter the below line of code into your terminal:",
      code: "npm start",
    },
    {
      header: "Viewing the app",
      text: "To view the application, simply visit the below link if the link isn't automatically opened:",
      code: "http://localhost:3000",
    }
  )
);
const Covid = new ProjectInfo(
  "Covid Vis - Cali",
  "Ibukun Adekoya",
  "30th June, 2021",
  ["JS", "CSS", "HTML", "Node.js", "MySQL", "Python"],
  "This application was made with a group for a school project. The aim of this app is quite simple. Initially, given two datasets, where dataset 1 contains all the information about Coronavirus in Cali since day 1 of Coronavirus till date, and dataset 2 contains all the information about Coronavirus cases in cali penitentiaries since the beginning of Coronavirus till date. In the wake of getting this information, we then, at that point need to continue to clean up the datasets. Since python is known as quite possibly the most noticeable language for data science and machine learning, it will be a no-brainer to use something else other than python for the data clean up. After tidying up these two datasets, we then, at that point need to store them into our database, in which we utilized MySQL in our database layer. With these initial steps, we are finished instating the application, yet, at that point, recall that are data needs to be up-to-date, so we expected to get information from our source every time, thus, our system was at whatever point the server was restarted or at whatever point its 12am, the most recent data is gotten from the sources, accordingly resulting to a downtime during this periods since solicitations to the server will be inaccessible. After database update, clients are presently ready to query the database. The significant functionalities offered to these clients are, permitting clients to survey most recent information (one county at a time), permitting clients to search for a county themselves (one/multiple counties at a time), and permitting clients to pick a future date which results to the application having to make a prediction of what the data would resemble in said date (utilizing a XGBRegressor model). But what exactly does the application do with the queries? It takes the queries, which incorporate a/multiple counties and a solitary date and dependent on this inputs, several visualization charts are plotted to show the Coronavirus progression dependent on the date and furthermore shows the jails in area with their comparing Coronavirus activities.",
  "The below video demo walks you through the basic UI of the application showing you the frontend part of things in this application, to examine the database design or the backend construction of the application, look at the GitHub repository for more info. Note, as of composing this assessment, it has become obvious that one of the datasets utilized for this application has been brought down, so fetching automatically fails, however I hope to at least turn off fetching for this application, which implies that the information will be obsolete, yet that would permit likely viewers to have the option to run this application effectively on their end.",
  createEmbed("VNkQ2EFJf58"),
  undefined,
  "https://github.com/AriDern/CMSC447-Team12",
  "Please also note that this is a private repository, to be able to access this repository, please contact me.",
  createRunInfo(
    {
      header: "Cloning the directory",
      text: "To begin this process, we need to clone the repository from Github. To do this, copy the below code to:",
      code: "git clone https://github.com/AriDern/CMSC447-Team12",
    },
    {
      header: "MySQL Database",
      text: "Since this application makes use of MySQL database, to be able to run this, you would need to have mySQL installed on your computer. Be sure to create a .env file that has the following fields gotten from your database.",
      code: "HOST: <br>USER: <br>PASSWORD: <br>DATABASE: ",
    },
    {
      header: "Installing dependencies",
      text: "Given that this is a node.js project, a package.json file would be included when you clone. Therefore installing dependencies would simply require you writing the below line into your terminal:",
      code: "npm i",
    },
    {
      header: "Executing the app",
      text: "After executing the above lines of code, you are now ready to start up the application. To start up the application, enter the below line of code into your terminl:",
      code: "nodemon index.js",
    },
    {
      header: "Viewing the app",
      text: "To view the application, simply visit the below link:",
      code: "http://localhost:3000",
    }
  )
);
const Chess = new ProjectInfo(
  "Chess Clone",
  "Ibukun Adekoya",
  "30th June, 2021",
  ["JS", "CSS", "HTML", "Blender"],
  "This game of chess was created using vanilla js. To create a responsive webpage, i made use of the css grid system. As you would shortly discover, the application contains an image of a chess board and chess pieces, all of these assets were created myself using the popuar 3d application known as blender.  ",
  "Below is a live link demo to the application:",
  "https://chess-2d0bd.web.app/",
  absolutePath("chess screenshot.PNG"),
  "https://github.com/ibukun-koyer/chess",
  "",
  createRunInfo(
    {
      header: "Accessing it online",
      text: "Since this application has been hosted online, you could simply access the below link. If you use this step, you could skip the below steps",
      code: "https://chess-2d0bd.web.app/",
    },
    {
      header: "Cloning the directory",
      text: "To begin this process, we need to clone the repository from Github. To do this, copy the below code to:",
      code: "git clone https://github.com/ibukun-koyer/chess",
    },
    {
      header: "Viewing the app",
      text: "To view the application, simply search for the below file in the directory and open it",
      code: "index.html",
    }
  )
);
const MinorityProgrammingAssociation = new ProjectInfo(
  "Minority Programming Association",
  "Ibukun Adekoya",
  "7th July, 2021",
  ["React", "CSS"],
  "This react application was an application created as a part of an interview process. The test required me to create a custom home/landing page, but we were then given a figma diagram that showed me what the other pages would look like and we were given four business days to complete the project.",
  "Below is a live link demo to the application:",
  "https://nostalgic-brown-84a9ec.netlify.app",
  absolutePath("mpa.PNG"),
  "https://github.com/ibukun-koyer/Minority-Programmers-Front-End-Test",
  "",
  createRunInfo(
    {
      header: "Accessing it online",
      text: "Since this application has been hosted online, you could simply access the below link. In the event that you utilize this step, you could skip the underneath steps. ",
      code: "https://nostalgic-brown-84a9ec.netlify.app",
    },
    {
      header: "Cloning the directory",
      text: "To begin this process, we need to clone the repository from Github. To do this, copy the below code to:",
      code: "git clone https://github.com/ibukun-koyer/Minority-Programmers-Front-End-Test",
    },
    {
      header: "Installing dependencies",
      text: "Given that this is a node.js project, a package.json file would be included when you clone. Therefore installing dependencies would simply require you writing the below line into your terminal:",
      code: "npm i",
    },
    {
      header: "Executing the app",
      text: "After executing the above lines of code, you are now ready to start up the application. To start up the application, enter the below line of code into your terminal:",
      code: "npm start",
    },
    {
      header: "Viewing the app",
      text: "To view the application, simply visit the below link if the link isn't automatically opened:",
      code: "http://localhost:3000",
    }
  )
);
