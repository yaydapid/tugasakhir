"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[613],{8889:(A,d,l)=>{l.r(d),l.d(d,{ProfileModule:()=>Z});var c=l(9808),m=l(4738),u=l(2497),o=l(5e3),r=l(3254),p=l(3075);function g(e,n){if(1&e&&(o.TgZ(0,"span",8),o._uU(1),o.qZA()),2&e){const t=o.oxw().$implicit,i=o.oxw();o.xp6(1),o.Oqu(i.profileData[t.prop])}}function v(e,n){if(1&e&&(o.TgZ(0,"div",12),o._UZ(1,"input",13),o.qZA()),2&e){const t=o.oxw().$implicit,i=o.oxw();o.xp6(1),o.Q6J("placeholder",t.title)("ngModel",i.profileData[t.prop])}}function h(e,n){if(1&e&&(o.TgZ(0,"div",7)(1,"span",8),o._uU(2),o.qZA(),o.TgZ(3,"span",9),o._uU(4,":"),o.qZA(),o.YNc(5,g,2,1,"span",10),o.YNc(6,v,2,2,"div",11),o.qZA()),2&e){const t=n.$implicit;o.oxw();const i=o.MAs(11);o.xp6(2),o.Oqu(t.title),o.xp6(3),o.Q6J("ngIf",0==i.value),o.xp6(1),o.Q6J("ngIf",1==i.value)}}let f=(()=>{class e{constructor(){this.profileData={name:"David",job:"Director",address:"Surabaya, Indonesia",email:"david@gmail.com"},this.profileDesc=[{title:"Name",prop:"name"},{title:"Job",prop:"job"},{title:"Address",prop:"address"},{title:"Email",prop:"email"}]}ngOnInit(){}updateProfile(){console.log("update profile")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["ngx-profile"]],decls:14,vars:3,consts:[[1,"row","w-100"],[1,"col-6"],["class","row",4,"ngFor","ngForOf"],["src","https://th.bing.com/th/id/R.1897f97542abc7ed782d257ee781bc40?rik=xFlJ%2bhoKSCg5cA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-male-user-icon-512.png&ehk=pivQjzqNrQFIa6FjMTnQevAdjpeQ4Sh3OXEgbMFIE2o%3d&risl=&pid=ImgRaw&r=0","alt","profile name","width","50%",1,"img-thumbnail","rounded","mx-auto","d-block",2,"cursor","pointer"],["type","hidden","value","0"],["editProfile",""],["nbButton","",3,"status","click"],[1,"row"],[1,"col-5","my-2"],[1,"col-2","my-2"],["class","col-5 my-2",4,"ngIf"],["class","col-5",4,"ngIf"],[1,"col-5"],["nbInput","","type","text","fieldSize","small",3,"placeholder","ngModel"]],template:function(t,i){if(1&t){const a=o.EpF();o.TgZ(0,"nb-card")(1,"nb-card-header")(2,"h5"),o._uU(3,"Profile"),o.qZA()(),o.TgZ(4,"nb-card-body")(5,"div",0)(6,"div",1),o.YNc(7,h,7,3,"div",2),o.qZA(),o.TgZ(8,"div",1),o._UZ(9,"img",3),o.qZA()(),o._UZ(10,"input",4,5),o.TgZ(12,"button",6),o.NdJ("click",function(){o.CHM(a);const s=o.MAs(11);return 1==s.value&&i.updateProfile(),s.value=1==s.value?0:1}),o._uU(13),o.qZA()()()}if(2&t){const a=o.MAs(11);o.xp6(7),o.Q6J("ngForOf",i.profileDesc),o.xp6(5),o.Q6J("status",0==a.value?"primary":"success"),o.xp6(1),o.hij(" ",0==a.value?"Edit Profile":"Update Profile"," ")}},directives:[r.Asz,r.ndF,r.yKW,c.sg,c.O5,r.h8i,p.Fj,p.JJ,p.On,r.DPz],encapsulation:2}),e})();const P=[{path:"",component:f,children:[{path:"profile",component:f}]}];let x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[u.Bz.forChild(P)],u.Bz]}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[c.ez,m.O,x,r.zyh,r.T2N,r.nKr,p.u5]]}),e})()}}]);