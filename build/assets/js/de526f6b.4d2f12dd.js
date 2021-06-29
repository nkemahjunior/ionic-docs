(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[73048],{16239:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(22122),a=n(19756),o=n(86010),s=n(67294),r="docsButton_2Emz",l="docsButtonRound_3i9G";function c(e){var t,n=e.href,c=e.round,u=void 0!==c&&c,p=(0,a.Z)(e,["href","round"]);return p.className=(0,o.Z)(((t={})[p.className]=Boolean(p.className),t[r]=!0,t["docs-button"]=!0,t[l]=u,t["docs-button--round"]=u,t)),n?s.createElement("a",(0,i.Z)({href:n,className:"docsButton"},p),p.children):s.createElement("button",(0,i.Z)({className:"docsButton"},p),p.children)}},18464:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var i=n(22122),a=n(19756),o=(n(67294),n(3905)),s=n(28312),r=n(16239),l=n(41395),c=n(58215),u=n(81840),p={title:"Deeplinks"},d={unversionedId:"native/plugins/deeplinks",id:"native/plugins/deeplinks",isDocsHomePage:!1,title:"Deeplinks",description:"This plugin handles deeplinks on iOS and Android for both custom URL scheme links",source:"@site/docs/native/plugins/deeplinks.md",sourceDirName:"native/plugins",slug:"/native/plugins/deeplinks",permalink:"/docs/native/plugins/deeplinks",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/deeplinks.md",version:"current",frontMatter:{title:"Deeplinks"},sidebar:"native",previous:{title:"DB Meter",permalink:"/docs/native/plugins/db-meter"},next:{title:"Device Accounts",permalink:"/docs/native/plugins/device-accounts"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],h={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This plugin handles deeplinks on iOS and Android for both custom URL scheme links\nand Universal App Links."),(0,o.kt)("p",null,"Please read the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic-plugin-deeplinks"},"ionic plugin deeplinks docs")," for iOS and Android integration.\nYou must add ",(0,o.kt)("inlineCode",{parentName:"p"},"universal-links")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},"config.xml")," and set up Apple App Site Association (AASA) for iOS and Asset Links for Android."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/ionic-team/ionic-plugin-deeplinks",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/ionic-team/ionic-plugin-deeplinks")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(s.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(r.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(l.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install ionic-plugin-deeplinks ","\n","$ npm install @ionic-native/deeplinks ","\n","$ ionic cap sync")),(0,o.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add ionic-plugin-deeplinks ","\n","$ npm install @ionic-native/deeplinks ","\n")),(0,o.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"Browser"),(0,o.kt)("li",{parentName:"ul"},"iOS")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Deeplinks } from '@ionic-native/deeplinks/ngx';\n\nconstructor(private deeplinks: Deeplinks) { }\n\nthis.deeplinks.route({\n     '/about-us': AboutPage,\n     '/universal-links-test': AboutPage,\n     '/products/:productId': ProductPage\n   }).subscribe(match => {\n     // match.$route - the route we matched, which is the matched entry from the arguments to route()\n     // match.$args - the args passed in the link\n     // match.$link - the full link data\n     console.log('Successfully matched route', match);\n   }, nomatch => {\n     // nomatch.$link - the full link data\n     console.error('Got a deeplink that didn\\'t match', nomatch);\n   });\n")),(0,o.kt)("p",null,"Alternatively, if you're using Ionic, there's a convenience method that takes a reference to a ",(0,o.kt)("inlineCode",{parentName:"p"},"NavController")," and handles\nthe actual navigation for you:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"this.deeplinks.routeWithNavController(this.navController, {\n  '/about-us': AboutPage,\n  '/products/:productId': ProductPage\n}).subscribe(match => {\n    // match.$route - the route we matched, which is the matched entry from the arguments to route()\n    // match.$args - the args passed in the link\n    // match.$link - the full link data\n    console.log('Successfully matched route', match);\n  }, nomatch => {\n    // nomatch.$link - the full link data\n    console.error('Got a deeplink that didn\\'t match', nomatch);\n  });\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic2-deeplinks-demo/blob/master/app/app.ts"},"Ionic Deeplinks Demo")," for an example of how to\nretrieve the ",(0,o.kt)("inlineCode",{parentName:"p"},"NavController")," reference at runtime."))}k.isMDXComponent=!0}}]);