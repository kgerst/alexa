## What You'll Need

*   An [Amazon Developer Account](https://developer.amazon.com)

![](https://cdn.hyperdev.com/681cc882-059d-4b05-a1f6-6cbc099cc79c%2FalexaBriefingSkill.png)

## Background

### How Alexa Apps Work

To get started, it's useful to know how Alexa apps work as there's some custom terminology that you need to know about. So Alexa is the name of the voice service that powers Amazon's Echo. Alexa provides capabilities, that Amazon terms Skills, which enable people to interact with devices using their voice. A skill could be the ability to play music, set an alarm or something else. Within each skill might be multiple actions - so the ability to play music might involve the actions of play, pause, skip etc.

Every action a skill can perform is called an [Intent](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-interaction-model-reference#intent-schema-syntax-json). It's a fitting name, because whilst there might be many ways a person could trigger that action - they might say “play X” or “I want to listen to X”, all of those requests have the same intent. So for all of the ways you can think of that someone might try to trigger the intent, you create what's known as an Utterance. The more utterances you define the better - it makes the interaction with Alexa seem more human. 

Utterances are flexible too - they have Slots, which are like variables, and you can use multiple slots in each utterance. There are a number of different slot types that are supported by Alexa by default, like dates, times and city names. But you can also [create your own](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-interaction-model-reference#slot-types). So you might say 'what will the horoscope for {Sign} be on {Date}', where Sign is a custom slot, and Date is a default slot. While this tutorial will not make use of slots, they are an important feature of Alexa development and are key to most projects.

Putting all of that together for our Tech Diversity Facts app: The Skill is the ability to get the facts, which has one intent, asking for a fact. That intent has multiple [utterances](https://wwcodetc-alexa-skill.gomix.me/diversityfacts?utterances), like 'tell me a fact' or 'tell me some trivia'. 

### How the Code Works

Start by [remixing this example project](https://gomix.com/#!/remix/alexa-skill/681cc882-059d-4b05-a1f6-6cbc099cc79c). The project leverages a couple of open source Node.js modules that make creating Alexa apps much easier. There's [alexa-app-server](https://github.com/matt-kruse/alexa-app-server/), implemented in `index.js`, that provides a stand-alone web server to host Alexa apps (Skills). It also provides a built-in Alexa App simulator that helps you to test your Skill in a web browser and view the responses before we hook it up to a test Echo service. It's instantiated in `examples/server.js`.

We also use [alexa-app](https://github.com/matt-kruse/alexa-app), which does the dirty work of interpreting JSON requests from Amazon and building the JSON response. This is done in `examples/apps/tech-diversity/index.js`, by creating an instance of alexa-app, known as `diversityfacts`. The intent and utterances are defined in that file too. Then how the app will respond to requests is setup, which leverages `FactHelper` in `examples/apps/tech-diversity/fact_helper.js`. This Fact Helper file currently stores an array of facts and chooses one at random for each response.

If you click 'Show' you'll see the contents of `examples/public_html/index.html`. And if you add /diversityfacts to the URL, you'll see the Alexa simulator. Try it out by selecting 'IntentRequest' from the Type drop-down and 'diversityfacts' from Intent. After clicking 'Send Request' you should see the response beneath it, giving you a random diversity fact.

![Request](https://cdn.gomix.com/f6b032ca-5352-4a61-aecc-a247badd2df3%2FRequest.png)

That's all fine, but let's get to the fun part - getting Alexa to say it!

## Set Up Your Alexa App

So what we need to do here is make Alexa aware of your app, and make it accessible to it. So go to [Amazon's developer site](https://developer.amazon.com/edw/home.html#/skills/list) (and create an account if you don't have one). Then under the 'Alexa' section, select 'Alexa Skills Kit' and from there click on 'Add a new Skill'.

*   #### 1\. Skill Information

    Select the 'Custom Interaction Model' option for 'Skill Type'. Give your app a name, say 'Tech Diversity Facts' and choose an invocation name - this is the name you say to Alexa to activate your skill, so 'Alexa ask InvocationName…'.
    
*   #### 2\. Interaction Model

    You want to specify your Intent Schema and Sample Utterances. Thankfully, this is made easy by alexa-app - there are end-points for the detail already. For Intent Schema copy and paste the output given at '[/diversityfacts?schema](https://wwcodetc-alexa-skill.gomix.me/diversityfacts?schema)'. Do the same for '[/diversityfacts?utterances](https://wwcodetc-alexa-skill.gomix.me/diversityfacts?utterances)', pasting that output into 'Sample Utterances.'
    
    ![AlexaSkillKitDashboard](https://cdn.gomix.com/f6b032ca-5352-4a61-aecc-a247badd2df3%2FAlexaSkillKitDashboard.png)

*   #### 3\. Configuration

    Under Endpoint, select 'HTTPS' and add your project's publish URL with '/diversityfacts' appended to it. This is the URL you get when clicking 'Show', and it'll have the format 'https://project-name.gomix.me'. So for our example app, it's 'https://wwcodetc-alexa-skill.gomix.me/diversityfacts'. Select 'no' for account linking.
    
*   #### 4\. SSL Certificate

    Select the option 'My development endpoint is a subdomain of a domain that has a wildcard certificate from a certificate authority' as we sort this for you.
    
*   #### 5-7\. Test, Publishing Information and Privacy

    Make sure your skill has testing enabled under 'Test' and enter metadata about your app under 'Publishing Information'. For now, you can just enter basic info and come back and change it later when you're ready to properly publish your app. Say 'no' to the privacy questions and check your agreement to their terms. Then you can click 'Save' and your app should be ready to test (you don't want to submit it for certification at this stage - that's just for when your app is ready to go).

### Testing Your Alexa App

To get the real impression of using an Amazon Echo, you can use [Echosim](https://echosim.io/). If you log in with your Amazon developer account, it'll automatically know about your app. So you can go ahead and click and hold the mic button and give Alexa a test command. Say 'Ask InvocationName tell me a fact'. Alexa should respond with a random fact. In your project, with the logs open, you can see the request coming in, the response being generated and sent back.

## Additional Notes

This project was remixed from the Gomix Alexa Airport Skill (https://alexa-skill.gomix.me) and features much of that projects original code, including most of the text included in this SETUP file

## Getting Help

You can see other example projects on our [Community Projects](https://gomix.com/community/) page. And if you get stuck, let us know on the [forum](http://support.gomix.com/) and we can help you out.

## Other Tutorials Worth Exploring

[Gomix Alexa Airport Skill](https://gomix.com/#!/project/alexa-skill)

[Gomix Star Wars Wiki Skill](https://gomix.com/#!/project/chewy)

[Amazon Space Geek Fact Skill using Alexa SDK and AWS Lambda](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/content/fact-skill-1)

[Alexa Trivia Skill using AWS Lambda](https://developer.amazon.com/blogs/post/TxDJWS16KUPVKO/new-alexa-skills-kit-template-build-a-trivia-skill-in-under-an-hour)