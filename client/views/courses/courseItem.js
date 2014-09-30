Template.courseItem.selected_course = function(){
	return Courses.find({_id:Session.get("selected_course")});
}

Template.courseItem.chapters = function(){
	return Chapters.find({course:Session.get("selected_course")});
}


Template.courseItem.events({
	'click .addChapterBtn':function(e,t){
		Router.go("newChapter");
	},
	'click #selected_chapter':function(e,t){
		Session.set("selected_chapter",this._id);
		Router.go("chapterItem");
	},
	'click .removeChapterBtn':function(e,t){
		Router.go("removeChapterItem");
	},
	'click .courseSummary':function(e,t){
		Router.go("courseSummary")
	},
	'click .backCourse':function(e,t){
		Router.go("courses");
	}
})