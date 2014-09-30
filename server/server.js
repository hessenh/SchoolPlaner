Courses = new Meteor.Collection("courses");
Chapters = new Meteor.Collection("chapters");
SubChapters = new Meteor.Collection("subChapters");
Tasks = new Meteor.Collection("tasks");
DiscussCourses = new Meteor.Collection("discussCourses");
DiscussQuestions = new Meteor.Collection("discussQuestions");
QuestionComment = new Meteor.Collection("questionComment");

Meteor.publish('courses',function(){
	return Courses.find({});
})
Meteor.publish('chapters',function(){
	return Chapters.find({});
})
Meteor.publish('subChapters',function(){
	return SubChapters.find({});
})
Meteor.publish('tasks',function(){
	return Tasks.find({});
})
Meteor.publish('discussCourses',function(){
	return DiscussCourses.find({});
})
Meteor.publish('discussQuestions',function(){
	return DiscussQuestions.find({});
})
Meteor.publish('questionComment',function(){
	return QuestionComment.find({});
})

Meteor.methods({
	'addCourse':function(course,userID){
		Courses.insert({course:course,userID:userID});
	},
	'addChapter':function(chapter,course,userID){
		Chapters.insert({chapter:chapter,course:course,userID:userID,summary:"..."});
	},
	'addSubChapter':function(summary,subChapter,chapterID,courseID,userID){
		SubChapters.insert({summary:summary,subChapter:subChapter,chapterID:chapterID,courseID:courseID,userID:userID});
	},
	'editSubChapter':function(subchapterID,summary,subChapter,chapterID,courseID,userID){
		SubChapters.update({_id:subchapterID},{$set:{summary:summary,subChapter:subChapter,chapterID:chapterID,courseID:courseID,userID:userID}});
	},
	'deleteSubChapter':function(subchapterID){
		SubChapters.remove(subchapterID);
	},
	'knowItSubChapter':function(subchapterID){
		SubChapters.update({_id:subchapterID},{$set:{status:"Know It!"}});
	},
	'dontKnowItSubChapter':function(subchapterID){
		SubChapters.update({_id:subchapterID},{$set:{status:"Don't know it yet.."}});
	},
	'removeChapter':function(chapterID){
		Chapters.remove(chapterID);
		SubChapters.remove({chapterID:chapterID});
	},
	'addTask':function(courseID,userID,taskTitle,taskInfo,dueDate){
		Tasks.insert({courseID:courseID,userID:userID,taskTitle:taskTitle,taskInfo:taskInfo,status:"Not finished",dueDate:dueDate})
	},
	'addDiscussCourse':function(courseTitle){
		DiscussCourses.insert({courseTitle:courseTitle});
	},
	'addQuestion':function(questionTitle,questionText,userID,courseID){
		DiscussQuestions.insert({questionTitle:questionTitle,questionText:questionText,userID:userID,courseID:courseID,date:new Date()});
	},
	'deleteQuestion':function(questionID){
		DiscussQuestions.remove({_id:questionID});
		QuestionComment.remove({questionID:questionID});
	},
	'addComment':function(comment,questionID,courseID,userID,username){
		QuestionComment.insert({comment:comment,questionID:questionID,courseID:courseID,userID:userID,score:0,user:username});
		console.log(QuestionComment.find().count());
	},
	'deleteComment':function(commentID){
		QuestionComment.remove({_id:commentID});
	},
	'commentScore':function(commentID,value){
		QuestionComment.update({_id:commentID},{$inc:{score:value}});
	}
})





Meteor.startup(function(){
	process.env.MAIL_URL = 'smtp://postmaster@sandboxaa5b91511a37426c99c84a9d1d58bda0.mailgun.org:d6368cd9eccde7ef38eb88017ba24036@smtp.mailgun.org:587'
	Accounts.emailTemplates.from = "Verfication Link";
});