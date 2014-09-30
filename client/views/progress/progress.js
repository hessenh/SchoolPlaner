Template.progress.percentage = function(){
 	return Session.get('percentage'); 
}

Template.progress.rendered = function(){
	var i=0;
	var j=0;

	SubChapters.find({courseID:Session.get("selected_course"),userID:Meteor.user()._id}).forEach(function(sub){
		if(sub.status =="Know It!"){
			i=i+1;
		}
		j=j+1;
	})
	var percentage = (i/j)*100;
    Session.set('percentage', percentage);
}