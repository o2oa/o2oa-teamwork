MWF.xApplication.TeamWork = MWF.xApplication.TeamWork || {};

MWF.xApplication.TeamWork.Stat = new Class({
    Extends: MWF.widget.Common,
    Implements: [Options, Events],
    options: {
        "style": "default"
    },
    initialize: function (container, app, options) {
        this.setOptions(options);
        this.container = container;

        this.app = app; 
        this.lp = this.app.lp.Stat;
        this.rootActions = this.app.rootActions;
        this.actions = this.rootActions.StatAction;

        this.path = "../x_component_TeamWork/$Stat/";
        this.cssPath = this.path+this.options.style+"/css.wcss";
        this._loadCss();

        // if (this.options.mvcStyle) this.stylePath = this.path + this.options.style + "/" + this.options.mvcStyle;
/*
* 蓝色 #4a90e2
* 灰色 #666666
*/
        this.load();
    },
    load: function () { //
        this.container.empty(); 

        this.naviLayout = new Element("div.naviLayout",{styles:this.css.naviLayout}).inject(this.container);
        this.contentLayout = new Element("div.contentLayout",{styles:this.css.contentLayout}).inject(this.container);

        this.loadNavi();
        this.loadPersonal();

    },
    loadNavi: function(){
        var node = this.naviLayout;
        var expandNavi = new Element("div.expandNavi",{styles:this.css.naviItem}).inject(node);
        var expandIcon = new Element("div.expandIcon",{styles:this.css.naviIcon}).inject(expandNavi);
        expandIcon.setStyles({ "background-image":"url(../x_component_TeamWork/$Stat/default/icon/expand80.png)" });

        var homeNavi = new Element("div.personalNavi",{styles:this.css.naviItem}).inject(node);
        var homeIcon = new Element("div.homeIcon",{styles:this.css.naviIcon}).inject(homeNavi);
        new Element("div.naviTxt",{styles:this.css.naviTxt,text:"返回首页"}).inject(homeNavi);
        homeIcon.setStyles({ "background-image":"url(../x_component_TeamWork/$Stat/default/icon/home80.png)" });

        var userNavi = new Element("div.userNavi",{styles:this.css.naviItem}).inject(node);
        var userIcon = new Element("div.userlIcon",{styles:this.css.naviIcon}).inject(userNavi);
        new Element("div.naviTxt",{styles:this.css.naviTxt,text:"个人"}).inject(userNavi);
        userIcon.setStyles({ "background-image":"url(../x_component_TeamWork/$Stat/default/icon/user80.png)" });

        var unitNavi = new Element("div.unitNavi",{styles:this.css.naviItem}).inject(node);
        var managerIcon = new Element("div.managerIcon",{styles:this.css.naviIcon}).inject(unitNavi);
        new Element("div.unitTxt",{styles:this.css.naviTxt,text:"管理"}).inject(unitNavi);
        managerIcon.setStyles({ "background-image":"url(../x_component_TeamWork/$Stat/default/icon/manager80.png)" });

        expandIcon.addEvents({
            click:function(){
                if(this.expand){
                    //node.setStyles({"width":"80px"});
                    var fx = new Fx.Tween(node,{duration:200});
                    fx.start(["width"] ,"240px", "80px").chain(function(){
                        this.expand = false
                    }.bind(this));
                }else{
                    //node.setStyles({"width":"240px"});
                    var fx = new Fx.Tween(node,{duration:200});
                    fx.start(["width"] ,"80px", "240px").chain(function(){
                        this.expand = true
                    }.bind(this));

                }
            }.bind(this)
        });
        homeNavi.addEvents({
            click:function(){
                var home = new MWF.xApplication.TeamWork.ProjectList(this.container,this.app);
                home.load();
            }.bind(this)
        });
    },
    loadPersonal:function(){

    },
    test:function(){
        alert("loadtask1")
    }


});
