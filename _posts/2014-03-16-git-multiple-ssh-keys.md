---
title: (Learn log) Use multiple ssh keys with git
layout: post
category : software
tags : [learning_log,git]
---
{% include JB/setup %}

I needed to create multiple ssh keys with github/ bitbucket accounts.

The steps i followed :

1. Create ~/.ssh/config file
2. Generate multiple identities (one for bitbucketwork, one for bitbucketpersonal)
	
	ssh-keygen -f ~/.ssh/bitbucketwork -C "bitbucketwork"
	repeat for bitbucketpersonal

3. Create a host entry for each identity

	Host bitbucketwork
	 HostName bitbucket.org
	 IdentityFile ~/.ssh/workdid
	Host bitbucketpersonal
	 HostName bitbucket.org
	 IdentityFile ~/.ssh/personalid

4. Change the git remote to use the correct alias of your identity

For example, i have a work repository, to make git use the work identity
	
	Before:

	git@bitbucket.org:accountname/reponame.git

	After:
	git@bitbucketwork:accountname/reponame.git


Where bitbucketwork is one of the Host alias previously created

5. Paste the public key in the bitbucket settings

	pbcopy < ~/.ssh/id_rsa.pub

6. Add the key(s) to the ssh agent with :
	
	ssh-add ~/.ssh/work

	( Note: Add to .bash_profile, otherwise you will  have to add the key everytime you open a terminal )




### References

[https://gist.github.com/jexchan/2351996]
[https://confluence.atlassian.com/pages/viewpage.action?pageId=271943168]





