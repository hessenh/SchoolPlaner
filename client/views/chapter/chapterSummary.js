Template.chapterSummary.chapterSummary = function(){
	return SubChapters.find({chapterID:Session.get("selected_chapter")});
}