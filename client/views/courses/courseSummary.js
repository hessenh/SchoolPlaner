Template.courseSummary.courseSummary = function(){
	return SubChapters.find({courseID:Session.get("selected_course")});
}

Template.courseSummary.chapterList = function(){
	return Chapters.find({course:Session.get("selected_course")});
}

Template.courseSummary.subChapterList = function(){
	return SubChapters.find({courseID:Session.get("selected_course")});
}