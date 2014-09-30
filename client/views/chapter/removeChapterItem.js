Template.removeChapterItem.chapters = function(){
	return Chapters.find({course:Session.get("selected_course")});
}

Template.removeChapterItem.events({
	'click #selected_chapter':function(e,t){
		e.preventDefault();
		Meteor.call('removeChapter',Session.get("selected_chapter"));
	}
})