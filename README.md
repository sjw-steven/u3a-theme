# u3a-theme

An wordpress child theme

# Theme Devlopment

In the theme directory there are the following files

    u3a:

    audio - store the background music file melody-of-nature-main.mp3

    font - The external font file used to store the website contains two fonts, 
    Aboreto for font styles such as headings, and Manrope for content font styles

    images - store the music icon file music.png used by the website

    functions.php - style files for importing child themes and custom js files

    style.css - The content of the sub-theme style modification, the sub-theme modification mainly adds a variety of animations, 
    font style modification, cover content effect adjustment, and the addition of background music and quick navigation functions

    u3a.js - The function code added by the sub-theme includes the function of playing background music and the function of quick top navigation
    
    listen.php - Listen for messages pushed by webhook and call pull.sh

    pull.sh.bak - Execute a shell script that pulls the latest code from the github repository

    README.md - Documentation about the subject code and the required environment and modification methods

Child Theme Modification Guidelines:

    The modification of the theme html style code can be edited and modified in style.css. 

    If you want to add personalized functions or JavaScript interaction, you can edit and modify it in u3a.js.

    In functions.php, you can customize js or css external style file, and add function code.

    If you want to modify the web page structure of the parent theme, you need to add the corresponding php file,
    enter the header.ph/index.php and other files, and edit the code in the file will overwrite the corresponding parent theme location code

# Deployment

Local Environment Summary

In order to simulate the real production environment, we use vagrant to build a local environment, which can ensure the
consistency of the local environment and the online environment to the greatest extent. For how to build a vagrant
environment, I have added a video link to guide the installation in README.md. The first thing to do is to install and
download vagrant from the official website, as well as install the tool vitrualbox to run the linux environment download
the image file required by vagrant, and use the command line to create a local environment and build the required
software environment for wordpress in the configured environment, such as php, mysql, nginx, etc. In order to facilitate
the development and submission of code, I choose phpstorm as the development tool. Configure version management in
phpstorm and associate the local git repository with the github remote repositoryto easily push the code to the remote
github repository

For the construction process, refer to the following link:

1. https://www.youtube.com/watch?v=Hgsn6wpbqsE
2. https://www.youtube.com/watch?v=raMCF-xXVNI

After the development environment is built, you need to use git to pull the code to the local to build the local
development environment. After creating a directory folder locally, enter the command interface and execute the
following commands:

    1, git init - create a git local library in the local directory
    2. git remote add origin main https://github.com/sjw-steven/u3a-theme.git - Add a remote repository
    3. git pull origin main - pull the main branch code of the remote warehouse
    4. git add some file - add file modifications to the staging area
    5. git commit -m 'modification description' - add a comment description for the modification
    6. git push pushes local changes to remote branches

Configure the webhook in the setting interface of the github repository. After the local push is submitted to the github
server, it will request the link left in the webhook configuration. This link is to perform corresponding operations
after monitoring the github push message in our server.

In the server, git init is also used to create a local warehouse, and the code is pulled from the remote warehouse.
After the server receives the push message, the webhook accesses the listen.php file in the server, and uses the exec
command in the listen file to execute the shell command to pull. The latest code in the github repository can
automatically deploy the code to the production environment after pushing the modification locally