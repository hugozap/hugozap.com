---
layout: post
category : emacs
tags : [emacs]
title: Learning Emacs project [Part 2]
---
{% include JB/setup %}

### Summary

I find some errors in my emacs config and try to solve them by modifying the .emacs file (using emacs), a small test of basic navigation, saving and locks.

---

Ok so I started emacs and I get some warning saying that something is wrong with the configuration. As suggested I start emacs with the --debug-init option.

The error says:

    void-variable viper-vi-global

So I looked and viper provides some vi emulation. I'm not interested in that and don't remember why I messed with that in the past or how it got there.

But I'm not interested in that so I will remove that plugin. But how?

...

I now remember that in my first attempt to learn emacs I installed a package called 'ace-jump' and pasted some setup on my .emacs file located on 
     /Users/myusername/.emacs


The culprit was this line I didn't pay attention to:

    ;;If you use viper mode :
    (define-key viper-vi-global-user-map (kbd "SPC") 'ace-jump-mode)
    ;;If you use evil

I deleted those lines using (from emacs!).  using the basic commands for movement (next/previous/forwared/backwards)

* C-n to move to next line (next)
* C-p to move to previous line (previous)
* C-b (backwards to previous character)
* C-f (forwards to next character)

Also C-v to jump to the next visible Screen

Not sure how to select text, tried Shift and right arrow to set a mark to highlight the paragraph and then Backspace. It worked.

How to delete the current line?
...googles...

    C-Shift Backspace

Google answer summary says that I can execute kill-whole-line command but I don't know how to run a command yet.

How to save the file? 
...googles...

    C-x s


This is a good time to search for a Cheat sheet. So I google and find this one that looks good. I'll print it:

[https://www.gnu.org/software/emacs/refcards/pdf/refcard.pdf](https://www.gnu.org/software/emacs/refcards/pdf/refcard.pdf)

Now I try to open a file from emacs

    C-x f

I can type the path, autocomplete works but I get a list of possible options that match the current path. (not visible here: emacs colors one letter of each option)

    In this buffer, type RET to select the completion near point.
    Possible completions are:
    .eclipse/                 .eclipse_keyring          .electron/
    .emacs                    .emacs.d/                 .emacs~

I assume RET is return? (I press Enter and it didn't work as expected, a new file with the partial name .em was created and I wanted to open .emacs ) I don't know yet how to manage buffers so I'm sure I'm doing something wrong.

So I repeat

    C-x f

But this time using just TAB to keep autocompleting until all the file name is written.

I open the file and need to search for some text.

    C-s let's you search forward

With the search the cursor is positioned on the line I need to delete. 
(For some reason C-S Backspace is not working here)

Another way to delete is (going to the beginning of the line and delete until end)

    C-a
    C-k

I did some characters erroneusly, let's look how to undo...

    C-x u

At this point I repeat the key combination and must have activated another commands because I'm now on other buffer. That's not what I want. abort mission (C-z) and try again.

I open emacs again, and when trying to save the file I get

    /Users/hugozap/.emacs locked by hugozap@hugoz... (pid 45537): (s, q, p, ?)?

What does those options mean? let's investigate...

From [http://www.gnu.org/software/emacs/manual/html_node/emacs/Interlocking.html](http://www.gnu.org/software/emacs/manual/html_node/emacs/Interlocking.html)

* s = Steal the lock
* p = Proceed
* q = quit

I use option 's' to steal the lock and then write the file with

    C-x s

Restart emacs and everything's ok (First Win)

### Next

From the quick documentation review I've done I keep finding tips like "Run this command", "set this variable", etc. I don't know how to do that yet, and will make a jump to understanding some of the basic Lisp for emacs now. 

