(this.webpackJsonpxcalliburs_homepage=this.webpackJsonpxcalliburs_homepage||[]).push([[0],{11:function(e,t,a){e.exports={container:"layout_container__3sd1w",blue:"layout_blue__cUbwU",bluebackground:"layout_bluebackground__3uKDG",screenSize:"layout_screenSize__3gOS9",header:"layout_header__Denxm"}},17:function(e){e.exports=JSON.parse('[{"type":"GitHub","link":"https://github.com/Xcallibur8","username":"@Xcallibur8","icon":"fab fa-github","colors":"bg-gradient-to-tr from-green-500 to-green-800 hover:opacity-90"},{"type":"Steam","link":"https://steamcommunity.com/id/Xcallibur/","username":"Xcallibur","icon":"fab fa-steam","colors":"bg-gradient-to-tr from-blue-500 to-indigo-800 hover:opacity-90"},{"type":"Discord","link":"https://discord.com/channels/@me","username":"Xcallibur#5876","icon":"fab fa-discord","colors":"bg-gradient-to-tr from-indigo-600 to-purple-800 hover:opacity-90"},{"type":"Twitter","link":"https://twitter.com/xcallibur8","username":"@xcallibur8","icon":"fab fa-twitter","colors":"bg-gradient-to-tr from-pink-500 to-red-600 hover:opacity-85"},{"type":"Reddit","link":"https://reddit.com/u/xcallibur232","username":"xcallibur232","icon":"fab fa-reddit-alien","colors":"bg-gradient-to-tr from-red-500 to-orange-600 hover:opacity-85"},{"type":"Email","link":"mailto: xcal@xcal.dev","username":"xcal@xcal.dev","icon":"fas fa-envelope-open-text","colors":"bg-gradient-to-tr from-orange-400 to-yellow-600 hover:opacity-85"}]')},23:function(e,t,a){e.exports=a(34)},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),i=a.n(o),l=a(7),s=a(8),c=a(10),m=a(9),u=a(11),h=a.n(u),d=a(22),p=a(6);function f(e){var t=Object(n.useState)({width:window.innerWidth,height:window.innerHeight}),a=Object(d.a)(t,2),o=a[0],i=a[1];return r.a.useEffect((function(){function e(){i({height:window.innerHeight,width:window.innerWidth})}return window.addEventListener("resize",e),function(t){return window.removeEventListener("resize",e)}})),document.documentElement.style.setProperty("--top-spacing",o.height>=496?"100px":"50px"),r.a.createElement("div",{className:"z-10 outer-container overflow-hidden"},r.a.createElement("div",{className:"pl-0 lg:px-10 fixed top-0 min-w-full "+h.a.header},r.a.createElement("nav",{className:"flex items-center justify-between flex-wrap bg-white shadow-xl px-6 "+(o.height>=496?"py-6":"py-2")+" rounded-lg mx-auto"},r.a.createElement("div",{className:"mx-auto"},r.a.createElement(p.b,{to:"/"===e.dir?"#":"/"},r.a.createElement("div",{className:"mr-2 md:mr-4 flex items-center flex-shrink-0 text-white"},r.a.createElement("img",{className:(o.height>=496?"h-12 w-12 sm:h-16 sm:w-16":"h-10 w-10")+" rounded-full bg-blue-600 p-1 shadow-bluehover sm:mr-3",alt:"Xcallibur's Logo",src:"/profilerounded.png"}),r.a.createElement("span",{className:"pl-2 font-semibold text-2xl tracking-tight "+(o.height>=496?"text-sm sm:text-3xl text-center":"text-xs")+" "+h.a.blue},"Xcallibur's Homepage")))))))}var y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).updateDimensions=function(){n.setState({width:window.innerWidth,height:window.innerHeight})},n.state={width:window.innerWidth,height:window.innerHeight},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){return r.a.createElement("div",{className:"text-center flex items-center justify-between flex-col flex-wrap bg-gray-400 shadow-xl p-6 bottom-0"},r.a.createElement("div",{className:"flex items-center flex-shrink-0 text-white mx-auto"},r.a.createElement("span",{className:"font-semibold tracking-tight text-base "+h.a.blue},"\xa9 2020 Elliot M."+(this.state.width>=1024?" \u2022 ":""),this.state.width>=1024?r.a.createElement(r.a.Fragment,null):r.a.createElement("br",null),r.a.createElement("a",{href:"mailto: xcal@xcal.dev",target:"_blank",rel:"noopener noreferrer"},this.state.width>363?"Contact Me: ":"",r.a.createElement("span",{className:"hover:underline"},"xcal@xcal.dev")),r.a.createElement("br",null),r.a.createElement(p.b,{to:"/terms-of-service",className:"hover:underline"},"Terms of Service")," | ",r.a.createElement(p.b,{to:"/privacy-policy",className:"hover:underline"},"Privacy Policy"))))}}]),a}(r.a.Component),b=a(1),v=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.location.pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:h.a.screenSize},r.a.createElement("div",null,r.a.createElement(f,{dir:e})),r.a.createElement("div",{id:"page-wrap",className:h.a.container},r.a.createElement("main",null,this.props.children))),r.a.createElement("div",null,r.a.createElement(y,null)))}}]),a}(r.a.Component),g=Object(b.f)(v),E=a(17);function w(e){var t=[];for(var a in E){var n=E[a];t.push(r.a.createElement("a",{href:n.link,rel:"external noreferrer nofollow noopener",target:"_blank"},r.a.createElement("div",{className:"font-semibold active:scale-90 transition-all transform duration-300 rounded ".concat(n.colors)},r.a.createElement("div",{className:"text-xl md:text-2xl p-5 sm:grid sm:grid-cols-2"},r.a.createElement("div",{className:"text-white text-center sm:text-left"},r.a.createElement("i",{className:"".concat(n.icon," mx-2")}),r.a.createElement("span",{className:"ml-2"},n.type)),r.a.createElement("div",{className:"text-gray-300 text-center sm:text-right"},r.a.createElement("p",null,n.username))))))}return r.a.createElement("div",null,r.a.createElement("div",{className:"flex"},r.a.createElement("p",{className:"text-3xl sm:text-4xl font-bold mx-auto text-center"},"Hey, welcome to my homepage.")),r.a.createElement("p",{className:"text-center sm:text-lg font-semibold w-full sm:w-2/3 mt-2 mx-auto"},r.a.createElement("span",null,"If you haven't already gotten enough of Xcallibur in your life, here are some other places I live:")),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{class:"flex-none w-1/6 sm:w-1/5"}),r.a.createElement("div",{class:"flex-grow grid gap-y-3"},t),r.a.createElement("div",{class:"flex-none w-1/6 sm:w-1/5 "})))}var x=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"font-bold text-5xl"},"Privacy Policy"),r.a.createElement("i",null,"Last updated: September 14, 2020"),r.a.createElement("p",null,"This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You."),r.a.createElement("p",null,"We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy."),r.a.createElement("h1",{className:"font-bold text-4xl"},"Interpretation and Definitions"),r.a.createElement("h2",{className:"font-semibold text-3xl"},"Interpretation"),r.a.createElement("p",null,"The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."),r.a.createElement("h2",{className:"font-semibold text-3xl"},"Definitions"),r.a.createElement("p",null,"For the purposes of this Privacy Policy:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Company"),' (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Xcallibur\'s Homepage.')),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Country")," refers to: Texas,  United States")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Device")," means any device that can access the Service such as a computer, a cellphone or a digital tablet.")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Personal Data")," is any information that relates to an identified or identifiable individual.")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Service")," refers to the Website.")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Service Provider")," means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Usage Data")," refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Website")," refers to Xcallibur's Homepage, accessible from ",r.a.createElement("a",{className:"text-blue-700 font-bold hover:underline",href:"https://xcal.dev",rel:"external noreferrer nofollow noopener",target:"_blank"},"https://xcal.dev"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"You")," means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."))),r.a.createElement("h1",{className:"font-bold text-4xl"},"Collecting and Using Your Personal Data"),r.a.createElement("h2",{className:"font-semibold text-3xl"},"Types of Data Collected"),r.a.createElement("h3",{className:"font-bold text-xl"},"Personal Data"),r.a.createElement("p",null,"While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: Usage Data."),r.a.createElement("h3",{className:"font-bold text-xl"},"Usage Data"),r.a.createElement("p",null,"Usage Data is collected automatically when using the Service."),r.a.createElement("p",null,"Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data."),r.a.createElement("p",null,"When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data."),r.a.createElement("p",null,"We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device."),r.a.createElement("h2",{className:"font-semibold text-3xl"},"Use of Your Personal Data"),r.a.createElement("p",{className:"font-bold text-xl"},"The Company may use Personal Data for the following purposes:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{className:"font-semibold"}," - To provide and maintain our Service"),", including to monitor the usage of our Service."),r.a.createElement("li",null,r.a.createElement("span",{className:"font-semibold"}," - To manage Your requests:")," To attend and manage Your requests to Us.")),r.a.createElement("p",{className:"font-bold text-xl"},"We may share your personal information in the following situations:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{className:"font-semibold"}," - With Service Providers:")," We may share Your personal information with Service Providers to monitor and analyze the use of our Service."),r.a.createElement("li",null,r.a.createElement("span",{className:"font-semibold"}," - For Business transfers:")," We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company."),r.a.createElement("li",null,r.a.createElement("span",{className:"font-semibold"}," - With Affiliates:")," We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.")),r.a.createElement("h2",{className:"font-semibold text-3xl"},"Retention of Your Personal Data"),r.a.createElement("p",null,"The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies."),r.a.createElement("p",null,"The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods."),r.a.createElement("h2",{className:"font-semibold text-3xl"},"Transfer of Your Personal Data"),r.a.createElement("p",null,"Your information, including Personal Data, is processed at any place where the parties involved in the processing are located. It means that this information may be transferred to \u2014 and maintained on \u2014 computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction."),r.a.createElement("p",null,"Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer."),r.a.createElement("p",null,"The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information."),r.a.createElement("h2",{className:"font-semibold text-3xl"},"Disclosure of Your Personal Data"),r.a.createElement("h3",{className:"font-bold text-xl"},"Business Transactions"),r.a.createElement("p",null,"If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy."),r.a.createElement("h3",{className:"font-bold text-xl"},"Law enforcement"),r.a.createElement("p",null,"Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency)."),r.a.createElement("h3",{className:"font-bold text-xl"},"Other legal requirements"),r.a.createElement("p",null,"The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Comply with a legal obligation"),r.a.createElement("li",null,"Protect and defend the rights or property of the Company"),r.a.createElement("li",null,"Prevent or investigate possible wrongdoing in connection with the Service"),r.a.createElement("li",null,"Protect the personal safety of Users of the Service or the public"),r.a.createElement("li",null,"Protect against legal liability")),r.a.createElement("h2",{className:"font-semibold text-3xl"},"Security of Your Personal Data"),r.a.createElement("p",null,"The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security."),r.a.createElement("h1",{className:"font-semibold text-3xl"},"Your California Privacy Rights (California's Shine the Light law)"),r.a.createElement("p",null,"Under California Civil Code Section 1798 (California's Shine the Light law), California residents with an established business relationship with us can request information once a year about sharing their Personal Data with third parties for the third parties' direct marketing purposes."),r.a.createElement("p",null,"If you'd like to request more information under the California Shine the Light law, and if you are a California resident, You can contact Us using the contact information provided below."),r.a.createElement("h1",{className:"font-semibold text-3xl"},"California Privacy Rights for Minor Users (California Business and Professions Code Section 22581)"),r.a.createElement("p",null,"California Business and Professions Code section 22581 allow California residents under the age of 18 who are registered users of online sites, services or applications to request and obtain removal of content or information they have publicly posted."),r.a.createElement("p",null,"To request removal of such data, and if you are a California resident, You can contact Us using the contact information provided below."),r.a.createElement("p",null,"Be aware that Your request does not guarantee complete or comprehensive removal of content or information posted online and that the law may not permit or require removal in certain circumstances."),r.a.createElement("h1",{className:"font-bold text-4xl"},"Links to Other Websites"),r.a.createElement("p",null,"Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit."),r.a.createElement("p",null,"We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services."),r.a.createElement("h1",{className:"font-bold text-4xl"},"Changes to this Privacy Policy"),r.a.createElement("p",null,"We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page."),r.a.createElement("p",null,"You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."),r.a.createElement("h1",{className:"font-bold text-4xl"},"Contact Us"),r.a.createElement("p",null,"If you have any questions about this Privacy Policy, You can contact us by email: ",r.a.createElement("a",{className:"text-blue-700 font-bold hover:underline",href:"mailto: xcal@xcal.dev",target:"_blank",rel:"noopener noreferrer"},"xcal@xcal.dev")))}}]),a}(r.a.Component),Y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"font-bold text-5xl"},"Terms and Conditions"),r.a.createElement("i",null,"Last updated: September 14, 2020"),r.a.createElement("p",null,"Please read these terms and conditions carefully before using Our Service."),r.a.createElement("h1",{className:"font-bold text-4xl"},"Interpretation and Definitions"),r.a.createElement("h2",{className:"font-semibold text-3xl"},"Interpretation"),r.a.createElement("p",null,"The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."),r.a.createElement("h2",{className:"font-semibold text-3xl"},"Definitions"),r.a.createElement("p",null,"For the purposes of these Terms and Conditions:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Affiliate"),' means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.')),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Country")," refers to: Texas,  United States")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Company"),' (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Xcallibur\'s Homepage.')),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Device")," means any device that can access the Service such as a computer, a cellphone or a digital tablet.")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Service")," refers to the Website.")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Terms and Conditions"),' (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.')),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Third-party Social Media Service")," means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Website")," refers to Xcallibur's Homepage, accessible from ",r.a.createElement("a",{className:"text-blue-700 font-bold hover:underline",href:"https://xcal.dev",rel:"external noreferrer nofollow noopener",target:"_blank"},"https://xcal.dev"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"You")," means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."))),r.a.createElement("h1",{className:"font-bold text-4xl"},"Acknowledgment"),r.a.createElement("p",null,"These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service."),r.a.createElement("p",null,"Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service."),r.a.createElement("p",null,"By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service."),r.a.createElement("p",null,"You represent that you are within the age of majority within your jurisidiction, and that you are over the age of 13. The Company does not permit minors or those under 13 to use the Service."),r.a.createElement("p",null,"Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our ",r.a.createElement(p.b,{to:"/privacy-policy",className:"text-blue-700 font-bold hover:underline"},"Privacy Policy")," describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our ",r.a.createElement(p.b,{to:"/privacy-policy",className:"text-blue-700 font-bold hover:underline"},"Privacy Policy")," carefully before using Our Service."),r.a.createElement("h1",{className:"font-bold text-4xl"},"Links to Other Websites"),r.a.createElement("p",null,"Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company."),r.a.createElement("p",null,"The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services."),r.a.createElement("p",null,"We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit."),r.a.createElement("h1",{className:"font-bold text-4xl"},"Termination"),r.a.createElement("p",null,"We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions."),r.a.createElement("p",null,"Upon termination, Your right to use the Service will cease immediately."),r.a.createElement("h1",{className:"font-bold text-4xl"},"Limitation of Liability"),r.a.createElement("p",null,"Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 5 USD if You haven't purchased anything through the Service."),r.a.createElement("p",null,"To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose."),r.a.createElement("p",null,"Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law."),r.a.createElement("h1",{className:"font-bold text-4xl"},'"AS IS" and "AS AVAILABLE" Disclaimer'),r.a.createElement("p",null,'The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.'),r.a.createElement("p",null,"Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components."),r.a.createElement("p",null,"Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law."),r.a.createElement("h1",{className:"font-bold text-4xl"},"Governing Law"),r.a.createElement("p",null,"The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws."),r.a.createElement("h1",{className:"font-bold text-4xl"},"Disputes Resolution"),r.a.createElement("p",null,"If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company."),r.a.createElement("h1",{className:"font-bold text-4xl"},"For European Union (EU) Users"),r.a.createElement("p",null,"If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in."),r.a.createElement("h1",{className:"font-bold text-4xl"},"United States Legal Compliance"),r.a.createElement("p",null,'You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.'),r.a.createElement("h1",{className:"font-bold text-4xl"},"Severability and Waiver"),r.a.createElement("h2",{className:"font-semibold text-3xl"},"Severability"),r.a.createElement("p",null,"If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect."),r.a.createElement("h2",{className:"font-semibold text-3xl"},"Waiver"),r.a.createElement("p",null,"Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach."),r.a.createElement("h1",{className:"font-bold text-4xl"},"Translation Interpretation"),r.a.createElement("p",null,"These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute."),r.a.createElement("h1",{className:"font-bold text-4xl"},"Changes to These Terms and Conditions"),r.a.createElement("p",null,"We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion."),r.a.createElement("p",null,"By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service."),r.a.createElement("h1",{className:"font-bold text-4xl"},"Contact Us"),r.a.createElement("p",null,"If you have any questions about these Terms and Conditions, You can contact us by email: ",r.a.createElement("a",{className:"text-blue-700 font-bold hover:underline",href:"mailto: xcal@xcal.dev",target:"_blank",rel:"noopener noreferrer"},"xcal@xcal.dev")))}}]),a}(r.a.Component),S=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{basename:"/"},r.a.createElement(g,null,r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0,render:function(){return r.a.createElement(w,null)}}),r.a.createElement(b.a,{path:"/privacy-policy",exact:!0,render:function(){return r.a.createElement(x,null)}}),r.a.createElement(b.a,{path:"/terms-of-service",exact:!0,render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(b.a,null,r.a.createElement("div",{className:"text-center text-4xl font-bold"},"404, Not Found."))))))}}]),a}(r.a.Component);a(33);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.ccca0e37.chunk.js.map