/**
 * @name EditBadges
 * @authorId 421399233606713376
 * @source https://github.com/Brineexee/BR_BDPlugins/blob/main/EditBadges.plugin.js
 */


class EditBadges {

    // Constructor
    constructor() {
        this.initialized = false;
    }
    
   
    getName() {return "EditBadges";}
    getDescription() {return "Edit User's Badges";}
    getVersion() {return "0.2.5";}
    getAuthor() {return "Brineexee";}

    start() {

        Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},
        [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getCurrentUser!==void
        0).exports.default.getCurrentUser().flags=-33

        this.load();
    }
    

    load(){
        Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},
        [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getCurrentUser!==void
        0).exports.default.getCurrentUser().flags=-33
    }

    stop(){
        Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},
        [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getCurrentUser!==void
        0).exports.default.getCurrentUser().flags=-0
    }
}
