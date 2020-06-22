<p align="center"><img src="https://git.hashmater.com/repository/vue-blog/images_public/readme_logo.png" width="400"></p>


## About #article - {Developers Journal}

To learn something you need something and when you need something we offer something that is #articles where others not like you offer something that exactly match the something that you need to learn. 
```
> in-short () {
    search(something){
        return ( found = DB::#articles()->match(something) ? found : 'we are sorry that we don't able to provide you that "something".
        if you find it let us know!'); 
    }
} 
```
If you also love coding or want to contribute in this project {I M READY TO HELP}!
Any Suggestion would be appreciated!

```
import vue-blog from '~#article'
export() default {
    project_status : 'currently under_development',
}
```
## PROJECT_STATUS
```
event occured <@> 9:37:00 PM 22.06.2020
```
Currently the Vue.js structure is as follows:
```
.
.
|
|-app.js
|-store.js // this needs more attention
|-bootstrap.js
|
|--|components|
|--|components|-Article : both ':' are similar but used in different modules like when user is authentication or not!
|--|components|-Card    :
|--|components|-CardContainer //this is just a wrapper or passer of data to {-|components|-Card}. this deserves an other identification!
|--|components|-FormAlert    //for error showing, but its not so readily-available to use as a component. Moreover, Error handling is currently the issue
|--|components|-HeaderProfile //header profile contains links to signin, register | user_info, logout it need some global modification of showing navbars activness changing
|--|components|-MediaObject //this is currently not used, just a {-|components|-SlideCard} helper!
|--|components|-NavigationBar //navigation bar ...
|--|components|-SlideCard //not currently used, just a corusal!
|
|  //interfaces are just like pages but it doesn't have nivagation bar | you can say its a standalone pages with less component! includes signin,signup,404,..
|--|interfaces|-AuthinWrapper // error showing need more time 
|--|interfaces|-AuthupWrapper // error showing need more time
|
|  //the structure inside braces needs major improvement in reusing the components or component dependencies on each other
|  {
|
|--|pages|-Index // must have a major role of defining the route but currently burried under sand!
|
|--|pages|-|guest|-Index //working showing public articles,posts
|--|pages|-|guest|-ViewArticle //working 
|--|pages|-|user|-Index // currently not decided what to show here
|--|pages|-|user|-ViewProfile // working needs more components 
|--|pages|-|user|-CreateArticle // working amazing need more ui elements 
|  
|  }
|
|  //Guardification of routes required
|
|--|router|-Index
.
.
```
```
event occured <@> 9:14:00 PM 22.06.2020
```

We have to create a pre-defined set of rules for getting and processing the data. Moreover, a global state has to be attached from all the components which is currenty not the case. We have to make :
1. Global Authentication Holder with guarded routes
2. Global Entities Getters,Mutators that will handled all the data we need with propers destruction when its not useful for better processing of things 
3. Improving Structure of components dependencies on one another

These three main tasks must fullfilled before moving on... but the situation is that it requires to re-wire,deep-constructing the whole project that cost time!

working on these tasks!

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
