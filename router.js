Router.map(function() {
	this.route('home', {path: '/'});
	this.route('loginForm');
	this.route('logoutForm');
	this.route('signupForm');
	this.route('courses');
	this.route('newCourse');
	this.route('courseItem');
	this.route('newChapter');
	this.route('chapterItem');
	this.route('newSubChapter')
	this.route('editSubChapterItem');
	this.route('removeChapterItem');

	this.route('progress');
	this.route('newTask');
	this.route('taskItem');
	this.route('editTaskItem');
	this.route('chapterSummary');
	this.route('courseSummary');

	this.route('discuss');
	this.route('discussCourse');
	this.route('newDiscussCourse');
	this.route('newQuestion');
	this.route('discussCourseItem');
	this.route('questionItem');

});

Router.configure({
	layoutTemplate: 'layout'
});

