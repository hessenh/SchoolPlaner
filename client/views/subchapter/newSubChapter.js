Template.newSubChapter.events({
	'click .submitSubChapter':function(e,t){
		e.preventDefault();
		var subchapter = t.find('#newSubChapter-subChapterTitle').value;
		var summary = t.find('#summary').value;
		Meteor.call('addSubChapter',summary,subchapter,Session.get("selected_chapter"),Session.get("selected_course"),Meteor.user()._id);
		Router.go("chapterItem");
	},
	'click .backSubChapter':function(e,t){
		Router.go('chapterItem');
	}
})