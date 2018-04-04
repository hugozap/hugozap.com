---
title: Sending and receiving dates from android/java/dotnet the easy way
layout: post
category : software
tags : [dotnet, java, android, mobile, date serialization]
published: true
---
{% include JB/setup %}

## The problem

Date serializing is not as easy as it sounds. If you are using JSON is possible that you will encounter problems with formats, time zone representation, etc. 

If you need to send and receive dates from the server to android you have to take this issues into account

Besides that, there is the timezone architecture decision. How will you store your dates?. Will you store everything in UTC? (I prefer this) or will you store the date and have separate columns to store timezone information ( works too but makes date handling more difficult ).

## Differences in parsers and formatters

I'm working on  a mobile application (Android) that sends and receives data from a .NET Backend.
At first i chose ISO Format to send and receive dates. Everything is stored as UTC and only converted to local time to display information to the user.

One problem i faced was that one part was sending the Z character and the other part didn't understand it. I checked the format strings and everything appeared ok.
After a little googling, i noticed that some APIs used unixtime format and i realized that this is the simplest way to handle it. And i like simplicity.

### Working with unix time stamps in android (java)
I decided to store the dates as unix time stamps and forget about date handling in sqlite, java, json, .net ( a lot of potential errors ). 
Dates will be sent and received as long values (no json hacks) and i had to have a way to convert those values to the native Date type in the server and client

(note: I use Gson as the Json serializar)

In java i have the following method utilities

{% highlight java %}

	public static long toUnixTime(Date d)
	{
		return d.getTime()/1000L;
	}
	
		public static Date FromUnixTime(long unix_time)
	{	
		Date date = new Date ();
		date.setTime(unix_time*1000);
		return date;
	}
{% endhighlight %}

With Gson one can create custom serializers/deserializers, that's what we want to send and receive the date as a number:

{% highlight java %}

public class UnixTimeSerializer implements JsonSerializer<Date> {
	@Override
	  public JsonElement serialize(Date src, Type typeOfSrc, JsonSerializationContext context) {

		JsonNull jnull = new JsonNull();
		if(src == null)
			return jnull;
		
	    return new JsonPrimitive(Utils.toUnixTime(src));
	  }
	}
	
public class UnixTimeDeserializer implements JsonDeserializer<Date> {
	@Override
	  public Date deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context)
	      throws JsonParseException {

		if(json.isJsonNull())
			  return null;
		  long unixstamp = json.getAsLong();		  
		  return ObassiDateUtils.FromUnixTime(unixstamp);
	  }
	}

	
{% endhighlight %}


	
And to setup the serializers i use the following code:
{% highlight java %}


Gson gson = new GsonBuilder().setDateFormat(ObassiDateUtils.isoFormat)
				.registerTypeAdapter(Date.class, new UnixTimeSerializer())
				.registerTypeAdapter(Date.class, new UnixTimeDeserializer())
				.create();
				
{% endhighlight %}

				
The json received from server contains the unix timestamp, however gson deserializes it into the class i select and populates the corresponding date fields.