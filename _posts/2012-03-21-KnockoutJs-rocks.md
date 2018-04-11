---
title: KnockoutJS rocks for web development
layout: post
category : software
tags : [javascript, frontend, knockoutjs]
published: true
---

I'm working on my second project using [KnockoutJS](www.knockoutjs.com) and it has saved me a lot of time with the benefit of keeping my clientside code organized. I have enjoyed frontend development since i learned javascript and jquery and knockoutjs makes it more fun to build Web applications. The reason is that i can focus on the client logic and forget about dealing with dom elements updates.


## The problem that knockoutjs solves.

I love JavaScript and find JQuery very useful , however i don't like plumbing code specially when dealing with updating DOM elements from model properties or visceversa.  Even trivial applications can benefit from a databinding mechanism like the one knockoutjs offers.


( trivial example )
suppose you need to create a web application that captures two fields FIELD1 and FIELD2 using input elements and display the sum of both elements whenever one of them changes.

Normally you would have the following steps:
* Create a js method called recalculateSum that executes the business logic (adding 2 numbers)
* Capture the change event of FIELD1 and FIELD2 and recalculate the result
* Display the result in some DOM Element

[check the demo (without knockoutjs) here](http://jsbin.com/uhojek/4/edit#javascript,html,live)
The html 
{% highlight html+php %}
<body>
  Field 1
  <input type="text" name="field1" id="field1"/>
  Field 2
  <input type="text" name="field2" id="field2"/>
  Really complex operation result:
  <span id="result"/>
</body>
{% endhighlight %}

The javascript (using only jquery)
{% highlight js %}
$(function(){
  //When field1 or field2 changes capture the values
  //recalculate result and update the result element
  $("#field1,#field2").change(function(){
    var field1 =  Number($("#field1").val());
    var field2 = Number($("#field2").val());
    var result = recalculateResult(field1,field2);  
    $("#result").text(result);
  });  
});

function recalculateResult(val1,val2)
{
  return val1+val2;
}

{% endhighlight %}


Now let's see how we can create the example with knockoutjs.
[Check the code using knockoutjs here](http://jsbin.com/ucowot/2/edit)

{% highlight js %}
var Model = function(){
  var self=this;
  this.field1=ko.observable(0);
  this.field2=ko.observable(0);
  this.result=ko.computed(function(){
        return Number(self.field1())+Number(self.field2());
      }
  );
};


$(function(){
  ko.applyBindings(new Model());
});

{% endhighlight %}


Note that with knockout we don't have to reference the html elements in our javascript code. We also don't have to update manually the text of the span element that displays the result. This is possible because we created a computed value and let knockoutjs handle the update of the element whenever field1 or field2 change.

The binding is really easy, we use the attribute data-bind

{% highlight html %}
 <input type="text" name="field1" id="field1" data-bind="value:field1"/>
{% endhighlight %}

Knockout uses the concept of observables so it can track changes in the values and update the corresponding html element, it also handle the common change events in form elements and update the observable value.


