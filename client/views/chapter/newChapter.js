Template.newChapter.events({
	'click .submitChapter':function(e,t){
		var chapter = t.find('#newChapter-chapterName').value;
		var courseId = Session.get("selected_course");
		var userId = Meteor.user()._id;

		Meteor.call('addChapter',chapter,courseId,userId,function(error){
			if(error){
				alert("Could not add chapter");
			}
			else{
				Router.go("courseItem");
			}
		});
	}
})