Template.chapterItem.selected_chapter = function(){
	return Chapters.find({_id:Session.get("selected_chapter")});
}

Template.chapterItem.events({
	'click .addSubChapter':function(e,t){
		Router.go("newSubChapter");
	},
	'click .chapterSummary':function(e,t){
		Router.go("chapterSummary");
	},
	'click .backChapter':function(e,t){
		Router.go("courseItem");
	}
})