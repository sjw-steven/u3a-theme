<table>
	<tr>
		<th>
			Feeback
		</th>
		<th>
			Solution
		</th>
	</tr>
	<tr>
		<td>
			Report was very poor
		</td>
		<td>
			I rebuilt my report following the cited example. I have added full and
			detailed descriptions for each item. I describe what I did on this project
			in six areas, including<br><br>
            * Abstract <br>
            * Introduction <br>
            * Object  <br>
			* Conclusions <br>
            * References <br>
            * Appendix <br><br>
            Abstract describes the background of the times when this project was developed and why such a project was developed 
            <br><br>Introduction describes some technical details and implementation of this project and my efforts 
            <br><br>Conclusions describe what I got in this project and some opinions and conclusions 
            <br><br>References records the pictures, music resources and some video links I referenced in the project 
            <br><br>Appendix documents screenshots of the website
		</td>
	</tr>
	<tr>
		<td>
			About local enviroment
		</td>
		<td>
			I wrote a summary for the setup of the local environment I added the vagrant
			file to the github repository and added some descriptions for some key
			information.
            <br>
            <br>
            Local Environment Summary
            <br>
            <br>
In order to simulate the real production environment, we use vagrant to build a local environment, which can ensure the consistency of the local environment and the online environment to the greatest extent. On how to set up the vagrant environment, I have added a video link to the README.md to guide the installation. The first thing to do is to install and download vagrant from the official website, and the installation tool vitualbox to run the linux environment to download the image files required for vagrant, and use the command line to create a local environment and build the required software environment for wordpress in the configuration environment, such as php, mysql , nginx, etc.

After configuring vagrant:
Use "vagrant init centos7" to initialize the environment and you will get a Vagrantfile file
We need to make some changes to the Vagrantfile first, remove the comment from "config.vm.network "private_network", ip: "192.168.33.10", which means to create a private network for our virtual machine so that we can access it from the computer It is convenient to access the services in the virtual machine. Then we use the "vagrant up" command to run the virtual machine, and after running the virtual machine through "vagrant ssh", use the yum command inside the virtual machine to install the php/mysql/nginx software required by wordpress

In order to facilitate development and code submission, I choose phpstorm as the development tool. Configure version management in phpstorm, associate the local git warehouse with the github remote warehouse, and facilitate pushing the code to the remote github warehouse
		</td>
	</tr>
	<tr>
		<td>
			Site Design
		</td>
		<td>
Redesigned website's menu Added several "more" buttons

The redesigned menu background color is white and the font is black.
I completed the modification of the menu by modifying the content of lines 93-106 in the u3a/style.css file

Regarding CTAS, I added four "more" buttons to the homepage, which link to four different pages. The first three buttons choose the button with the same color because they are the same board, the last button has a unique design to match the board it is in
		</td>
	</tr>
	<tr>
		<td>
			Commit messages
		</td>
		<td>
I have reformatted the commit information according to the standard provided in the link
I added information like "Fix the menu error"
		</td>
	</tr>
</table>