(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{253:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#api-support"}},[t._v("API Support")]),s("ul",[s("li",[s("a",{attrs:{href:"#defining-permissions"}},[t._v("Defining Permissions")])]),s("li",[s("a",{attrs:{href:"#authorizing-incoming-requests"}},[t._v("Authorizing Incoming Requests")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"api-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-support"}},[t._v("#")]),t._v(" API Support")]),t._v(" "),s("p",[t._v("Jetstream includes first-party integration with "),s("a",{attrs:{href:"https://laravel.com/docs/sanctum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Sanctum"),s("OutboundLink")],1),t._v(". Laravel Sanctum provides a featherweight authentication system for SPAs (single page applications), mobile applications, and simple, token based APIs. Sanctum allows each user of your application to generate multiple API tokens for their account. These tokens may be granted abilities / permissions which specify which actions the tokens are allowed to perform.")]),t._v(" "),s("p",[t._v("For more information on Sanctum and to learn how to issue requests to a Sanctum authenticated API, please consult the official "),s("a",{attrs:{href:"https://laravel.com/docs/sanctum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sanctum documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v('By default, the API token creation panel may be accessed using the "API" link of the top-right user profile dropdown menu. From this screen, users may create Sanctum API tokens that have various permissions.')]),t._v(" "),s("h3",{attrs:{id:"defining-permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defining-permissions"}},[t._v("#")]),t._v(" Defining Permissions")]),t._v(" "),s("p",[t._v("The permissions available to API tokens are defined using the "),s("code",[t._v("Jetstream::permissions")]),t._v(" method within your application's "),s("code",[t._v("JetstreamServiceProvider")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("Jetstream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultApiTokenPermissions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'read'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nJetstream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("permissions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'create'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'read'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'update'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'delete'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("defaultApiTokenPermissions")]),t._v(" method may be used to specify which permissions should be selected by default when creating a new API token. Of course, a user may uncheck a default permission before creating the token.")]),t._v(" "),s("h3",{attrs:{id:"authorizing-incoming-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorizing-incoming-requests"}},[t._v("#")]),t._v(" Authorizing Incoming Requests")]),t._v(" "),s("p",[t._v("Every request made to your Jetstream application, even to authenticated routes within your "),s("code",[t._v("routes/web.php")]),t._v(" file, will be associated with a Sanctum token object. You may determine if the associated token has a given permission using the "),s("code",[t._v("tokenCan")]),t._v(" method provided by the "),s("code",[t._v("Laravel\\Jetstream\\HasApiTokens")]),t._v(" trait. This trait is automatically applied to your application's "),s("code",[t._v("User")]),t._v(" model:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tokenCan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'read'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("When a user makes a request to a route within your "),s("code",[t._v("routes/web.php")]),t._v(" file, the request will typically be authenticated by Sanctum through a cookie based "),s("code",[t._v("web")]),t._v(" guard. Since the user is making a first-party request through the application UI in this case, the "),s("code",[t._v("tokenCan")]),t._v(" method will always return "),s("code",[t._v("true")]),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);