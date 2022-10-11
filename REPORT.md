# CP3402  ASSIGNMENT 2

## author: jingwen shi

# Directory

* Abstract
* Introduction
* Object
* Conclusions
* References
* Appendix

More and more people use the Internet to communicate and transport, and the elderly are no exception. With the
development and application of the Internet, making friends has become easier and more convenient, and it is very common
to build friends platforms on the Internet.

# Introduction

cp3402 Content Management Systems is our coursework in school. Its main task is to use the wordpress system Build a
personalized promotion website for the platform to help the elderly in the community communicate and communicate study
together. For this project, I first read all the relevant materials as a whole to determine the theme of the website,
and use github projects to divide all the tasks to decide what I need to do first. First, a local development
environment based on vagrant is necessary, I use it as the basis for development, then I create a code repository in
github, and I use phpstorm to edit and submit the code to the github repository. I set up a webhook interface for the
github code repository. After configuring the web production environment in aws, I connected it to the webhook. So far,
the complete environment has been set up. Through design analysis, I used the neve theme in wordpress as the initial
theme to start building the design. subtopic. When a feature is completed, I use phpstorm to submit the code to the
github repository, and at the end I write documentation and reports for my work

# Object

Local Environment Summary

In order to simulate the real production environment, we use vagrant to build a local environment, which can ensure the consistency of the local environment and the online environment to the greatest extent. On how to set up the vagrant environment, I have added a video link to the README.md to guide the installation. The first thing to do is to install and download vagrant from the official website, and the installation tool vitualbox to run the linux environment to download the image files required for vagrant, and use the command line to create a local environment and build the required software environment for wordpress in the configuration environment, such as php, mysql , nginx, etc.

After configuring vagrant:
Use "vagrant init centos7" to initialize the environment and you will get a Vagrantfile file
We need to make some changes to the Vagrantfile first, remove the comment from "config.vm.network "private_network", ip: "192.168.33.10", which means to create a private network for our virtual machine so that we can access it from the computer It is convenient to access the services in the virtual machine. Then we use the "vagrant up" command to run the virtual machine, and after running the virtual machine through "vagrant ssh", use the yum command inside the virtual machine to install the php/mysql/nginx software required by wordpress

In order to facilitate development and code submission, I choose phpstorm as the development tool. Configure version management in phpstorm, associate the local git warehouse with the github remote warehouse, and facilitate pushing the code to the remote github warehouse

In this project, I independently completed all the processes of website design, deployment, documentation, etc. The
following technologies were used in the project:

* vagrant (2.3.0) ---- create virtualized environment, I use it to simulate production environment

* vagrant box link ---- https://cloud.centos.org/centos/7/vagrant/x86_64/images/CentOS-7-x86_64-Vagrant-2004_01.VirtualBox.box

* centos (7.3) ----- Free and open source operating system, I can use the centos system to build a web server and build
  a website that can be browsed all over the world

* php (8.1) --- programming language, I use php to write U3A's promotional website

* mysql (5.7.30) --- data storage software, I use mysql as the database storage management center of the website

* nginx (1.2.0) --- Web server, using Nginx as the running carrier of web pages

* git (2.37.1) --- version control tool, I use git as a code version control management tool

* Amazon Web Services (AWS) -- I'm comfortable using aws as a place to publish a hosted website

* wordpress (6.1) --- I can use wordpress with its theme template to quickly build a personalized website

* phpstorm --- I use phpstorm as a tool for editing code, and it can be combined with git to easily submit local code to
  github

# Conclusions

In this project, I think the most important part should be the design part of the entire website, because various
technologies and instructions can be easily searched online, but the display effect of the design ideas of the entire
website needs to be carefully displayed by individuals. Analysis requires thinking from the user's point of view to
explore the overall structure of the entire website from the user's point of view. Secondly, what we need to master in
this project is not only the use of one technology but the integration of multiple technologies, the combination of
github and github projects, the combination of vagrant and images, etc. It turns out that developing a website
independently is laborious and time-consuming. Fortunately, we have learned a lot of modern technologies in school, and
through systematic study of these technologies, we have reached the level of proficient use. Looking back when
developing a website, you will find that these technologies are all necessary to develop a current website, each of
which is crucial.

# References

1.music icon (Music icons used in web pages)

https://www.iconfont.cn/search/index?searchType=icon&q=%E9%9F%B3%E4%B9%90&page=7

2.bg music (Background music used in web pages)

https://www.kuwo.cn/play_detail/174152424

3.How to add,install and run CentOS 7 Vagrant box to Virtualbox using Vagrant

https://www.youtube.com/watch?v=Hgsn6wpbqsE

4.Omegalabs | How To Install Linux, Nginx, MySQL, PHP (LEMP) Stack On CentOS 7/RHEL 7

https://www.youtube.com/watch?v=raMCF-xXVNI

# Appendix
Local Server HomePage
![img.png](http://wordpressu3a-env.eba-eh2qpx9d.us-east-1.elasticbeanstalk.com/wp-content/uploads/2022/10/1-1.jpg)


Aws Server Page
![img.png](http://wordpressu3a-env.eba-eh2qpx9d.us-east-1.elasticbeanstalk.com/wp-content/uploads/2022/10/2.jpg)
![img.png](http://wordpressu3a-env.eba-eh2qpx9d.us-east-1.elasticbeanstalk.com/wp-content/uploads/2022/10/3.jpg)
![img.png](http://wordpressu3a-env.eba-eh2qpx9d.us-east-1.elasticbeanstalk.com/wp-content/uploads/2022/10/4.jpg)
![img.png](http://wordpressu3a-env.eba-eh2qpx9d.us-east-1.elasticbeanstalk.com/wp-content/uploads/2022/10/5.jpg)