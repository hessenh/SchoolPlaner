Template.editSubChapterItem.events({
	'click .submitSubChapter':function(e,t){
		e.preventDefault();
		var subchapter = t.find('#newSubChapter-subChapterTitle').value;
		var summary = t.find('#summary').value;
		Meteor.call('editSubChapter',Session.get("selected_subChapter"),summary,subchapter,Session.get("selected_chapter"),Session.get("selected_course"),Meteor.user()._id);
		Router.go("chapterItem");
	},
	'click .deleteSubChapter':function(e,t){
		e.preventDefault();
		Meteor.call('deleteSubChapter',Session.get("selected_subChapter"));
		Router.go("chapterItem");
	},
	'click .canelSubChapter':function(e,t){
		Router.go("chapterItem");
	}
})

Template.editSubChapterItem.selected_subChapter = function(){
	return SubChapters.find({_id:Session.get("selected_subChapter")});
}