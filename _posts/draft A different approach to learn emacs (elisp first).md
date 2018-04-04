# A different approach to learn emacs (elisp first)

At this point I'm still an emacs beginner , I know how to open and save a file, move to next screen and basic cursor navigation. Learning the "editor" features is important but I feel that spending a lot of time on those small and boring (but important!) tasks, could impact my motivation. I have to take another route. 

# A similar approach to learning to use a general purpose IDE

In the past when I have learn some IDE, I didn't learn all the editor menu items and options first, what worked for me was jumping in and creating a project, learn just the basics (run a program, basic debugging, etc) and focus on the thing I want to create. Gradually I would learn the important options. There's always more stuff that one actually needs, and every developer uses a different set of options. That's why for me it's a better idea to learn the set of features related to the use you will give to the tool, and doing it on demand sounds more natural for me.

# Time for emacs lisp.

I started to read this emacs lisp guide for beginners [https://www.gnu.org/software/emacs/manual/html_mono/eintr.html](https://www.gnu.org/software/emacs/manual/html_mono/eintr.html) I'ts very beginner friendly and although it has a warning for expert developers I found it easy to follow.


So it's possible to evaluate an elisp expression in any buffer with:
    
    C-x C-e

So if i need to do a quick calculation I can evaluate:

    (* 3500 28)

And it will display the result in the bottom area, nice.

I have some questions to explore and learn from there:

* How can I write a function that inserts some fixed text at the cursor position?
* How could I ask for user parameters and have a basic "snippet" feature? ( I'm sure there are sophisticated snippet features/plugins, I want to test the waters and experiment by myself)


