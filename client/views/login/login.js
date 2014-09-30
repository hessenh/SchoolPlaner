Template.signupForm.events({
	'submit #signup-form':function(e,t){
		e.preventDefault();

		Accounts.createUser({
			username:t.find('#signup-username').value,
			password:t.find('#signup-password').value,
			email:t.find('#signup-email').value,
			profile:{
				fullname:t.find('#signup-name').value
			}
		},function(err){
			if(err){
				alert("Account is not created");
			}
			else{
				Router.go("home");
			}
		})
	}
})

Template.logoutForm.events({
	'click #logout-form':function(e,t){
		e.preventDefault();

		Meteor.logout(function(error){
			if(error){
				alert("Unable to logout");
			}
			else{
				Router.go('home');
			}
		})
	}
})

Template.loginForm.events({
	'submit #login-form':function(e,t){
		e.preventDefault();
		var uname = t.find('#login-username').value;
		var password = t.find('#login-password').value;
 
		Meteor.loginWithPassword(uname,password,function(error){
			if(error){
				alert("Could not log in");
				console.log(error);
			}
			else{
				Router.go("home");
			}
		})
	},
	'click .sign-up':function(e,t){
		e.preventDefault();
		Router.go("/signupForm");
	}
})

Meteor.startup(function(){
	Session.set("resePass",false);
})
Template.recovery.helpers({
	'resetPassword':function(t){
		if(Accounts._resetPasswordToken){
			Session.set("resetToken",Accounts._resetPasswordToken);
			Session.set("resePass",true);
		}
		return Session.get("resePass");

	}
})

Template.recovery.events({
	'submit #recovery-form':function(e,t){
		e.preventDefault();
		var email = t.find('#recovery-email').value;
		Accounts.forgotPassword({email:email},function(error){
			if(error){
				console.log(error);
				alert("Unable to send Reset link");
			}
		})
	},
	'submit #new-password':function(e,t){
		e.preventDefault();
		var newPass = t.find('#new-password-password').value;
		Accounts.resetPassword(Session.get("resetToken"),newPass,function(error){
			if(error){
				alert("Password not changed");
			}
			else{
				alert("Password is changed");
			}
		});
	}
})