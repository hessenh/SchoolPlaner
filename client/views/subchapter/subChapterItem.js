Template.subChapterItem.subChapterItemList = function(){
	return SubChapters.find({chapterID:Session.get("selected_chapter")});
}

Template.subChapterItem.selected_subChapter = function(){
	if(Session.get("selected_subChapter")==this._id){
		return true;
	}
	else{
		return false;
	}
}
Template.subChapterItem.knowItSubChapter = function(){
	if(SubChapters.findOne({_id:Session.get("selected_subChapter")}).status=="Know It!"){
		return true;
	}
	else{
		return false;
	}
}

Template.subChapterItem.events({
	'click #selected_subChapter':function(e,t){
		if(Session.get("selected_subChapter")==this._id){
			Session.set("selected_subChapter",null);
		}
		else{
			Session.set("selected_subChapter",this._id);	
		}
	},
	'click .editSubChapter':function(e,t){
		Router.go("editSubChapterItem");
	},
	'click .knowItSubChapter':function(e,t){
		Meteor.call('knowItSubChapter',Session.get("selected_subChapter"));
	},
	'click .dontKnowItSubChapter':function(e,t){
		Meteor.call('dontKnowItSubChapter',Session.get("selected_subChapter"));
	}

})