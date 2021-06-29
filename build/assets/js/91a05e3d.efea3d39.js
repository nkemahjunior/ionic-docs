(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[81535],{81710:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var o=t(22122),i=t(19756),r=(t(67294),t(3905)),a={},l={unversionedId:"vue/troubleshooting",id:"vue/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"This guide covers some of the more common issues you may run into when developing with Ionic Vue.",source:"@site/docs/vue/troubleshooting.md",sourceDirName:"vue",slug:"/vue/troubleshooting",permalink:"/docs/vue/troubleshooting",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/vue/troubleshooting.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Testing",permalink:"/docs/vue/testing"},next:{title:"Vue Performance",permalink:"/docs/vue/performance"}},s=[{value:"Failed to resolve component",id:"failed-to-resolve-component",children:[]},{value:"Slot attributes are deprecated",id:"slot-attributes-are-deprecated",children:[]},{value:"Method on component is not a function",id:"method-on-component-is-not-a-function",children:[]},{value:"Page transitions are not working",id:"page-transitions-are-not-working",children:[]}],u={toc:s};function p(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide covers some of the more common issues you may run into when developing with Ionic Vue."),(0,r.kt)("p",null,"Have an issue that you think should be covered here? ",(0,r.kt)("a",{href:"https://github.com/ionic-team/ionic-docs/issues/new?assignees=&labels=content&template=content-issue.md&title=",target:"_blank",rel:"noopener"},"Let us know!")),(0,r.kt)("h2",{id:"failed-to-resolve-component"},"Failed to resolve component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[Vue warn]: Failed to resolve component: ion-button \n")),(0,r.kt)("p",null,"If you see this warning, then it is likely you did not import your component from ",(0,r.kt)("inlineCode",{parentName:"p"},"@ionic/vue"),". By default, all Ionic Vue components are locally registered, meaning you need to import them each time you want to use them."),(0,r.kt)("p",null,"Without importing the component, you will only get the underlying Web Component, and Vue-specific features such as ",(0,r.kt)("inlineCode",{parentName:"p"},"v-model")," will not work."),(0,r.kt)("p",null,"To resolve this issue, you need to import the component from ",(0,r.kt)("inlineCode",{parentName:"p"},"@ionic/vue")," and provide it to your Vue component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <ion-button>Hello World</ion-button>\n</template>\n\n<script lang=\"ts\">\n  import { IonButton } from '@ionic/vue';\n  import { defineComponent } from 'vue';\n  \n  export default defineComponent({\n    components: { IonButton }\n  });\n<\/script>\n")),(0,r.kt)("p",null,"Prefer to register your components globally once? We have you covered. Our ",(0,r.kt)("a",{parentName:"p",href:"./quickstart#optimizing-your-build"},"Optimizing Your Build Guide")," shows you how to register Ionic Vue components globally as well as the potential downsides to be aware of when using this approach."),(0,r.kt)("h2",{id:"slot-attributes-are-deprecated"},"Slot attributes are deprecated"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"`slot` attributes are deprecated  vue/no-deprecated-slot-attribute\n")),(0,r.kt)("p",null,"The slots that are used in Ionic Vue are ",(0,r.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots",target:"_blank",rel:"noopener"},"Web Component slots"),", which are different than the slots used in Vue 2. Unfortunately, the APIs for both are very similar, and your linter is likely getting the two confused."),(0,r.kt)("p",null,"All Ionic Vue starters ship with this rule turned off, but you can do it yourself by adding the following to your ",(0,r.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  rules: {\n    'vue/no-deprecated-slot-attribute': 'off'\n  }\n}\n")),(0,r.kt)("p",null,"If you are using VSCode and have the Vetur plugin installed, you are likely getting this warning because of Vetur, not ESLint. By default, Vetur loads the default Vue 3 linting rules and ignores any custom ESLint rules."),(0,r.kt)("p",null,"To resolve this issue, you will need to turn off Vetur's template validation with ",(0,r.kt)("inlineCode",{parentName:"p"},"vetur.validation.template: false"),". See the ",(0,r.kt)("a",{href:"https://vuejs.github.io/vetur/guide/linting-error.html#linting",target:"_blank",rel:"noopener"},"Vetur Linting Guide")," for more information."),(0,r.kt)("h2",{id:"method-on-component-is-not-a-function"},"Method on component is not a function"),(0,r.kt)("p",null,"In order to access a method on an Ionic Framework component in Vue, you will need to access the underlying Web Component instance first:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u2705 This is correct\nionContentRef.value.$el.scrollToBottom(); \n\n// \u274c This is incorrect and will result in an error.\nionContentRef.value.scrollToBottom(); \n")),(0,r.kt)("p",null,"In other framework integrations such as Ionic React, this is not needed as any ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," you provide is automatically forwarded to the underlying Web Component instance. We are unable to do the same thing here due to limitations in how Vue manages refs."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"./quickstart#calling-methods-on-components"},"Quickstart Guide")," for more information."),(0,r.kt)("h2",{id:"page-transitions-are-not-working"},"Page transitions are not working"),(0,r.kt)("p",null,"In order for page transitions to work correctly, each page must have an ",(0,r.kt)("inlineCode",{parentName:"p"},"ion-page")," component at the root:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <ion-page>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Home</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding\">Hello World</ion-content>\n  </ion-page>\n</template>\n\n<script lang=\"ts\">\n  import { \n    IonContent, \n    IonHeader,\n    IonPage,\n    IonTitle,\n    IonToolbar\n  } from '@ionic/vue';\n  import { defineComponent } from 'vue';\n  \n  export default defineComponent({\n    components: {\n      IonContent, \n      IonHeader,\n      IonPage,\n      IonTitle,\n      IonToolbar\n    }\n  });\n<\/script>\n")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"./navigation#ionpage"},"IonPage documentation")," for more information."))}p.isMDXComponent=!0}}]);