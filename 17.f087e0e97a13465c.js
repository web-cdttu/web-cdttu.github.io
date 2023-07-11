"use strict";(self.webpackChunkweb_cdttu_github_io=self.webpackChunkweb_cdttu_github_io||[]).push([[17],{6017:(R,c,o)=>{o.r(c),o.d(c,{NewsModule:()=>F});var a=o(4755),u=o(2753),w=o(5003),e=o(9523);function f(n,s){if(1&n&&(e.TgZ(0,"div",7),e._UZ(1,"img",8),e.TgZ(2,"div",9),e._uU(3),e.qZA()()),2&n){const t=s.$implicit;e.Q6J("routerLink","/tin-tuc/"+(null==t?null:t.path)),e.xp6(3),e.hij(" ",null==t?null:t.label," ")}}let g=(()=>{class n{constructor(){this.menu=w.s.find(t=>"/tin-tuc"==t.path)?.children}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-news"]],decls:10,vars:1,consts:[[1,"container"],[1,"flex","flex-wrap"],[1,"w-full","lg:w-80","h-fit","static","lg:sticky","top-[42px]"],[1,"w-full","h-fit","bg-[#f3f4e3]","p-5","rounded-b"],[1,"text-xl","text-primary","text-center","font-semibold"],["class","w-full h-auto relative cursor-pointer",3,"routerLink",4,"ngFor","ngForOf"],[1,"flex-1","px-0","lg:px-5"],[1,"w-full","h-auto","relative","cursor-pointer",3,"routerLink"],["src","assets/images/red-frame.svg","alt","red-frame"],[1,"absolute","top-0","right-0","bottom-0","left-0","flex","justify-center","items-center","text-[#c90b0a]","font-semibold"]],template:function(t,i){1&t&&(e.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4),e._uU(6," TIN T\u1ee8C "),e.qZA(),e.YNc(7,f,4,2,"div",5),e.qZA()(),e.TgZ(8,"div",6),e._UZ(9,"router-outlet"),e.qZA()()()()),2&t&&(e.xp6(7),e.Q6J("ngForOf",i.menu))},dependencies:[a.sg,u.lC,u.rH]}),n})();var d=o(2538),p=o(3625),h=o(6550);let v=(()=>{class n{constructor(t){this.sanitizer=t}transform(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.H7,16))},n.\u0275pipe=e.Yjl({name:"safe",type:n,pure:!0}),n})();const b=["googleDocContent"];function x(n,s){1&n&&(e.TgZ(0,"div")(1,"div",5),e._UZ(2,"div",6)(3,"div",7)(4,"div",8)(5,"div",9)(6,"div",10)(7,"div",11)(8,"div",12)(9,"div",13)(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",11)(16,"div",12)(17,"div",13)(18,"div",6)(19,"div",7)(20,"div",8)(21,"div",9)(22,"div",10)(23,"div",11)(24,"div",12)(25,"div",13),e.qZA()())}function N(n,s){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"iframe",14,15),e.ALo(3,"safe"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("src",e.lcZ(3,1,"https://docs.google.com/document/d/e/"+t.newsDetails.googleDocPublishId+"/pub?embedded=true"),e.uOi)}}function _(n,s){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,N,4,3,"div",1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!(null==t.newsDetails||!t.newsDetails.googleDocPublishId))}}function C(n,s){if(1&n&&(e.TgZ(0,"div",16)(1,"div",17),e.O4$(),e.TgZ(2,"svg",18),e._UZ(3,"path",19),e.qZA()(),e.kcU(),e.TgZ(4,"div",20),e._uU(5),e.qZA()()),2&n){const t=e.oxw();e.Q6J("routerLink","/tin-tuc/"+t.newsRoute.prev.slug),e.xp6(5),e.Oqu(t.newsRoute.prev.title)}}function Z(n,s){if(1&n&&(e.TgZ(0,"div",21)(1,"div",20),e._uU(2),e.qZA(),e.TgZ(3,"div",17),e.O4$(),e.TgZ(4,"svg",18),e._UZ(5,"path",22),e.qZA()()()),2&n){const t=e.oxw();e.Q6J("routerLink","/tin-tuc/"+t.newsRoute.next.slug),e.xp6(2),e.Oqu(t.newsRoute.next.title)}}let L=(()=>{class n{constructor(t,i,l){this.newsService=t,this.route=i,this.cd=l,this.newsDetails=new T,this.newsRoute={},this.loadingNews=!1,this.googleDocContent=e.SBq,this.loadingNews=!0}ngOnInit(){this.loadingNews=!0,this.route.params.subscribe(t=>{t.slug&&(this.loadingNews=!0,this.slug=t.slug,this.getNewsDetails())})}ngAfterViewChecked(){this.cd.detectChanges(),setTimeout(()=>{this.newsService.isActiveNews&&!this.newsDetails?.slug&&(this.route.params.subscribe(t=>{t.slug&&(this.slug=t.slug)}),this.getNewsDetails())})}getNewsDetails(){try{this.newsService.getNewsBySlug(this.slug).subscribe(t=>{if(200===t.code){this.newsDetails=t.data,this.breadcrumb=[{path:"/tin-tuc",label:"TIN T\u1ee8C"},{path:`/tin-tuc/${this.newsDetails?.slug}`,label:this.newsDetails?.title}];const i=this.newsService.newsData.indexOf(this.newsService.newsData.find(l=>l.id==this.newsDetails.id));this.newsRoute={prev:i>0?this.newsService.newsData[i-1]:null,next:this.newsService.newsData[i+1]},this.loadingNews=!1}})}catch(t){console.log(t)}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.Y),e.Y36(u.gz),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-news-details"]],viewQuery:function(t,i){if(1&t&&e.Gf(b,5),2&t){let l;e.iGM(l=e.CRH())&&(i.googleDocContent=l.first)}},decls:6,vars:6,consts:[[3,"breadcrumb","align"],[4,"ngIf"],[1,"flex","border-t"],["class","w-full flex items-center justify-start cursor-pointer hover:text-primary transition p-3",3,"routerLink",4,"ngIf"],["class","w-full flex items-center justify-end cursor-pointer hover:text-primary transition p-3",3,"routerLink",4,"ngIf"],[1,"p-5"],[1,"bg-[#e8eaed]","h-3","w-1/2","mb-3","rounded-full","animate-pulse"],[1,"bg-[#e8eaed]","h-3","w-1/3","mb-3","rounded-full","animate-pulse"],[1,"bg-[#e8eaed]","h-3","w-2/3","mb-3","rounded-full","animate-pulse"],[1,"bg-[#e8eaed]","h-3","w-3/5","mb-3","rounded-full","animate-pulse"],[1,"bg-[#e8eaed]","h-3","w-4/5","mb-3","rounded-full","animate-pulse"],[1,"bg-[#e8eaed]","h-3","w-1/6","mb-3","rounded-full","animate-pulse"],[1,"bg-[#e8eaed]","h-3","w-1/4","mb-3","rounded-full","animate-pulse"],[1,"bg-[#e8eaed]","h-3","w-5/6","mb-3","rounded-full","animate-pulse"],["frameborder","0","webkitallowfullscreen","","mozallowfullscreen","","allowfullscreen","",1,"w-full","h-screen",3,"src"],["googleDocContent",""],[1,"w-full","flex","items-center","justify-start","cursor-pointer","hover:text-primary","transition","p-3",3,"routerLink"],[1,"mx-3"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","d","M15.75 19.5L8.25 12l7.5-7.5"],[1,"truncate"],[1,"w-full","flex","items-center","justify-end","cursor-pointer","hover:text-primary","transition","p-3",3,"routerLink"],["stroke-linecap","round","stroke-linejoin","round","d","M8.25 4.5l7.5 7.5-7.5 7.5"]],template:function(t,i){1&t&&(e._UZ(0,"app-breadcrumb",0),e.YNc(1,x,26,0,"div",1),e.YNc(2,_,2,1,"div",1),e.TgZ(3,"div",2),e.YNc(4,C,6,2,"div",3),e.YNc(5,Z,6,2,"div",4),e.qZA()),2&t&&(e.Q6J("breadcrumb",i.breadcrumb)("align","end"),e.xp6(1),e.Q6J("ngIf",i.loadingNews),e.xp6(1),e.Q6J("ngIf",!i.loadingNews),e.xp6(2),e.Q6J("ngIf",i.newsRoute.prev),e.xp6(1),e.Q6J("ngIf",i.newsRoute.next))},dependencies:[a.O5,u.rH,p.L,v]}),n})();class T{}function y(n,s){1&n&&(e.O4$(),e.kcU(),e.TgZ(0,"div",6),e.Hsn(1),e.qZA())}function D(n,s){1&n&&(e.O4$(),e.kcU(),e._UZ(0,"div",7))}const k=["*"];let I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-news-list-item"]],inputs:{data:"data"},ngContentSelectors:k,decls:8,vars:6,consts:[[1,"flex","group","cursor-pointer","py-4","items-center","border-dotted","border-b"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-6","h-6","text-primary","transition","group-hover:translate-x-1"],["stroke-linecap","round","stroke-linejoin","round","d","M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"],["class","flex-1 ml-3 truncate transition group-hover:text-primary",4,"ngIf"],["class","flex-1 ml-3 truncate transition group-hover:text-primary bg-[#e8eaed] h-3 w-full rounded-full animate-pulse",4,"ngIf"],[1,"transition","group-hover:text-primary"],[1,"flex-1","ml-3","truncate","transition","group-hover:text-primary"],[1,"flex-1","ml-3","truncate","transition","group-hover:text-primary","bg-[#e8eaed]","h-3","w-full","rounded-full","animate-pulse"]],template:function(t,i){1&t&&(e.F$t(),e.TgZ(0,"div",0),e.O4$(),e.TgZ(1,"svg",1),e._UZ(2,"path",2),e.qZA(),e.YNc(3,y,2,0,"div",3),e.YNc(4,D,1,0,"div",4),e.kcU(),e.TgZ(5,"div",5),e._uU(6),e.ALo(7,"date"),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("ngIf",null==i.data?null:i.data.title),e.xp6(1),e.Q6J("ngIf",!(null!=i.data&&i.data.title)),e.xp6(2),e.Oqu(e.xi3(7,3,null==i.data?null:i.data.date,"dd/MM/YY")))},dependencies:[a.O5,a.uU]}),n})();function A(n,s){if(1&n&&(e.TgZ(0,"app-news-list-item",4),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("data",t)("routerLink",null==t?null:t.path),e.xp6(1),e.Oqu(null==t?null:t.title)}}function O(n,s){if(1&n&&(e.ynx(0),e.YNc(1,A,2,3,"app-news-list-item",3),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.newsList)}}function Q(n,s){1&n&&e._UZ(0,"app-news-list-item")}function U(n,s){if(1&n&&(e.ynx(0),e.YNc(1,Q,1,0,"app-news-list-item",5),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.newsList)}}let m=(()=>{class n{constructor(t,i){this.newsService=t,this.cd=i,this.newsList=[],this.breadcrumb=[],this.breadcrumb=location.pathname.includes("su-kien")?[{path:"tin-tuc/su-kien",label:"S\u1ef0 KI\u1ec6N"}]:[{path:"",label:"TIN T\u1ee8C"}]}ngOnInit(){this.getNewsList()}ngAfterViewChecked(){this.cd.detectChanges(),setTimeout(()=>{this.newsService.isActiveNews&&!this.newsList[0]?.title&&this.getNewsList()})}getNewsList(){const t=Array.from(Array(14),(i,l)=>null);this.newsList=t.splice(t?.length>7?7:t.length/2,7);try{this.newsService.getAllNews().subscribe(i=>{if(200===i.code){console.log(i.data);const l=i.data.sort((r,M)=>r.date>M.date?-1:1).map(r=>({id:r?.id,title:r?.title,slug:r?.slug,date:r?.date,path:`/tin-tuc/${r.slug}`,image:r.thumbnail}));this.newsList=l}})}catch(i){console.log(i)}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.Y),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-news-list"]],decls:4,vars:4,consts:[[3,"breadcrumb","align"],[1,"p-3"],[4,"ngIf"],[3,"data","routerLink",4,"ngFor","ngForOf"],[3,"data","routerLink"],[4,"ngFor","ngForOf"]],template:function(t,i){1&t&&(e._UZ(0,"app-breadcrumb",0),e.TgZ(1,"div",1),e.YNc(2,O,2,1,"ng-container",2),e.YNc(3,U,2,1,"ng-container",2),e.qZA()),2&t&&(e.Q6J("breadcrumb",i.breadcrumb)("align","end"),e.xp6(2),e.Q6J("ngIf",null==i.newsList[0]?null:i.newsList[0].title),e.xp6(1),e.Q6J("ngIf",!(null!=i.newsList[0]&&i.newsList[0].title)))},dependencies:[a.sg,a.O5,u.rH,p.L,I]}),n})();const Y=[{path:"",component:g,children:[{path:"",component:m},{path:"su-kien",component:m},{path:":slug",component:L}]}];let J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(Y),u.Bz]}),n})();var S=o(3609);let F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[a.ez,J,S.w]}),n})()}}]);