---
title: Moving a VMWare Windows 7 virtual machine to VirtualBox in Mac
layout: post
category : development
tags : [android, build]
published: true
---

I'm very happy developing with my MacBook Air, even for heavy tasks like running the android emulator it works really well, i guess the solid state disk has a lot to do with it, i have a Windows 7 virtual machine with all the settings for .NET development, i wanted to try it in my mac .

The first thing i tried was looking for VMWare player for Mac but it doesn't exist so i tried with VirtualBox.

## Using the virtual hard drive.

In Virtual Box i started creating a new virtual machine and adding the .vmdk file that i copied from the VMWare virtual machine, this file has the hard drive contents.


## Solving boot errors

When i started the virtual machine in Virtual Box i got some boot errors and a blue screen, i spent some time and finally i could solve them doing the following:

1. Settings -> System: Activate the "Enable IO APIC" option
2. Settings -> Storage: Use a SAS Controller instead of SCSI or IDE

I deleted the default controller and added a SAS Controller for the hard drive. I'm not sure why this works but after doing that the Win7 machine started ok.




