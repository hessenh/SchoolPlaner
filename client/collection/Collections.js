Courses = new Meteor.Collection("courses");
Chapters = new Meteor.Collection("chapters");
SubChapters = new Meteor.Collection("subChapters");
Tasks = new Meteor.Collection("tasks");
DiscussCourses = new Meteor.Collection("discussCourses");
DiscussQuestions = new Meteor.Collection("discussQuestions");
QuestionComment = new Meteor.Collection("questionComment");
Pictures  = new Meteor.Collection("pictures");

Meteor.subscribe("courses");
Meteor.subscribe("chapters");
Meteor.subscribe("subChapters");
Meteor.subscribe("tasks");
Meteor.subscribe("discussCourses");
Meteor.subscribe("discussQuestions");
Meteor.subscribe("questionComment");
Meteor.subscribe("pictures");

